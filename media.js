// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('media'));

// 指定图表的配置项和数据
var option = {
    angleAxis: {
        axisLabel:{
            textStyle: {
                color:"#fff",
                fontSize:15
            }
        }

    },
    radiusAxis: {
        type: 'category',
        data: [ '微博', '微信', '论坛','新闻'],
        z: 15,
        axisLabel:{
            textStyle: {
                color:"#fff",
                fontSize:13
            }
        }
    },
    polar: { },
    series: [{
        type: 'bar',
        data: [1199,2544,13792,52825],
        color:['#e32f46'],
        coordinateSystem: 'polar',
        name: '正面',
        stack: 'a'
    }, {
        type: 'bar',
        data: [9256,19152,77593,303576],
        //color:['#ccffcc'],
        color:"rgb(204,255,204,0.7)",
        coordinateSystem: 'polar',
        name: '中立',
        stack: 'a'
    }, {
        type: 'bar',
        data: [2194,3579,14785,47587],
        color:['#1a9bfc'],
        coordinateSystem: 'polar',
        name: '负面',
        stack: 'a'
    }],
    legend: {
        show: true,
        data: ['正面', '中立', '负面'],
        x:"left",
        y:'bottom',
        textStyle:{
            color:"#fff",
            fontSize:20,

        }
    }
};
myChart.setOption(option);