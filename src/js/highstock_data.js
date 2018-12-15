export default class HighStockData {
  constructor(highchart_option) {
    this.highchart_option = highchart_option

    console.log(this.highchart_option)

    console.log(this.highchart_option.series.length)

    this._data = []

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
    }

    console.log(this._data)
  }

  get data() {
    return this._data
  }
}
