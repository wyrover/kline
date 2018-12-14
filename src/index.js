import Kline from './js/kline';

window.Kline = Kline;

var kline = new Kline({
  element: '#kline_container',
  width: 1200,
  height: 650,
  theme: 'dark', // light/dark
  language: 'zh-cn', // zh-cn/en-us/zh-tw
  ranges: ['1w', '1d', '1h', '30m', '15m', '5m', '1m', 'line'],
  symbol: 'BTC',
  symbolName: 'BTC/USD',
  type: 'poll', // poll/socket
  url: '/mock.json',
  limit: 1000,
  intervalTime: 5000,
  debug: true,
  showTrade: true,
  onResize: function(width, height) {
    console.log('chart resized: ' + width + ' ' + height);
  }
});

kline.draw();

$('#resize-btn').click(function() {
  var height = $('#height').val();
  var width = $('#width').val();
  kline.resize(width, height);
});

$('#switch-trade-btn').click(function() {
  kline.toggleTrade();
});

$('#set-symbol-btn').click(function() {
  var symbol = $('#symbol').val();
  var symbolName = $('#symbol-name').val();
  kline.setSymbol(symbol, symbolName);
});

$('#toggle-theme-btn').click(function() {
  if (kline.theme == 'dark') {
    kline.setTheme('light');
  } else {
    kline.setTheme('dark');
  }
});

$('#set-lang-btn').click(function() {
  var lang = $('#lang-select').val();
  kline.setLanguage(lang);
});
