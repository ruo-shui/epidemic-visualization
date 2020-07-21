function getData(year) {
    var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 287, 214, 452, 1122, 2630, 3647, 4319, 4131, 4365, 5810, 5920,
        7149, 7282, 7734, 8728, 8549, 9558, 11042, 11760, 11898, 12508, 13108, 8374, 8621, 12094, 11210, 11839, 14058, 12635,
        9980,7910, 11323, 11847, 13986, 12904, 12095, 8230, 8544, 11949, 13713, 13159, 12298, 10909, 7159, 8294, 12886, 12706, 12500,
        12401, 12830, 8586, 7869, 10660, 10514, 10564, 9368, 8298, 5684, 4956, 8383, 4533, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0]

    year = year || '2020'
    var date = +echarts.number.parseDate(year + '-01-01')
    var end = +echarts.number.parseDate(year + '-12-31')
    var dayTime = 3600 * 24 * 1000
    var count = 0
    for (var time = date; time <= end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            data[count]
        ])
        count++
    }
    return data
}

var dataList = getData()
option = {
    tooltip: {
        formatter: function (params) {
            return '全国舆情总量: ' + params.value[1]
        }
    },
    visualMap: {
        show: false,
        min: 0,
        max: 15000,
        calculable: true,
        seriesIndex: [1],
        //orient: 'horizontal',
        orient: 'vertical',
        left: 10,
        bottom: 10,
        inRange: {
            color: ['rgba(255,255,255,0.98)', '#281fff'],
            opacity: 0.3
        },
        controller: {
            inRange: {
                opacity: 0.5
            }
        }
    },

    calendar: [{
        //left: 85,
        left: 'center',
        cellSize: [50, 35],
        yearLabel: {
            formatter: '2 0 2 0',
            color: '#41a8ff'
        },
        orient: 'vertical',
        dayLabel: {
            firstDay: 1,
            nameMap: 'cn',
            margin: 7,
            color: '#41a8ff'
        },
        monthLabel: {
            color: '#41a8ff'
        },
        //range: '2020-02'
        range: ['2020-01-01', '2020-03-31']
    }],

    series: [{
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
            show: true,
            formatter: function (params) {
                var d = echarts.number.parseDate(params.value[0])
                return d.getDate()
            },
            color: '#000'
        },
        data: dataList
    }, {
        name: '降雨量',
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: dataList
    }]
}
var myChart = echarts.init(document.getElementById('calendar'))
myChart.setOption(option)
