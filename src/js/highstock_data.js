export default class HighStockData {
  constructor(highchart_option) {
    this.highchart_option = highchart_option

    console.log(this.highchart_option)

    console.log(this.highchart_option.series.length)

    this._data = []
    this._main_lines = []
    this._other_lines = []
    this._orders = []

    for (const series of this.highchart_option.series) {
      console.log(series)

      if (series.type == 'candlestick') {
        for (let i = 0; i < series.data.length; ++i) {
          let data_item = []
          data_item.push(series.data[i].x)
          data_item.push(series.data[i].open)
          data_item.push(series.data[i].high)
          data_item.push(series.data[i].low)
          data_item.push(series.data[i].close)
          this._data.push(data_item)
        }
      }

      if (series.type == 'column' && series.name == 'Volume') {
        for (let i = 0; i < series.data.length; ++i) {
          this._data[i].push(series.data[i].y)
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

      if (series.type == 'flags' && series.name == 'Order') {
        this._orders = series.data
      }
    }

    console.log(this._data)
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

  get orders() {
    return this._orders
  }
}
