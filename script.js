var ranges = [[1609455600000, 66, 39],
[1640991600000, 94, 114],
[1672527600000, 26, 57],
[1704063600000, 17, 34],
[1735686000000, 30, 2],
[1767222000000, 118, 174],
[1798758000000, 65, 97],
[1830294000000, 106, 95],
[1861916400000, 53, -31],
[1893452400000, 61, -33],
[1924988400000, 33, 21],
[1956524400000, 36, 93],
[1988146800000, 99, 141],
[2019682800000, 102, 89],
[2051218800000, 66, 130],
[2082754800000, 50, 285],
[2114377200000, 74, 293],
[2145913200000, 97, 68],
[2177449200000, 88, -162]];
var averages = [[1609455600000, 52.5],
[1640991600000, 104],
[1672527600000, 41.5],
[1704063600000, 25.5],
[1735686000000, 16],
[1767222000000, 146],
[1798758000000, 81],
[1830294000000, 100.5],
[1861916400000, 11],
[1893452400000, 14],
[1924988400000, 27],
[1956524400000, 64.5],
[1988146800000, 120],
[2019682800000, 95.5],
[2051218800000, 98],
[2082754800000, 167.5],
[2114377200000, 183.5],
[2145913200000, 82.5],
[2177449200000, -37]]

Highcharts.chart('container', {

  title: {
    text: 'Stock prices'
  },

  xAxis: {
    type: 'datetime',
    accessibility: {
      rangeDescription: 'Range: Jul 1st 2009 to Jul 31st 2009.'
    }
  },

  yAxis: {
    title: {
      text: null
    }
  },

  tooltip: {
    crosshairs: true,
    shared: true,
    valueSuffix: '°C'
  },

  series: [{
    name: 'Temperature',
    data: averages,
    zIndex: 1,
    marker: {
      fillColor: 'orange',
      lineWidth: 0,
      lineColor: Highcharts.getOptions().colors[0]
    }
  }, {
    name: 'Range',
    data: ranges,
    type: 'arearange',
    lineWidth: 0,
    linkedTo: ':previous',
    color: Highcharts.getOptions().colors[0],
    fillOpacity: 0.3,
    zIndex: 0,
    marker: {
      enabled: false
    }
  }]
});s