function creatCiPin(text,d1,d2){
    var chinaBar1 = ['疫情', '疫情防控', '武汉', '战疫', '抗疫', '中国', '一线', '防控', '湖北', '工作', '防疫', '复工', '企业',
        '口罩', '新型冠状病毒']
    var chinaBra2 = [117780,47050,38174,35870,29042,23686,23454,23110,22370,20194,20120,16284,15358,15348,15258]
    var data1 = d1||chinaBar1
    var data2 = d2||chinaBra2
    var option = {
        title: {
            text: '' + text + '舆情高频词分析图',
            textStyle: {
                color: '#f7dcd1',
                fontSize: 21
            },
            left: 'center',
            top: 18,
        },
        backgroundColor: 'rgb(0,0,0,0)',
        //color: ["#FD666D"],
        color:"rgb(253,102,109,0.7)",
        textStyle: {
            color: '#fff'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: "{a} <br/>{b} : {c}"
        },

        grid: {

            containLabel: true
        },
        xAxis: {

            type: 'value',
            boundaryGap: [0, 0.01],
            "axisLabel": {
                "interval": 0,
                fontSize: 18,
                formatter: '{value}条',
            }
        },
        yAxis: {
            "axisLabel": {
                "interval": 0,
                fontSize: 18,
            },
            type: 'category',
            data: data1.reverse()
        },
        series: [{
            name: '数量',
            type: 'bar',
            barCategoryGap: '30%',
            data: data2.reverse(),

        }]
    };

    var myChart = echarts.init(document.getElementById('quanguocipin'))
    myChart.setOption(option)
}
creatCiPin('全国')

