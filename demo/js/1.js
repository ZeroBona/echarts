$(function () {
    //模拟数据请求
    function getData1() {
        var data = [
            {count: 1, name: "北京"},
            {count: 3, name: "天津"},
            {count: 45, name: "上海"},
            {count: 0, name: "重庆"},
            {count: 0, name: "河北"},
            {count: 0, name: "河南"},
            {count: 0, name: "云南"},
            {count: 0, name: "辽宁"},
            {count: 0, name: "黑龙江"},
            {count: 2, name: "湖南"},
            {count: 0, name: "江苏"},
            {count: 0, name: "安徽"},
            {count: 0, name: "山东"},
            {count: 23, name: "新疆"},
            {count: 8, name: "浙江"},
            {count: 0, name: "江西"},
            {count: 0, name: "湖北"},
            {count: 0, name: "广西"},
            {count: 0, name: "甘肃"},
            {count: 0, name: "山西"},
            {count: 4, name: "内蒙古"},
            {count: 0, name: "陕西"},
            {count: 0, name: "吉林"},
            {count: 0, name: "福建"},
            {count: 0, name: "贵州"},
            {count: 0, name: "广东"},
            {count: 0, name: "青海"},
            {count: 34, name: "西藏"},
            {count: 0, name: "四川"},
            {count: 0, name: "宁夏"},
            {count: 2, name: "海南"},
            {count: 2, name: "台湾"},
            {count: 34, name: "香港"},
            {count: 38, name: "澳门"}
        ];
        $(data).each(function (i, v) {
            myOption1.xAxis.data.push(v.name);
            myOption1.series.data.push(v.count);
        });
        myChart1.hideLoading();
        myChart1.setOption(myOption1);
    }
    function getData2() {
        var data = [
            {
                name: '正面',
                count: [
                    {
                        date: '6/21',
                        value: 1
                    },{
                        date: '6/22',
                        value: 2
                    },{
                        date: '6/23',
                        value: 3
                    },{
                        date: '6/24',
                        value: 5
                    },{
                        date: '6/25',
                        value: 2
                    }
                ]
            },
            {
                name: '负面',
                count: [
                    {
                        date: '6/21',
                        value: 5
                    },{
                        date: '6/22',
                        value: 23
                    },{
                        date: '6/23',
                        value: 33
                    },{
                        date: '6/24',
                        value: 23
                    },{
                        date: '6/25',
                        value: 22
                    }
                ]
            },
            {
                name: '中性',
                count: [
                    {
                        date: '6/21',
                        value: 32
                    },{
                        date: '6/22',
                        value: 54
                    },{
                        date: '6/23',
                        value: 6
                    },{
                        date: '6/24',
                        value: 123
                    },{
                        date: '6/25',
                        value: 42
                    }
                ]
            }
        ];
        $(data[0].count).each(function (i,v) {
            myOption2.xAxis.data.push(v.date);
        });//设置x轴
        $(data).each(function (i, v) {
            var singleData = [];
            $(data[i].count).each(function (i, v) {
                singleData.push(v.value);
            });
            myOption2.series.push({
                name: v.name,
                type: 'line',
                smooth: 0.3,//设置折线的平滑度0-1
                data: singleData
            });
        });//设置y轴每一类的数据
        myChart2.hideLoading();
        myChart2.setOption(myOption2);
    }
    function getData3() {
        var data = [
            {
                name: '正面',
                value: 20
            },{
                name: '负面',
                value: 20
            },{
                name: '中性',
                value: 20
            }
        ];
        myOption3.series.data = data;
        myChart3.hideLoading();
        myChart3.setOption(myOption3);
    }
    function getData4() {
        var data = [
            {
                name: '微信',
                value: [1,2,12,3,23]
            },{
                name: '微博',
                value: [23,3,13,23,2]
            },{
                name: 'web',
                value: [12,12,1,3,22]
            }
        ];
        myOption4.radar.indicator = [
            {
                name: '活跃人数',
                max: 23
            },{
                name: '注册人数',
                max: 12
            },{
                name: '明星人数',
                max: 13
            },{
                name: '体育人数',
                max: 23
            },{
                name: '文章数量',
                max: 23
            }
        ];
        myOption4.series.data = data;
        myChart4.hideLoading();
        myChart4.setOption(myOption4);
    }

    //初始化图表1——柱状图
    var myChart1 = echarts.init($('.echart1')[0]);
    var myOption1 = {
        title: {//设置图表标题
            text: '柱状图',
            left: 10,
            top: 10,
            textStyle: {
                color: '#68728c',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        backgroundColor: '#ffffff',//设置背景色
        tooltip: {//设置鼠标悬浮时的提示框
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    color: 'rgba(124,175,234,.1)'
                }
            },
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        grid: {//设置图表主体的大小，距离边框的距离
            left: '4%',
            right: '4%',
            top: '16%',
            bottom: '6%',
            containLabel: true//设置计算图表主体大小是否包含坐标轴，一般设置为true
        },
        xAxis:{
            type: 'category',
            data: [],//设置x轴
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#8f98ad'
                },
                formatter: function(value){
                    return value.split("").join("\n");
                }//将x轴的文字处理为竖直
            },
            axisLine: {//设置x轴
                lineStyle: {
                    color: '#dce2ea'
                }
            },
            splitLine: {//设置竖直方向的分割线
                show: false,
                lineStyle: {
                    color: '#dce2ea',
                    type: 'dashed'
                }
            },
            axisTick: {//设置刻度是否显示
                show: true,
                alignWithLabel: true
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#8f98ad'
                }
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#dce2ea',
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            }
        },
        series: {
            name: '新闻量',
            type: 'bar',
            barWidth: '50%',
            itemStyle: {
                normal: {
                    barBorderRadius: [1000, 1000, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#5cc7f8'},
                            {offset: 1, color: '#347fff'}
                        ]
                    )//设置柱状图为渐变色
                }
            },
            data: []
        }
    };
    myChart1.setOption(myOption1);
    myChart1.showLoading('default',{
        text: 'loading',
        color: '#347fff',
        textColor: '#68728c',
        maskColor: 'rgba(255, 255, 255, 0.6)',
        zlevel: 0
    });//加载动画

    //初始化图表2——折线图
    var myChart2 = echarts.init($('.echart2')[0]);
    var myOption2 = {
        title: {//设置图表标题
            text: '折线图',
            left: 10,
            top: 10,
            textStyle: {
                color: '#68728c',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        backgroundColor: '#ffffff',//设置背景色
        tooltip: {//设置鼠标悬浮时的提示框
            trigger: 'axis',
            padding: 10,
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            axisPointer: {
                lineStyle:{
                    color: '#dce2ea'
                }
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        legend: {//设置坐标轴最下面的数据分类
            bottom: 10,
            textStyle: {
                color: '#68728c'
            }
        },
        grid: {//设置图表主体的大小，距离边框的距离,不设置top默认是在标题下面
            left: '6%',
            right: '6%',
            bottom: 40,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#8f98ad'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#dce2ea'
                }
            },
            splitLine: {
                show: false
            },
            data: []
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#8f98ad'
                }
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#dce2ea',
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [],
        color: ['#347fff','#ef6678','#fad765']
    };
    myChart2.setOption(myOption2);
    myChart2.showLoading('default',{
        text: 'loading',
        color: '#347fff',
        textColor: '#68728c',
        maskColor: 'rgba(255, 255, 255, 0.6)',
        zlevel: 0
    });

    //初始化图表3——饼状图
    var myChart3 = echarts.init($('.echart3')[0]);
    var myOption3 = {
        title: {//设置图表标题
            text: '饼状图',
            left: 10,
            top: 10,
            textStyle: {
                color: '#68728c',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        backgroundColor: '#ffffff',//设置背景色
        tooltip: {//设置鼠标悬浮时的提示框
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        legend: {
            itemWidth: 10,
            itemHeight: 10,
            bottom: 10
        },
        series: {
            name: '',
            type: 'pie',
            hoverAnimation: true,//设置鼠标放在饼状图上的动画是否开启
            radius: ['40%', '60%'],//饼状图的位置默认在中心，根据内圈半径和外圈半径来确定图表主体大小
            label: {//每块饼的数据指示文字
                normal: {
                    position: 'outer',
                    textStyle: {
                        fontSize: '14',
                        color: '#8f98ad'
                    },
                    formatter: function (param) {
                        return param.name + Math.round(param.percent) + '%';
                    }
                }
            },
            labelLine: {//每块饼的数据指示线
                normal: {
                    show: true
                }
            },
            data: []
        },
        color: ['#347fff', '#ef6678', '#fad765']
    };
    myChart3.setOption(myOption3);
    myChart3.showLoading('default',{
        text: 'loading',
        color: '#347fff',
        textColor: '#68728c',
        maskColor: 'rgba(255, 255, 255, 0.6)',
        zlevel: 0
    });
    
    //初始化图表4——雷达图
    var myChart4 = echarts.init($('.echart4')[0]);
    var myOption4 = {
        title: {//设置图表标题
            text: '雷达图',
            left: 10,
            top: 10,
            textStyle: {
                color: '#68728c',
                fontSize: 14,
                fontWeight: 'bold'
            }
        },
        backgroundColor: '#ffffff',//设置背景色
        tooltip: {//设置鼠标悬浮时的提示框
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        legend: {
            bottom: 10,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: '#68728c'
            }
        },
        radar: {
            name: {
                textStyle: {
                    color: '#8f98ad',
                    fontSize: 14
                }
            },
            nameGap: 10,//各个角的文字距离雷达图的距离
            splitArea: {
                show: false//设置雷达图内圈与外圈是否有颜色间隔
            },
            radius: '70%',//设置雷达图的大小
            center: ['center', 'center'],//设置雷达图的位置，以图表中心为坐标轴
            indicator: []
        },
        series: {
            type: 'radar',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            areaStyle: {
                normal: {
                    shadowBlur: 13,
                    shadowColor: 'rgba(0,0,0,.2)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 10,
                    opacity: 0.3
                }
            },
            data: []
        },
        color: ['#347fff', '#ef6678', '#fad765']
    };
    myChart4.setOption(myOption4);
    myChart4.showLoading('default',{
        text: 'loading',
        color: '#347fff',
        textColor: '#68728c',
        maskColor: 'rgba(255, 255, 255, 0.6)',
        zlevel: 0
    });

    //发送数据请求,请求成功后取消加载动画，渲染图表
    setTimeout(function () {
        getData1();
        getData2();
        getData3();
        getData4();
    },2000);

    //根据浏览器大小改变而改变图表大小
    window.onresize = function (ev) {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
    };

});