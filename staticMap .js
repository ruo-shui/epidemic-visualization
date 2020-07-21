var provinces = ['湖北', '广东', '浙江', '湖南', '河南', '安徽', '重庆', '山东', '江西', '四川', '江苏', '北京', '福建', '上海', '广西', '河北', '陕西', '云南',
    '海南', '黑龙江', '辽宁', '山西', '天津', '甘肃', '内蒙古', '新疆', '宁夏', '吉林', '贵州', '青海', '西藏', '澳门', '香港', '台湾']

var total = [99147, 62517, 48667, 17873, 26231, 7618, 7571, 33883, 49823, 22437, 17028, 8190, 21056, 12483, 6963, 22229, 7608, 6955, 3533, 8032
    , 8947, 7800, 5075, 10534, 3986, 3986, 2014, 6659, 7469, 2744, 2844, 140, 1677, 829]
var pieces1 = [{value:0,color:'#ffffff'},{min:1,max:10000,color:'#F2DDD2'},{min:10001,max:20000,color:'#E9B090'},
    {min:20001,max:30000,color:'#E08150'},{min:30001,max:40000,color:'#BD430A'},{min:40001,max:5000,color:'#BB0000'},
    {min:40001,color:'#73240D'}]

var zhengMian = [13586, 7146, 5554, 2562, 3845, 993, 971, 4819, 5642, 3048, 2539, 727, 2624, 1374, 854, 2981, 1047, 927, 484, 904, 1253, 1065, 637
    , 1475, 593, 665, 278, 824, 1217, 327, 302, 17, 70, 58]
var pieces2 = [{value:0,color:'#ffffff'},{min:1,max:500,color:'#F2DDD2'},{min:501,max:1000,color:'#E9B090'},
    {min:1001,max:3000,color:'#E08150'},{min:3001,max:6000,color:'#BD430A'},{min:6001,max:10000,color:'#BB0000'},
    {min:10001,color:'#73240D'}]

var zhongLi = [72606, 46431, 36547, 13654, 19362, 6018, 5529, 25731, 36242, 17145, 12736, 6272, 15534, 9452, 5164, 16566, 5800, 5349, 2712, 6283, 6841,
    5944, 3976, 8208, 3066, 2822, 1491, 5250, 5775, 2059, 2160, 112, 1182, 351]
var pieces3 = [{value:0,color:'#ffffff'},{min:1,max:1000,color:'#EAF5F5'},{min:1001,max:5000,color:'#D5EBE5'},
    {min:5001,max:10000,color:'#BDE1DA'},{min:10001,max:20000,color:'#A4D6CB'},{min:20001,max:50000,color:'#78C6B6'},
    {min:50001,color:'#68C1AC'}]

var fumian = [12955, 8940, 6566, 1657, 3024, 607, 1071, 3333, 7939, 2244, 1753, 1191, 2898, 1657, 945, 2682, 761, 679, 337, 845, 853, 791, 462, 851, 327,
    499, 245, 585, 477, 358, 382, 11, 425, 420]
var pieces4 = [{value:0,color:'#ffffff'},{min:1,max:500,color:'#E1F0FA'},{min:501,max:1000,color:'#BAD2EC'},
    {min:1001,max:3000,color:'#8BB6E0'},{min:3001,max:6000,color:'#5E98D1'},{min:6001,max:10000,color:'#3D7CBE'},
    {min:10001,color:'#135A9C'}]



function creatEmotionMap(data,pieces) {
    var dataList = []
    for (let i = 0; i < provinces.length; i++) {
        var obj = {}
        obj.name = provinces[i]
        obj.value = data[i]
        dataList.push(obj)
    }
    var option = {
        title: {
            text: '疫情期间舆情情感地图',
            textStyle: {
                color:  '#00ffff',
                fontSize: 25,
                fontWeight:400
            },
            left: 'left',
            top: 2,
        },
        tooltip: {
            show: true,
            formatter: function (params) {
                return params.name + '：' + params.data['value']
            },
        },
        visualMap: {
            type: 'piecewise',
            pieces:pieces,
            orient: 'vertical',
            itemWidth: 25,
            itemHeight: 15,
            showLabel: true,
            seriesIndex: [0],
            textStyle: {
                color: '#7B93A7'
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
        series: [{
            name: 'mapSer',
            type: 'map',
            map: 'china',
            roam: false,
            geoIndex: 0,
            label: {
                show: false,
            },
            data:dataList
        }]
    }
    var myChart = echarts.init(document.getElementById('staticMap'))
    myChart.setOption(option)
}
creatEmotionMap(zhengMian,pieces2)
$('#正面').on('click',function () {
    creatEmotionMap(zhengMian,pieces2)
})
$('#中立').on('click',function () {
    creatEmotionMap(zhongLi,pieces3)
})
$('#负面').on('click',function () {
    creatEmotionMap(fumian,pieces4)
})

