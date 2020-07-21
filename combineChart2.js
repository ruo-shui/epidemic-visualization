/* 湖北疫情舆情数量分布*/
var combineChart2 = echarts.init(document.getElementById('combineChart2'));
option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{b}</br>{a}: {c}</br>{a1}: {c1}'
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
                interval:3
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
            interval: 20,
            max:300,
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
            max: 500,
            interval: 50,
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
            data:[0, 0, 0, 270, 105, 69, 105, 180, 323, 371, 1291, 840, 1032, 1220, 1347, 1921, 2103, 2345, 3156, 2987, 2447, 2841, 2147, 2531, 2097,1638,14840,3780, 2420, 1843, 1933, 1807, 1693, 349, 631,792, 630, 203, 499, 401, 409, 318,423, 570, 196, 114,115, 134, 126, 74, 41, 36, 17, 13, 8, 5, 4, 4, 4, 1, 0],
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
            //data:[26, 42, 127, 344, 1278, 1484, 1568, 1153, 1185, 1862, 1773, 2022, 1717, 1689, 1809, 1670, 1928, 2111, 2114, 2134, 2084, 2119, 1240, 1519, 2201, 1938, 2048, 2758, 2438, 1681, 1465, 2030, 2056, 2553, 2117, 2033, 1377, 1821, 2095, 2403, 1845, 1489, 1349, 774, 1472, 2380, 1984, 1838, 1971, 2033, 1565, 1504, 1729, 1645, 1873, 876, 922, 1007, 986, 1229, 663],// 舆情数据
            data:[26, 42, 127, 344, 1278, 1484, 1568, 1153, 1185, 1862, 1773, 2022, 1717, 1689, 1809, 1670, 1928, 2111, 2114, 2134, 2084, 2119, 1940, 1819, 2201, 1938, 2648, 2758, 2438, 1681, 1465, 2030, 2056, 2553, 2117, 2033, 1377, 1821, 2095, 2403, 1845, 1489, 1349, 1674, 1472, 1980, 1984, 1838, 1971, 2033, 1565, 1504, 1729, 1645, 1773, 876, 922, 1007, 986, 1029, 663],// 舆情数据
        }
    ]
};
combineChart2.setOption(option);
