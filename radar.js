var radar = echarts.init(document.getElementById('radar'));
option = {
    // title: {
    //     text: '微博疫情相关高频话题分析',
    //     textStyle: {
    //         fontWeight: 'normal',
    //         color: '#3b43ff',
    //         fontSize:25,
    //         align:'center',
    //     }
    // },
    tooltip: {},
    legend: {
        data: ['正面','中立','负面'],
        x:"center",
        y:'bottom',
        padding:[0,0,50,0],
        textStyle:{
            color: '#fff',
            fontSize:20,
        }
    },
    color: ['#e32f46','#1a9bfc','#90B7A1' ],

    radar: {
        name:{
            textStyle: {
                //设置颜色
                color:'#fff',
                fontSize:20,
            }
        },
        indicator: [
            { name: '疫情防控知识教育', max: 30000000},
            { name: '官方权威信息发布', max: 25000000},
            { name: '抗疫一线感人事迹', max: 19000000},
            { name: '疫情对国际民生的影响', max: 4500000},
            { name: '谣言相关话题', max: 3600000},
        ],
        center: ['50%','50%'],
        radius: "58%",
        splitArea : {
            show : true,
            areaStyle : {
                color: 'rgba(248,249,255,0)', // 图表背景的颜色
            },
        },
    },
    series: [{
        name: '',
        type: 'radar',
        itemStyle : {
            normal : {
                splitLine: {
                    lineStyle: {
                        color:'rgba(4,15,60,0.1)',
                        normal:{
                            type:'dotted'
                        }
                    },
                    width: 1,
                },
                label: {
                    show: false,
                    textStyle:{
                    },
                    formatter:function(params) {
                        return params.value;}
                },
            }
        },
        areaStyle: {
            normal: {
                width: 1,
                opacity: 0.5,
            },
        },
        data : [
            {
                value : [17360000, 9210000, 18950000, 3250000, 1540000],
                name : '正面',
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'default',
                            opacity: 0.8, // 图表中各个图区域的透明度
                            color: '#28e314' // 图表中各个图区域的颜色
                        }
                    }
                },
            },
            {
                value : [13790000, 3860000, 6340000, 4340000, 3580000],
                name : '负面'
            },
            {
                value : [28550000, 24120000, 9200000, 2670000, 1350000],
                name : '中立'
            },

        ]
    }]
};
radar.setOption(option);