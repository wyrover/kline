import { ChartManager } from './chart_manager'
import { ChartSettings } from './chart_settings'
import * as data_sources from './data_sources'
import * as data_providers from './data_providers'
import * as areas from './areas'
import * as plotters from './plotters'
import { Timeline } from './timeline'
import { CName } from './cname'
import * as layouts from './layouts'
import * as themes from './themes'
import * as ranges from './ranges'

export class Template {
  static displayVolume = true

  static createCandlestickDataSource(dsAlias) {
    return new data_sources.MainDataSource(dsAlias)
  }

  static createDataSource(dsName, dsAlias, createFunc) {
    let mgr = ChartManager.instance
    if (mgr.getCachedDataSource(dsAlias) === null)
      mgr.setCachedDataSource(dsAlias, createFunc(dsAlias))
    mgr.setCurrentDataSource(dsName, dsAlias)
    mgr.updateData(dsName, null)
  }

  static createTableComps(dsName) {
    this.createMainChartComps(dsName)
    if (this.displayVolume) {
      this.createIndicatorChartComps(dsName, 'VOLUME')
    }
    this.createTimelineComps(dsName)
  }

  static createMainChartComps(dsName) {
    let mgr = ChartManager.instance
    let tableLayout = mgr.getArea(dsName + '.charts')
    let areaName = dsName + '.main'
    let rangeAreaName = areaName + 'Range'
    let area = new areas.MainArea(areaName)
    mgr.setArea(areaName, area)
    tableLayout.addArea(area)
    let rangeArea = new areas.MainRangeArea(rangeAreaName)
    mgr.setArea(rangeAreaName, rangeArea)
    tableLayout.addArea(rangeArea)
    let dp = new data_providers.MainDataProvider(areaName + '.main')
    mgr.setDataProvider(dp.getName(), dp)
    mgr.setMainIndicator(dsName, 'MA')
    let range = new ranges.MainRange(areaName)
    mgr.setRange(range.getName(), range)
    range.setPaddingTop(28)
    range.setPaddingBottom(12)

    // 主图背景
    let plotter = new plotters.MainAreaBackgroundPlotter(
      areaName + '.background'
    )
    mgr.setPlotter(plotter.getName(), plotter)

    // 主图表格
    plotter = new plotters.CGridPlotter(areaName + '.grid')
    mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.CandlestickPlotter(areaName + '.main')
    mgr.setPlotter(plotter.getName(), plotter)

    // 最高最低价提示
    plotter = new plotters.MinMaxPlotter(areaName + '.decoration')
    mgr.setPlotter(plotter.getName(), plotter)

    // 主图指标信息提示
    plotter = new plotters.MainInfoPlotter(areaName + '.info')
    mgr.setPlotter(plotter.getName(), plotter)

    // 主图光标
    plotter = new plotters.SelectionPlotter(areaName + '.selection')
    mgr.setPlotter(plotter.getName(), plotter)

    // 主题画图工具
    plotter = new plotters.CDynamicLinePlotter(areaName + '.tool')
    mgr.setPlotter(plotter.getName(), plotter)

    // 主图右侧坐标轴
    plotter = new plotters.RangeAreaBackgroundPlotter(
      areaName + 'Range.background'
    )
    mgr.setPlotter(plotter.getName(), plotter)

    // plotter = new plotters.COrderGraphPlotter(areaName + 'Range.grid')
    // mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.RangePlotter(areaName + 'Range.main')
    mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.RangeSelectionPlotter(areaName + 'Range.selection')
    mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.LastClosePlotter(areaName + 'Range.decoration')
    mgr.setPlotter(plotter.getName(), plotter)
  }

  static createIndicatorChartComps(dsName, indicName) {
    let mgr = ChartManager.instance
    let tableLayout = mgr.getArea(dsName + '.charts')
    let areaName = dsName + '.indic' + tableLayout.getNextRowId()
    let rangeAreaName = areaName + 'Range'
    let area = new areas.IndicatorArea(areaName)
    mgr.setArea(areaName, area)
    tableLayout.addArea(area)
    let rowIndex = tableLayout.getAreaCount() >> 1
    let heights = ChartSettings.get().charts.areaHeight
    if (heights.length > rowIndex) {
      let a, i
      for (i = 0; i < rowIndex; i++) {
        a = tableLayout.getAreaAt(i << 1)
        a.setTop(0)
        a.setBottom(heights[i])
      }
      area.setTop(0)
      area.setBottom(heights[rowIndex])
    }
    let rangeArea = new areas.IndicatorRangeArea(rangeAreaName)
    mgr.setArea(rangeAreaName, rangeArea)
    tableLayout.addArea(rangeArea)
    let dp = new data_providers.IndicatorDataProvider(areaName + '.secondary')
    mgr.setDataProvider(dp.getName(), dp)
    if (mgr.setIndicator(areaName, indicName) === false) {
      mgr.removeIndicator(areaName)
      return
    }

    // 绘制副图背景
    let plotter = new plotters.MainAreaBackgroundPlotter(
      areaName + '.background'
    )
    mgr.setPlotter(plotter.getName(), plotter)

    // 绘制副图表格
    plotter = new plotters.CGridPlotter(areaName + '.grid')
    mgr.setPlotter(plotter.getName(), plotter)

    // 绘制副图指标
    plotter = new plotters.IndicatorPlotter(areaName + '.secondary')
    mgr.setPlotter(plotter.getName(), plotter)

    // 绘制副图指标信息提示
    plotter = new plotters.IndicatorInfoPlotter(areaName + '.info')
    mgr.setPlotter(plotter.getName(), plotter)

    // 绘制副图光标十字线
    plotter = new plotters.SelectionPlotter(areaName + '.selection')
    mgr.setPlotter(plotter.getName(), plotter)

    // 绘制副图右侧坐标轴
    plotter = new plotters.RangeAreaBackgroundPlotter(
      areaName + 'Range.background'
    )
    mgr.setPlotter(plotter.getName(), plotter)

    // 绘制主图右侧坐标轴
    plotter = new plotters.RangePlotter(areaName + 'Range.main')
    mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.RangeSelectionPlotter(areaName + 'Range.selection')
    mgr.setPlotter(plotter.getName(), plotter)
  }

  static createTimelineComps(dsName) {
    let mgr = ChartManager.instance
    let plotter
    let timeline = new Timeline(dsName)
    mgr.setTimeline(timeline.getName(), timeline)

    plotter = new plotters.TimelineAreaBackgroundPlotter(
      dsName + '.timeline.background'
    )
    mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.TimelinePlotter(dsName + '.timeline.main')
    mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.TimelineSelectionPlotter(
      dsName + '.timeline.selection'
    )
    mgr.setPlotter(plotter.getName(), plotter)
  }

  static createLiveOrderComps(dsName) {
    let mgr = ChartManager.instance
    let plotter
    plotter = new plotters.BackgroundPlotter(dsName + '.main.background')
    mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.CLiveOrderPlotter(dsName + '.main.main')
    mgr.setPlotter(plotter.getName(), plotter)
  }

  static createLiveTradeComps(dsName) {
    let mgr = ChartManager.instance
    let plotter
    plotter = new plotters.BackgroundPlotter(dsName + '.main.background')
    mgr.setPlotter(plotter.getName(), plotter)

    plotter = new plotters.CLiveTradePlotter(dsName + '.main.main')
    mgr.setPlotter(plotter.getName(), plotter)
  }
}

export class DefaultTemplate extends Template {

  static loadTemplate(dsName, dsAlias) {
    let mgr = ChartManager.instance
    let settings = ChartSettings.get()
    let frameName = new CName(dsName).getCompAt(0)
    mgr.unloadTemplate(frameName)

    this.createDataSource(dsName, dsAlias, this.createCandlestickDataSource)

    let frame = new layouts.DockableLayout(frameName)
    mgr.setFrame(frame.getName(), frame)
    mgr.setArea(frame.getName(), frame)
    
    frame.setGridColor(themes.Theme.Color.Grid1)

    let area = new areas.TimelineArea(dsName + '.timeline')
    mgr.setArea(area.getName(), area)
    frame.addArea(area)
    area.setDockStyle(areas.ChartArea.DockStyle.Bottom)
    area.Measuring.addHandler(area, TemplateMeasuringHandler.onMeasuring)

    let tableLayout = new layouts.TableLayout(dsName + '.charts')
    mgr.setArea(tableLayout.getName(), tableLayout)
    tableLayout.setDockStyle(areas.ChartArea.DockStyle.Fill)
    frame.addArea(tableLayout)

    this.createTableComps(dsName)
    mgr.setThemeName(frameName, settings.theme)
    return mgr
  }
}

export class TemplateMeasuringHandler {
  static onMeasuring(sender, args) {
    let width = args.Width
    let height = args.Height
    let areaName = sender.getNameObject().getCompAt(2)
    if (areaName === 'timeline') {
      sender.setMeasuredDimension(width, 22)
    }
  }
}
