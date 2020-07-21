function creatMap(data) {
    var days = ['01-17','01-18','01-19','01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29', '01-30','01-31',
        '02-01','02-02','02-03','02-04', '02-05', '02-06', '02-07', '02-08', '02-09','02-10','02-11','02-12', '02-13', '02-14', '02-15', '02-16',
        '02-17','02-18','02-19','02-20', '02-21', '02-22', '02-23', '02-24', '02-25','02-26','02-27','02-28', '02-29',
        '03-01','03-02','03-03','03-04', '03-05', '03-06', '03-07', '03-08', '03-09','03-10','03-11','03-12', '03-13', '03-14', '03-15', '03-16','03-17']

    var option = {
        baseOption: {
            title:{
                text:  '全国舆情数量动态变化图',
                textStyle: {
                    color: '#dfcbc0',
                    fontSize: 28
                },
                left: 'center',
                top: 35,
            },
            timeline: {
                axisType: 'category',
                //autoPlay: true,
                playInterval: 1000,
                symbolSize: 12,
                label:{
                    textStyle: {
                        color:"#fff",
                        fontSize:13
                    }
                },
                left: '5%',
                right: '5%',
                bottom: '0%',
                width: '90%',
                data: days,
                tooltip: {
                    formatter: days
                },
            },
            tooltip: {
                show: true,
                formatter: function (params) {
                    return params.name + '：' + params.data['value']
                },
            },
            visualMap: {
                type: 'piecewise',
                pieces: [{
                    min: 1001,
                    color: '#73240D'
                }, {
                    min: 501,
                    max: 1000,
                    color: '#BB0000'
                }, {
                    min: 251,
                    max: 500,
                    color: '#BD430A'
                }, {
                    min: 101,
                    max: 250,
                    color: '#E08150'
                }, {
                    min: 11,
                    max: 100,
                    color: '#E9B090'
                }, {
                    min: 1,
                    max: 10,
                    color: '#F2DDD2'
                }, {
                    value: 0,
                    color: 'white'
                }],
                orient: 'vertical',
                itemWidth: 25,
                itemHeight: 15,
                showLabel: true,
                seriesIndex: [0],
                textStyle: {
                    color:"#fff",
                    fontSize: 16
                },
                bottom: '10%',
                left: "5%",
            },
            geo: {
                map: 'china',
                left: 'center',
                label: {
                    emphasis: {
                        show: false,
                    }
                },
                itemStyle: {
                    emphasis: {
                        areaColor: '#ffde33'
                    }
                }
            },
            series: [
                {
                    name: 'mapSer',
                    type: 'map',
                    map: 'china',
                    roam: false,
                    geoIndex: 0,
                    label: {
                        show: false,
                    },
                },
            ],

        },
        animationDurationUpdate: 3000,
        animationEasingUpdate: 'quinticInOut',
        options: []
    }
    for (var n = 0; n < data.length; n++) {
        option.options.push({
            series:[{
                type:'map',
                data:data[n]
            }]
        })
    }
    var myChart = echarts.init(document.getElementById('mapAjax'))
    myChart.setOption(option)
}
const provinces = ['湖北', '广东', '浙江', '湖南', '河南', '安徽', '重庆', '山东', '江西', '四川', '江苏', '北京', '福建', '上海', '广西', '河北', '陕西', '云南', '海南', '黑龙江', '辽宁', '山西', '天津', '甘肃', '内蒙古', '新疆', '宁夏', '吉林', '贵州', '青海', '西藏', '澳门', '香港', '台湾']

let pList = []
for (let province of provinces) {
    let p = new Promise(function (res, rej) {
        $.getJSON('./data/' + province + '.json', function (data) {
            data.records.unshift(province)
            res(data.records)
        })
    })
    pList.push(p)
}
Promise.all(pList).then(function (result) {
    let list1 = []
    for (let i = 1; i < result[0].length; i++) {
        let list2 = []
        for (let j = 0; j < result.length; j++) {
            let obj = {}
            obj.name = result[j][0]
            obj.value = result[j][i].news
            list2.push(obj)
        }
        list1.push(list2)
    }
    creatMap(list1)

})
