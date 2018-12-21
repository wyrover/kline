import { Control } from './control'

export default class HighStockData {
  constructor(highchart_option) {
    this.load(highchart_option)
  }

  get data() {
    return this._data
  }

  get main_lines() {
    return this._main_lines
  }

  get other_lines() {
    return this._other_lines
  }

  get signals() {
    return this._signals
  }

  get title() {
    return this._title
  }

  load(highchart_option) {
    this.highchart_option = highchart_option

    console.log(this.highchart_option)

    console.log(this.highchart_option.series.length)

    this._data = []
    this._main_lines = []
    this._other_lines = []
    this._orders = []
    this._title = ''

    for (const series of this.highchart_option.series) {
      console.log(series)

      if (series.type == 'candlestick') {
        this._title = series.name
        for (let i = 0; i < series.data.length; ++i) {
          let data_item = []
          if (series.data[i].x !== undefined) {
            data_item.push(series.data[i].x)
            data_item.push(series.data[i].open)
            data_item.push(series.data[i].high)
            data_item.push(series.data[i].low)
            data_item.push(series.data[i].close)
            this._data.push(data_item)
          } else {
            data_item.push(series.data[i][0])
            data_item.push(series.data[i][1])
            data_item.push(series.data[i][2])
            data_item.push(series.data[i][3])
            data_item.push(series.data[i][4])
            this._data.push(data_item)
          }
        }
      }

      if (series.type == 'column' && series.name == 'Volume') {
        for (let i = 0; i < series.data.length; ++i) {
          if (series.data[i].y === undefined)
            this._data[i].push(series.data[i][1])
          else this._data[i].push(series.data[i].y)
        }
      }

      if (series.type == 'line' && series.yAxis === 0) {
        let line = {}
        line.name = series.name
        line.data = []
        let pre_count = this._data.length - series.data.length
        for (let i = 0; i < pre_count; ++i) {
          line.data.push(NaN)
        }
        for (let i = 0; i < series.data.length; ++i) {
          line.data.push(series.data[i].y)
        }
        this._main_lines.push(line)
      }

      if (series.type == 'line' && series.yAxis !== 0) {
        let line = {}
        line.name = series.name
        line.data = []
        let pre_count = this._data.length - series.data.length
        for (let i = 0; i < pre_count; ++i) {
          line.data.push(NaN)
        }
        for (let i = 0; i < series.data.length; ++i) {
          line.data.push(series.data[i].y)
        }
        this._other_lines.push(line)
      }

      if (series.type == 'flags') {
        this._signals = series.data
      }
    }

    console.log(this._data)
  }

  reset(highchart_option) {
    this.load(highchart_option)
  }

  indexOfDate(date) {
    for (let i = this._data.length - 1; i >= 0; --i) {
      if (this._data[i][0] === date) return i
    }
    return -1
  }

  update(data) {
    let tmp = []
    let tmp_main_lines = []
    let tmp_other_lines = []
    for (const series of data) {
      //console.log(series)

      if (series.type == 'candlestick') {
        for (let i = 0; i < series.data.length; ++i) {
          let data_item = []
          if (series.data[i].x !== undefined) {
            data_item.push(series.data[i].x)
            data_item.push(series.data[i].open)
            data_item.push(series.data[i].high)
            data_item.push(series.data[i].low)
            data_item.push(series.data[i].close)
            //this._data.push(data_item)
            tmp.push(data_item)
          } else {
            data_item.push(series.data[i][0])
            data_item.push(series.data[i][1])
            data_item.push(series.data[i][2])
            data_item.push(series.data[i][3])
            data_item.push(series.data[i][4])
            //this._data.push(data_item)
            tmp.push(data_item)
          }
        }
      }

      if (series.type == 'column' && series.name == 'Volume') {
        for (let i = 0; i < series.data.length; ++i) {
          if (series.data[i].y === undefined) {
            //this._data[i].push(series.data[i][1])
            tmp[i].push(series.data[i][1])
          } else {
            //this._data[i].push(series.data[i].y)
            tmp[i].push(series.data[i].y)
          }
        }
      }

      if (series.type == 'line' && series.yAxis === 0) {
        let line = {}
        line.name = series.name
        line.data = []
        for (let i = 0; i < series.data.length; ++i) {
          line.data.push(series.data[i].y)
        }
        tmp_main_lines.push(line)
      }

      if (series.type == 'line' && series.yAxis !== 0) {
        let line = {}
        line.name = series.name
        line.data = []
        for (let i = 0; i < series.data.length; ++i) {
          line.data.push(series.data[i].y)
        }
        tmp_other_lines.push(line)
      }

      // if (series.type == 'flags') {
      //   this._signals = series.data
      // }
    }

    for (let i = 0; i < tmp.length; ++i) {
      let index = this.indexOfDate(tmp[i][0])
      if (index !== -1) {
        this._data[index][0] = tmp[i][0]
        this._data[index][1] = tmp[i][1]
        this._data[index][2] = tmp[i][2]
        this._data[index][3] = tmp[i][3]
        this._data[index][4] = tmp[i][4]
        this._data[index][5] = tmp[i][5]

        for (let j = 0; j < tmp_main_lines.length; ++j) {
          this._main_lines[j].data[index] = tmp_main_lines[j].data[i]
        }

        for (let j = 0; j < tmp_other_lines.length; ++j) {
          this._other_lines[j].data[index] = tmp_other_lines[j].data[i]
        }
      } else {
        this._data.push([
          tmp[i][0],
          tmp[i][1],
          tmp[i][2],
          tmp[i][3],
          tmp[i][4],
          tmp[i][5]
        ])
        for (let j = 0; j < tmp_main_lines.length; ++j) {
          this._main_lines[j].data.push(tmp_main_lines[j].data[i])
        }

        for (let j = 0; j < tmp_other_lines.length; ++j) {
          this._other_lines[j].data.push(tmp_other_lines[j].data[i])
        }
      }
    }

    console.log(this._data)
    console.log(this._main_lines)
    console.log(this._other_lines)

    Control.updateData(tmp)
    Control.updateData(tmp)
  }
}
