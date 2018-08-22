$(function () {
    //模拟数据请求
    function getData() {
        var data = [
            {value: 150, name: "北京"},
            {value: 3, name: "天津"},
            {value: 45, name: "上海"},
            {value: 60, name: "重庆"},
            {value: 2, name: "河北"},
            {value: 80, name: "河南"},
            {value: 10, name: "云南"},
            {value: 70, name: "辽宁"},
            {value: 70, name: "黑龙江"},
            {value: 2, name: "湖南"},
            {value: 240, name: "江苏"},
            {value: 240, name: "安徽"},
            {value: 240, name: "山东"},
            {value: 600, name: "新疆"},
            {value: 560, name: "浙江"},
            {value: 560, name: "江西"},
            {value: 230, name: "湖北"},
            {value: 100, name: "广西"},
            {value: 100, name: "甘肃"},
            {value: 500, name: "山西"},
            {value: 300, name: "内蒙古"},
            {value: 100, name: "陕西"},
            {value: 200, name: "吉林"},
            {value: 400, name: "福建"},
            {value: 300, name: "贵州"},
            {value: 50, name: "广东"},
            {value: 320, name: "青海"},
            {value: 34, name: "西藏"},
            {value: 150, name: "四川"},
            {value: 150, name: "宁夏"},
            {value: 100, name: "海南"},
            {value: 60, name: "台湾"},
            {value: 200, name: "香港"},
            {value: 38, name: "澳门"}
        ];
        data.sort(function(a, b) {
            return b.value - a.value;
        });
        var min = 0,
            max = 0;
        $(data).each(function (i,v) {
            if (v.value > max) {
                max = v.value;
            }
            if(v.value < min){
                min = v.value;
            }
        });
        myOption.visualMap.max = max;
        myOption.visualMap.min = min;
        var geoCoordMap = {};
        var mapFeatures = echarts.getMap('china').geoJson.features;
        mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;

        });
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        }; //散点需要使用此方法
        for(var k in myOption.series){
            if(myOption.series[k].type == 'effectScatter'){
                myOption.series[k].data = convertData(data);
            }else{
                myOption.series[k].data = data;
            }
        }
        myChart.setOption(myOption);
        myChart.hideLoading();
    }

    //初始化图表
    var myChart = echarts.init($('.echart-map')[0]);
    var myOption = {
        title: {//设置图表标题
            text: '地图(含散点图标)',
            left: 10,
            top: 10,
            textStyle: {
                color: '#68728c',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        backgroundColor: '#ffffff',//设置背景色
        tooltip: {
            trigger: 'item',
            padding: [8, 6, 8, 6],
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        visualMap: {
            show: false,
            min: 0,
            max: 0,
            right: 50,
            top: 0,
            text: ['高', '低'],
            seriesIndex: [0],//当series里面有多个对象时，通过此参数指定针对哪个对象，0表示第一个
            textStyle: {
                fontFamily: 'PingFangSC-Medium',
                color: 'rgba(255,255,255,0.7)',
                fontSize: 20
            },
            inRange: {
                color: ['#c5faff', '#0c7eef']
            }
        },
        geo: {
            show: true,
            map: 'china',
            itemStyle: {                    // 定义样式
                normal: {                    // 普通状态下的样式
                    areaColor: '#1f6ed1',
                    borderColor: '#00e4ef'
                }
            }
        },
        series: [{
            name: '热度',
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0, 0, 0, 0)'
                },
                emphasis: {
                    areaColor: '#c5faff'
                }
            },
            data: []
        },{
            name: '热度',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: function(val) { //控制散点的大小
                return val[2] / 30;
            },
            label: { //设置文字
                normal: {
                    show: true,
                    formatter: '{b}',
                    position: 'right',
                    textStyle: {
                        color: '#4d4d4d',
                        fontSize: 12
                    }
                }
            },
            itemStyle: { //设置散点样式
                normal: {
                    color: '#21f928',
                    shadowBlur: 10,
                    shadowColor: '#21f928'
                }
            },
            tooltip: {
                show: false
            },
            data: []
        }]
    };
    //重新调整地图上省份的名称的显示位置:ref:https://github.com/ecomfe/echarts/issues/4379
    echarts.getMap('china').geoJson.features.forEach(function (feature) {
        // Remove cp
        var sglProvinceProperties = feature.properties;
        var provinceName = sglProvinceProperties.name;
        switch (provinceName) {
            case '浙江'://def:120.153576, 30.287459
                sglProvinceProperties.cp[0] = 120.153576;
                sglProvinceProperties.cp[1] = 29.287459;
                break;
            case '青海'://def:101.778916,36.623178
                sglProvinceProperties.cp[0] = 97.617733;
                sglProvinceProperties.cp[1] = 36.623178;
                break;
            case '江苏'://def:118.767413,32.041544
                sglProvinceProperties.cp[0] = 119.767413;
                sglProvinceProperties.cp[1] = 33.041544;
                break;
            case '新疆'://def:87.617733, 43.792818
                sglProvinceProperties.cp[0] = 87.617733;
                sglProvinceProperties.cp[1] = 41.792818;
                break;
            case '海南'://def: 110.33119, 20.031971
                sglProvinceProperties.cp[0] = 109.53119;
                sglProvinceProperties.cp[1] = 19.031971;
                break;
            case '台湾'://def: 121.509062, 25.044332
                sglProvinceProperties.cp[0] = 121.009062;
                sglProvinceProperties.cp[1] = 24.044332;
                break;
            case '河北'://def: 114.502461, 38.045474
                sglProvinceProperties.cp[0] = 115.502461;
                sglProvinceProperties.cp[1] = 38.045474;
                break;
            case '黑龙江'://def:126.642464, 45.756967
                sglProvinceProperties.cp[0] = 127.642464;
                sglProvinceProperties.cp[1] = 46.756967;
                break;
            case '宁夏'://def:106.278179, 38.46637
                sglProvinceProperties.cp[0] = 106.278179;
                sglProvinceProperties.cp[1] = 37.56637;
                break;
            case '重庆'://def:106.504962, 29.533155
                sglProvinceProperties.cp[0] = 107.504962;
                sglProvinceProperties.cp[1] = 29.533155;
                break;
            case '福建'://def:119.306239, 26.075302
                sglProvinceProperties.cp[0] = 118.306239;
                sglProvinceProperties.cp[1] = 26.075302;
                break;
            case '湖南'://def:112.982279, 28.19409
                sglProvinceProperties.cp[0] = 111.982279;
                sglProvinceProperties.cp[1] = 28.19409;
                break;
        }
    });
    myChart.setOption(myOption);
    myChart.showLoading('default',{
        text: 'loading',
        color: '#347fff',
        textColor: '#68728c',
        maskColor: 'rgba(255, 255, 255, 0.6)',
        zlevel: 0
    });

    //发送数据请求,请求成功后取消加载动画，渲染图表
    setTimeout(function () {
        getData();
    },2000);

    //根据浏览器大小改变而改变图表大小
    window.onresize = myChart.resize;
});