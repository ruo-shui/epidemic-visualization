/* 全国疫情舆情数量分布*/
function creatCombineChart(text,max1,max2,d1,d2,) {
    var chinaLine1 = [17, 59, 77, 77, 149, 131, 259, 444, 688, 769, 1771, 1459, 1737, 1982, 2102, 2590, 2829, 3235, 3887,
        3694, 3143, 3399, 2656, 3062, 2478, 2015, 15152, 5090, 2641, 2009, 2048, 1886, 1749, 394, 889, 397, 648, 409, 508,
        406, 433, 327, 427, 573, 202, 125, 119, 139, 143, 99, 44, 40, 19, 24, 15, 8, 11, 20, 16, 21, 13]
    // var chinaLine2 = [287, 214, 452, 1122, 2630, 3647, 4319, 4131, 4365, 5810, 5920, 7149, 7282, 7734, 8728, 8549, 9558, 11042,
    //     11760, 11898, 12508, 13108, 8374, 8621, 12094, 11210, 11839, 14058, 12635, 9980, 7910, 11323, 11847, 13986, 12904, 12095,
    //     8230, 8544, 11949, 13713, 13159, 12298, 10909, 7159, 8294, 12886, 12706, 12500, 12401, 12830, 8586, 7869, 10660, 10514,
    //     10564, 9368, 8298, 5684, 4956, 8383, 4533]
    var chinaLine2 = [287, 214, 452, 1122, 2630, 3647, 4319, 4131, 4365, 5810, 5920, 7149, 7282, 7734, 8728, 8549, 9558, 11042,
        11760, 11898, 12508, 13108, 11984, 12547, 12094, 11210, 14839, 14058, 12635, 9980, 9910, 11323, 11847, 9986, 12904, 12095,
        8230, 8544, 11949, 10713, 10159, 10298, 10909, 7159, 8294, 10886, 10706, 10500, 10401, 9830, 8586, 7869, 10660, 10514,
        10564, 9368, 8298, 5684, 4956, 5383, 4533]
    var data1 = d1||chinaLine1
    var data2 = d2||chinaLine2
    var combineChart1 = echarts.init(document.getElementById('combineChart1'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}'
        },
        title: {
            text: '' + text + '每日新增病例数与舆情数量关系图',
            textStyle: {
                color: '#f7dcd1',
                fontSize: 21
            },
            left: 'center',
            top: 18,
        },
        toolbox: {
            show:false,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        legend: {
            data:['',''],
            show:false
        },
        grid:{
            top:'18%',
            right:'5%',
            bottom:'8%',
            left:'5%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: [1.17,1.18,1.19,1.20,1.21,1.22,1.23,1.24,1.25,1.26,1.27,1.28,1.29,1.30,1.31,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,2.10,2.11,2.12,2.13,2.14,2.15,2.16,2.17,2.18,2.19,2.20,2.21,2.22,2.23,2.24,2.25,2.26,2.27,2.28,2.29,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,3.10,3.11,3.12,3.13,3.14,3.15,3.16,3.17],// 对应日期
                splitLine:{
                    show:false,
                    lineStyle:{
                        color: '#3c4452'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    lineStyle:{
                        color: '#519cff'
                    },
                    alignWithLabel: true,
                    interval:4
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '每日病例数',
                nameTextStyle:{
                    color:'#fff'
                },
                interval: 1000,
                max:max1,
                min: 0,
                splitLine:{
                    show:true,
                    lineStyle:{
                        color: '#23303f'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            },
            {
                min: 0,
                max: max2,
                interval: 1000,
                type: 'value',
                name: '每日舆情数',
                nameTextStyle:{
                    color:'#fff'
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        //color: '#23303f'
                        color:'rgba(255,255,255,0.6)'
                    }
                },
                axisLine: {
                    show:false,
                    lineStyle: {
                        color: '#115372'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        color:"#fff"
                    },
                    alignWithLabel: true,
                    interval:0

                }
            }
        ],
         color:"green",
        series: [
            {
                name:'每日病例数',
                type:'bar',
                data:data1,
                boundaryGap: '45%',
                barWidth:'40%',

                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = [
                                //'#6bc0fb','#7fec9d','#fedd8b','#ffa597','#84e4dd'
                                '#ffa597'
                            ];
                            return colorList[params.dataIndex]
                        },

                    }
                }
            },

            {
                name:'每日舆情数',
                type:'line',
                yAxisIndex: 1,
                smooth: true,
                symbol:'none',
                lineStyle: {
                    normal: {
                        color:'#ff9c87'
                    }
                },
                data:data2
            }
        ]
    };
    combineChart1.setOption(option);
}
creatCombineChart('全国',16000,15000)


