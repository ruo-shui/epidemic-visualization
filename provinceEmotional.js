// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('provinceEmotional'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['正面', '中立', '负面'],
        textStyle:{
            color:"#fff",
            fontSize:20,
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['湖北','广东','江西','浙江','山东','河南','四川','河北','福建','湖南','江苏','上海 ','甘肃','辽宁','北京','黑龙江','山西','安徽','陕西','重庆','贵州','广西','云南','吉林','天津','内蒙古','新疆','海南','西藏','青海','宁夏','香港','台湾','澳门'],
            nameLocation:'end',//坐标轴名称显示位置。
            axisLabel : {//坐标轴刻度标签的相关设置。
                interval:0,
                rotate:"45",
                textStyle:{
                    color: '#fff',
                    fontSize:14
                },
            },
            nameTextStyle:{
                color:'#fff'
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
                textStyle:{
                    color: '#fff',
                    fontSize:15
                },
            }
        }
    ],
    series: [
        {
            name: '正面',
            type: 'bar',
            stack: '广告',
            color:['#e32f46'],
            data: [13586,7146,5642,5554,4819,3845,3048,2981,2624,2562,2539,1374,1475,1253,727,904,1065,993,1047,971,1217,854,927,824,637,593,665,484,302,327,278,70,58,17]
        },
        {
            name: '中立',
            type: 'bar',
            stack: '广告',
            color:['#90B7A1'],
            data: [72606,46431,36242,36547,25731,19362,17145,16566,15534,13654,12736,9452,8208,6841,6273,6283,5944,6018,5801,5529,5775,5164,5349,5250,3976,3066,2822,2712,2160,2059,1491,1182,351,112]
        },
        {
            name: '负面',
            type: 'bar',
            stack: '广告',
            color:['#1a9bfc'],
            data: [12954,8939,7938,6564,3332,3023,2243,2681,2897,1656,1752,1656,850,852,1188,844,790,606,759,1070,476,944,678,584,461,326,498,336,381,357,244,424,419,10]
        },

    ]
};

myChart.setOption(option);
