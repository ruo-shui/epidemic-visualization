//地图数据
//全国地图数据
var provinces = ['湖北', '广东', '浙江', '湖南', '河南', '安徽', '重庆', '山东', '江西', '四川', '江苏', '北京', '福建',
    '上海', '广西', '河北', '陕西', '云南', '海南', '黑龙江', '辽宁', '山西', '天津', '甘肃', '内蒙古', '新疆', '宁夏',
    '吉林', '贵州', '青海', '西藏', '澳门', '香港', '台湾']
var total = [99147, 62517, 48667, 17873, 26231, 7618, 7571, 33883, 49823, 22437, 17028, 8190, 21056, 12483, 6963, 22229,
    7608, 6955, 3533, 8032, 8947, 7800, 5075, 10534, 3986, 3986, 2014, 6659, 7469, 2744, 2844, 140, 1677, 829]
var piecesTotal = [{value: 0, color: '#ffffff'}, {min: 1, max: 10000, color: '#F2DDD2'}, {
    min: 10001,
    max: 20000,
    color: '#E9B090'
},
    {min: 20001, max: 30000, color: '#E08150'}, {min: 30001, max: 40000, color: '#BD430A'}, {
        min: 40001,
        max: 50000,
        color: '#BB0000'
    },
    {min: 50001, color: '#73240D'}]
//湖北市数据
var hubei = ['武汉市', '仙桃市', '鄂州市', '黄冈市', '黄石市', '荆门市', '荆州市', '潜江市', '神农架林区', '十堰市', '随州市', '天门市',
    '咸宁市', '襄樊市', '孝感市', '宜昌市', '恩施土家族苗族自治州']
var huibeiData = [52001, 530, 645, 3558, 2392, 513, 2417, 592, 313, 963, 753, 435, 953, 488, 1141, 710, 206]
var hubeipieces = [{value: 0, color: '#ffffff'}, {min: 1, max: 1000, color: '#F2DDD2'}, {
    min: 1001,
    max: 2000,
    color: '#E9B090'
},
    {min: 2001, max: 3000, color: '#E08150'}, {min: 3001, max: 4000, color: '#BD430A'}, {
        min: 4001,
        max: 5000,
        color: '#BB0000'
    },
    {min: 5001, color: '#73240D'}]
//武汉数据
var wuhan = ['江岸区', '武昌区', '江汉区', '硚口区', '汉阳区', '青山区', '洪山区', '东西湖区', '汉南区', '蔡甸区', '江夏区', '黄陂区', '新洲区', '经济开发区']
var wuhanData = [3078, 1705, 875, 330, 779, 1582, 1679, 291, 54, 521, 857, 614, 177, 0]
var wuhanpieces = [{value: 0, color: '#ffffff'}, {min: 1, max: 300, color: '#F2DDD2'}, {
    min: 301,
    max: 600,
    color: '#E9B090'
},
    {min: 601, max: 1000, color: '#E08150'}, {min: 1001, max: 1500, color: '#BD430A'}, {
        min: 1501,
        max: 2000,
        color: '#BB0000'
    },
    {min: 2001, color: '#73240D'}]

//折线图数据
//湖北
var hubeiLine1 = [0, 0, 0, 270, 105, 69, 105, 180, 323, 371, 1291, 840, 1032, 1220, 1347, 1921, 2103, 2345, 3156, 2987,
    2447, 2841, 2147, 2531, 2097, 1638, 14840, 3780, 2420, 1843, 1933, 1807, 1693, 349, 631, 792, 630, 203, 499, 401, 409,
    318, 423, 570, 196, 114, 115, 134, 126, 74, 41, 36, 17, 13, 8, 5, 4, 4, 4, 1, 0]
var hubeiLine2 = [26, 42, 127, 344, 1278, 1484, 1568, 1153, 1185, 1862, 1773, 2022, 1717, 1689, 1809, 1670, 1928, 2111, 2114,
    2134, 2084, 2119, 1940, 1819, 2201, 1938, 2648, 2758, 2438, 1681, 1465, 2030, 2056, 1924, 2117, 2033, 1377, 1821, 2095, 2403,
    1845, 1489, 1349, 1674, 1472, 1980, 1984, 1838, 1971, 2033, 1565, 1504, 1729, 1645, 1773, 876, 922, 1007, 986, 1029, 663]
//武汉
var wuhanLine1 = [0, 0, 0, 60, 105, 62, 70, 77, 46, 80, 892, 315, 356, 378, 576, 894, 1033, 1242, 1967, 1766, 1501, 1985,
    1379, 1921, 1552, 1104, 13436, 3910, 1923, 1548, 1690, 1600, 1660, 615, 319, 314, 541, 348, 464, 370, 383, 313, 420,
    565, 111, 114, 131, 126, 74, 74, 41, 36, 17, 13, 8, 5, 4, 4, 4, 1, 1]
var wuhanLine2 = [17, 32, 95, 303, 1131, 1100, 1133, 839, 815, 1354, 1269, 1284, 1197, 1027, 977, 982, 1242, 1223, 1185,
    1174, 1176, 1097, 682, 794, 1053, 841, 1890, 1168, 1143, 823, 633, 999, 964, 1149, 902, 928, 679, 732, 808, 987, 666,
    609, 632, 726, 737, 921, 895, 785, 823, 1025, 697, 637, 768, 710, 1035, 631, 525, 509, 535, 768, 680,]

//词频图数据
//湖北
var hubeiBar1 = ['疫情', '武汉', '战疫', '抗疫', '疫情防控', '中国', '一线', '医院', '医疗', '防控', '我们', '新型冠状病毒',
    '驰援', '肺炎', '支援',
]
var hubeiBar2 = [22142, 17674, 6596, 6149, 5688, 5417, 4678, 3808, 3252, 3190, 3176, 2753, 2721, 2518, 2436]
//武汉
var wuhanBar1 = ['疫情', '新型冠状病毒', '肺炎', '新型肺炎', '感染', '国家', '卫健委', '防控', '口罩', '最新', '确诊',
    '武汉肺炎', '疫情防控', '钟南山', '病毒',]
var wuhanBar2 = [11652, 2299, 1819, 1552, 1376, 1320, 1285, 1235, 1139, 892, 878, 696, 642, 408, 295]


var myChart = echarts.init(document.getElementById('multiscaleMap'))

function creatMap(map, dataList, pieces, text) {
    var option = {
        title: {
            text: '' + text + '舆情数量分布图',
            textStyle: {
                color: '#f7dcd1',
                fontSize: 21
            },
            left: 'center',
            top: 18,
        },
        tooltip: {
            show: true,
            formatter: function (params) {
                return params.name + '：' + params.data['value']
            },
        },
        visualMap: {
            type: 'piecewise',
            pieces: pieces,
            orient: 'vertical',
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            seriesIndex: [0],
            textStyle: {
                color: '#7B93A7'
            },
            bottom: 0,
            left: 0,
        },
        geo: {
            map: map,
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
        series: [{
            name: 'mapSer',
            type: 'map',
            map: map,
            roam: false,
            geoIndex: 0,
            label: {
                show: false,
            },
            data: dataList
        }],
    }
    myChart.setOption(option)
}

//初始全国地图
var dataList = []
for (let i = 0; i < provinces.length; i++) {
    var obj = {}
    obj.name = provinces[i]
    obj.value = total[i]
    dataList.push(obj)
}
creatMap('china', dataList, piecesTotal, '全国')

//监听事件变化
myChart.on('click', function (event) {
    console.log(event)
    if (event.name === '湖北') {
        dataList = []
        for (let i = 0; i < hubei.length; i++) {
            var obj = {}
            obj.name = hubei[i]
            obj.value = huibeiData[i]
            dataList.push(obj)
        }
        creatMap('湖北', dataList, hubeipieces, '湖北省')
        creatCombineChart('湖北省', 15000, 3000, hubeiLine1, hubeiLine2)
        creatCiPin('湖北省', hubeiBar1, hubeiBar2)
        $('#name-title').html('<b>湖北省舆情词云</b>')
        $('#img').attr('src', './湖北.png')
    }
    if (event.name === '武汉市') {
        $.getJSON('./data/420100.json', function (data) {
            echarts.registerMap('武汉市', data)
            dataList = []
            for (let i = 0; i < wuhan.length; i++) {
                var obj = {}
                obj.name = wuhan[i]
                obj.value = wuhanData[i]
                dataList.push(obj)
            }
            creatMap('武汉市', dataList, wuhanpieces, '武汉市')
            creatCombineChart('武汉市', 15000, 3000, wuhanLine1, wuhanLine2)
            creatCiPin('武汉市', wuhanBar1, wuhanBar2)
            $('#name-title').html('<b>武汉市舆情词云</b>')
            $('#img').attr('src', './武汉.png')
        })
    }
})


