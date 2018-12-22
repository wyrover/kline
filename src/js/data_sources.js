import { NamedObject } from './named_object'
import { CToolManager } from './ctool_manager'
import Kline from './kline'

export class DataSource extends NamedObject {
  static UpdateMode = {
    DoNothing: 0,
    Refresh: 1,
    Update: 2,
    Append: 3
  }

  constructor(name) {
    super(name)
  }

  getUpdateMode() {
    return this._updateMode
  }

  setUpdateMode(mode) {
    this._updateMode = mode
  }

  getCacheSize() {
    return 0
  }

  getDataCount() {
    return 0
  }

  getDataAt(index) {
    return this._dataItems[index]
  }
}

export class MainDataSource extends DataSource {
  constructor(name) {
    super(name)
    this._erasedCount = 0
    this._dataItems = []
    this._decimalDigits = 0
    this.toolManager = new CToolManager(name)
  }

  clear() {
    this._erasedCount = 0
    this._dataItems = []
    this._decimalDigits = 0
    this.toolManager = new CToolManager(name)
  }

  getCacheSize() {
    return this._dataItems.length
  }

  getDataCount() {
    return this._dataItems.length
  }

  getUpdatedCount() {
    return this._updatedCount
  }

  getAppendedCount() {
    return this._appendedCount
  }

  getErasedCount() {
    return this._erasedCount
  }

  getDecimalDigits() {
    return this._decimalDigits
  }

  calcDecimalDigits(v) {
    let str = '' + v
    let i = str.indexOf('.')
    if (i < 0) {
      return 0
    }
    return str.length - 1 - i
  }

  getLastDate() {
    let count = this.getDataCount()
    if (count < 1) {
      return -1
    }
    return this.getDataAt(count - 1).date
  }

  getDataAt(index) {
    return this._dataItems[index]
  }

  indeOfDate(date) {
    for (let i = this._dataItems.length - 1; i >= 0; --i) {
      if (this._dataItems[i].date === date) {
        return i
      }
    }

    return -1
  }

  update(data) {
    this._updatedCount = 0
    this._appendedCount = 0
    this._erasedCount = 0
    let len = this._dataItems.length
    if (len > 0) {
      let lastIndex = len - 1
      let lastItem = this._dataItems[lastIndex]
      let e,
        i,
        cnt = data.length
      for (i = 0; i < cnt; i++) {
        e = data[i]

       
        let index = this.indeOfDate(e[0])
        if (index !== -1) {
          this.setUpdateMode(DataSource.UpdateMode.Update)
          this._dataItems[index].open = e[1]
          this._dataItems[index].high = e[2]
          this._dataItems[index].low = e[3]
          this._dataItems[index].close = e[4]
          this._dataItems[index].volume = e[5]
          this._updatedCount++
        } else {
          this.setUpdateMode(DataSource.UpdateMode.Append)
          this._dataItems.push({
            date: e[0],
            open: e[1],
            high: e[2],
            low: e[3],
            close: e[4],
            volume: e[5]
          })
          this._appendedCount++
        }
      }

      return true

      // if (cnt < Kline.instance.limit) {
      //   this.setUpdateMode(DataSource.UpdateMode.DoNothing)
      //   return false
      // }
    }

    this.setUpdateMode(DataSource.UpdateMode.Refresh)
    this._dataItems = []

    let d,
      n,
      e,
      i,
      cnt = data.length

    for (i = 0; i < cnt; i++) {
      e = data[i]
      for (n = 1; n <= 4; n++) {
        d = this.calcDecimalDigits(e[n])
        if (this._decimalDigits < d) this._decimalDigits = d
      }

      this._dataItems.push({
        date: e[0],
        open: e[1],
        high: e[2],
        low: e[3],
        close: e[4],
        volume: e[5]
      })
    }
    return true
  }

  select(id) {
    this.toolManager.selecedObject = id
  }

  unselect() {
    this.toolManager.selecedObject = -1
  }

  addToolObject(toolObject) {
    this.toolManager.addToolObject(toolObject)
  }

  delToolObject() {
    this.toolManager.delCurrentObject()
  }

  getToolObject(index) {
    return this.toolManager.getToolObject(index)
  }

  getToolObjectCount() {
    return this.toolManager.toolObjects.length
  }

  getCurrentToolObject() {
    return this.toolManager.getCurrentObject()
  }

  getSelectToolObjcet() {
    return this.toolManager.getSelectedObject()
  }

  delSelectToolObject() {
    this.toolManager.delSelectedObject()
  }
}
