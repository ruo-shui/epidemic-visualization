var base = +new Date(2019,12,16);
var oneDay =  24 * 3600 * 1000;
var date = [];

var data = [287,214,452,1122,2630,3647,4319,4131,4365,5810,5920,7149,7282,7734,8728,8549,9558,11042,11760,11898,12508,13108,8374,8621,12094,11210,11839,14058,12635,9980,7910,11323,11847,13986,12904,12095,8230,8544,11949,13713,13159,12298,10909,7159,8294,12886,12706,12500,12401,12830,8586,7869,10660,10514,10564,9368,8298,5684,4956,8383,4533,];

for (var i = 1; i < 62; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

option = {
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    backgroundColor: 'rgb(0, 0, 0,0)',
    title: {
        left: 'center',
        text: '全国舆情数量动态监测图',
        textStyle: {
            color: '#dfcbc0',
            fontSize: 28
        },
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
        axisLine:{
            lineStyle:{
                color:'white' //更改坐标轴颜色
            }
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        axisLine:{
            lineStyle:{
                color:'white' //更改坐标轴颜色
            }
        }
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 50
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name: '舆情总量',
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: data
        }
    ]
};

var myChart = echarts.init(document.getElementById('line'))
myChart.setOption(option)

