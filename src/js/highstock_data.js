import { Control } from './control'

export default class HighStockData {
  constructor(highchart_option) {
    this.load(highchart_option)
  }

  get series() {
    return this._series
  }

  get ohlc_series() {
    for (const series of this._series) {
      if (series.type == 'candlestick') {
        return series
      }
    }
    return undefined
  }

  get signals_series() {
    if (this._has_series) {
      for (const series of this._series) {
        if (series.type == 'signals') {
          return series
        }
      }
    }

    return undefined
  }

  indexof_ohlc_series(x) {
    for (let i = this.ohlc_series.data.length - 1; i >= 0; --i) {
      if (this.ohlc_series.data[i][0] == x) {
        return i
      }
    }
    return -1
  }

  indexof_signals_series(x) {
    for (let i = this.signals_series.data.length - 1; i >= 0; --i) {
      if (this.signals_series.data[i][0] == x) {
        return i
      }
    }
    return -1
  }

  get title() {
    return this._title
  }

  load(highchart_option) {
    this.highchart_option = highchart_option

    this._series = []

    this._orders = []
    this._title = ''
    this._has_series = false

    this._series.length = this.highchart_option.series.length
    //console.log(this._series.length)
    let series_index = 0
    for (const series of this.highchart_option.series) {
      if (series.type == 'candlestick') {
        this._title = series.name
        let line = {}
        line.name = series.name
        line.series_index = series_index
        line.data = []
        line.type = 'candlestick'
        for (let i = 0; i < series.data.length; ++i) {
          let data_item = []
          if (series.data[i].x !== undefined) {
            data_item.push(series.data[i].x)
            data_item.push(series.data[i].open)
            data_item.push(series.data[i].high)
            data_item.push(series.data[i].low)
            data_item.push(series.data[i].close)
            line.data.push(data_item)
          } else {
            data_item.push(series.data[i][0])
            data_item.push(series.data[i][1])
            data_item.push(series.data[i][2])
            data_item.push(series.data[i][3])
            data_item.push(series.data[i][4])
            line.data.push(data_item)
          }
        }
        this._series[series_index] = line
      }

      if (series.type == 'column' && series.name == 'Volume') {
        let line = {}
        line.name = series.name
        line.series_index = series_index
        line.data = []
        line.type = 'volume'
        for (let i = 0; i < series.data.length; ++i) {
          if (series.data[i].y === undefined) {
            this._series[0].data[i].push(series.data[i][1])
            line.data.push(series.data[i][1])
          } else {
            this._series[0].data[i].push(series.data[i].y)
            line.data.push(series.data[i].y)
          }
        }

        this._series[series_index] = line
      }

      if (series.type == 'line' && series.yAxis === 0) {
        let line = {}
        line.name = series.name
        line.series_index = series_index
        line.type = 'main'
        line.data = []
        let pre_count = this._series[0].data.length - series.data.length
        for (let i = 0; i < pre_count; ++i) {
          line.data.push(NaN)
        }
        for (let i = 0; i < series.data.length; ++i) {
          line.data.push(series.data[i].y)
        }

        this._series[series_index] = line
      }

      if (series.type == 'line' && series.yAxis !== 0) {
        let line = {}
        line.name = series.name
        line.series_index = series_index
        line.type = 'other'
        line.data = []
        let pre_count = this._series[0].data.length - series.data.length
        for (let i = 0; i < pre_count; ++i) {
          line.data.push(NaN)
        }
        for (let i = 0; i < series.data.length; ++i) {
          line.data.push(series.data[i].y)
        }

        this._series[series_index] = line
      }

      if (series.type == 'flags') {
        let line = {}
        line.name = series.name
        line.series_index = series_index
        line.type = 'signals'
        line.data = series.data.slice()
        this._series[series_index] = line
        this._has_series = true
      }

      series_index++
    }

    //console.log(highchart_option)

    //console.log(this._series)
  }

  reset(highchart_option) {
    this.load(highchart_option)
  }

  // indexOfDate(date) {
  //   for (let i = this.ohlc_series.data.length - 1; i >= 0; --i) {
  //     if (this.ohlc_series.data[i][0] === date) return i
  //   }
  //   return -1
  // }

  getVolumSeriesIndex() {
    let ret = -1
    for (const series of this._series) {
      if (series.name == 'Volume') {
        ret = series.series_index
        break
      }
    }
    return ret
  }

  update2(series_index, data) {
    let index = -1
    let signals_index = -1
    let first_time
    let updated_signals = false

    if (!Array.isArray(data) || data.length <= 0) return

    if (Array.isArray(data[0])) {
      first_time = data[0][0]
    } else {
      first_time = data[0].x
    }

    if (series_index == this.getVolumSeriesIndex()) {
      for (const item of data) {
        if (Array.isArray(item) && item.length === 2) {
          index = this.indexof_ohlc_series(item[0])
          if (index !== -1) {
            this.ohlc_series.data[index][5] = item[1]
          } else {
            let tmp_item = []
            tmp_item.length = 6
            tmp_item[0] = item[0]
            tmp_item[1] = NaN
            tmp_item[2] = NaN
            tmp_item[3] = NaN
            tmp_item[4] = NaN
            tmp_item[5] = item[1]
            this.ohlc_series.data.push(tmp_item)
          }
        } else {
          index = this.indexof_ohlc_series(item.x)
          if (index !== -1) {
            this.ohlc_series.data[index][5] = item.y
          } else {
            let tmp_item = []
            tmp_item.length = 6
            tmp_item[0] = item.x
            tmp_item[1] = NaN
            tmp_item[2] = NaN
            tmp_item[3] = NaN
            tmp_item[4] = NaN
            tmp_item[5] = item.y
            this.ohlc_series.data.push(tmp_item)
          }
        }
      }
    } else {
      for (const item of data) {
        if (item.open !== undefined) {
          //console.log(item)
          index = this.indexof_ohlc_series(item.x)
          //console.log(index)

          //console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
          if (index !== -1) {
            this._series[series_index].data[index][0] = item.x
            this._series[series_index].data[index][1] = item.open
            this._series[series_index].data[index][2] = item.high
            this._series[series_index].data[index][3] = item.low
            this._series[series_index].data[index][4] = item.close
            //this._series[series_index].data[index][5] = NaN
          } else {
            let data_item = []
            data_item[0] = item.x
            data_item[1] = item.open
            data_item[2] = item.high
            data_item[3] = item.low
            data_item[4] = item.close
            data_item[5] = NaN
            this._series[series_index].data.push(data_item)
          }
        } else if (item.title !== undefined) {
          signals_index = this.indexof_signals_series(item.x)
          if (signals_index !== -1) {
            this._series[series_index].data[signals_index].x = item.x
            this._series[series_index].data[signals_index].title = item.title
            this._series[series_index].data[signals_index].text = item.text
            this._series[series_index].data[signals_index].color = item.color
          } else {
            this._series[series_index].data.push(item)
          }

          updated_signals = true
        } else {
          if (Array.isArray(item) && item.length === 2) {
            index = this.indexof_ohlc_series(item[0])
            if (index !== -1) {
              this._series[series_index].data[index] = item[1]
            } else {
              this._series[series_index].data.push(item[1])
            }
          } else {
            index = this.indexof_ohlc_series(item.x)
            if (index !== -1) {
              this._series[series_index].data[index] = item.y
            } else {
              this._series[series_index].data.push(item.y)
            }
          }
        }
      }
    }

    if (first_time !== undefined) {
      index = this.indexof_ohlc_series(first_time)
      //console.log(this.ohlc_series.data[index])
      // 先更新成交量后更新 OHLC 不绘图
      if (!isNaN(this.ohlc_series.data[index][1]) && !updated_signals) {
        let tmp = this.ohlc_series.data.slice(index)
        // 第一次更新K线
        Control.updateData(tmp)
        // 第二次更新指标
        Control.updateData(tmp)
      }
    }

    // let tmp = this.ohlc_series.data.slice(
    //   this.ohlc_series.data.length - data.length
    // )
  }

  // update(data) {
  //   let tmp = []
  //   let tmp_main_lines = []
  //   let tmp_other_lines = []
  //   for (const series of data) {
  //     //console.log(series)

  //     if (series.type == 'candlestick') {
  //       for (let i = 0; i < series.data.length; ++i) {
  //         let data_item = []
  //         if (series.data[i].x !== undefined) {
  //           data_item.push(series.data[i].x)
  //           data_item.push(series.data[i].open)
  //           data_item.push(series.data[i].high)
  //           data_item.push(series.data[i].low)
  //           data_item.push(series.data[i].close)

  //           tmp.push(data_item)
  //         } else {
  //           data_item.push(series.data[i][0])
  //           data_item.push(series.data[i][1])
  //           data_item.push(series.data[i][2])
  //           data_item.push(series.data[i][3])
  //           data_item.push(series.data[i][4])

  //           tmp.push(data_item)
  //         }
  //       }
  //     }

  //     if (series.type == 'column' && series.name == 'Volume') {
  //       for (let i = 0; i < series.data.length; ++i) {
  //         if (series.data[i].y === undefined) {
  //           tmp[i].push(series.data[i][1])
  //         } else {
  //           tmp[i].push(series.data[i].y)
  //         }
  //       }
  //     }

  //     if (series.type == 'line' && series.yAxis === 0) {
  //       let line = {}
  //       line.name = series.name
  //       line.data = []
  //       for (let i = 0; i < series.data.length; ++i) {
  //         line.data.push(series.data[i].y)
  //       }
  //       tmp_main_lines.push(line)
  //     }

  //     if (series.type == 'line' && series.yAxis !== 0) {
  //       let line = {}
  //       line.name = series.name
  //       line.data = []
  //       for (let i = 0; i < series.data.length; ++i) {
  //         line.data.push(series.data[i].y)
  //       }
  //       tmp_other_lines.push(line)
  //     }

  //     // if (series.type == 'flags') {
  //     //   this._signals = series.data
  //     // }
  //   }

  //   for (let i = 0; i < tmp.length; ++i) {
  //     let index = this.indexOfDate(tmp[i][0])
  //     if (index !== -1) {
  //       this._data[index][0] = tmp[i][0]
  //       this._data[index][1] = tmp[i][1]
  //       this._data[index][2] = tmp[i][2]
  //       this._data[index][3] = tmp[i][3]
  //       this._data[index][4] = tmp[i][4]
  //       this._data[index][5] = tmp[i][5]

  //       for (let j = 0; j < tmp_main_lines.length; ++j) {
  //         this._main_lines[j].data[index] = tmp_main_lines[j].data[i]
  //       }

  //       for (let j = 0; j < tmp_other_lines.length; ++j) {
  //         this._other_lines[j].data[index] = tmp_other_lines[j].data[i]
  //       }
  //     } else {
  //       this._data.push([
  //         tmp[i][0],
  //         tmp[i][1],
  //         tmp[i][2],
  //         tmp[i][3],
  //         tmp[i][4],
  //         tmp[i][5]
  //       ])
  //       for (let j = 0; j < tmp_main_lines.length; ++j) {
  //         this._main_lines[j].data.push(tmp_main_lines[j].data[i])
  //       }

  //       for (let j = 0; j < tmp_other_lines.length; ++j) {
  //         this._other_lines[j].data.push(tmp_other_lines[j].data[i])
  //       }
  //     }
  //   }

  //   Control.updateData(tmp)
  //   //Control.updateData(tmp)
  // }
}
