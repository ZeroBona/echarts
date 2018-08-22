$(function () {
    //模拟数据请求
    function getData1() {
        var resultList = [
            {field: "关税", value: "5.39"},
            {field: "贸易战", value: "5.44"},
            {field: "特朗普", value: "5.34"},
            {field: "经济", value: "5.94"},
            {field: "全球", value: "5.72"},
            {field: "中美", value: "5.45"},
            {field: "国际", value: "5.85"},
            {field: "美方", value: "5.34"},
            {field: "利益", value: "5.91"},
            {field: "媒体", value: "6.02"}
        ];
        var relatedData = [];
        var linksData = [];
        var initData = {
                name: '美国',
                symbolSize: 70,
                itemStyle: {
                    color: '#226afc'
                }
            };
        relatedData.push(initData);
        $.each(resultList,function(index,item){
            var symbolSizeData = (item.value - 0)*10;
            if(item.field == '美国'){
                return true;
            }
            if((symbolSizeData + '').indexOf('.') != -1){
                symbolSizeData = symbolSizeData.toFixed(1);
            }
            relatedData.push(
                {
                    name: item.field,
                    symbolSize: symbolSizeData
                }
            );
            linksData.push(
                {
                    source: '美国',
                    target: item.field
                }
            )
        });
        myOption1.series.data = relatedData;
        myOption1.series.links = linksData;
        myChart1.hideLoading();
        myChart1.setOption(myOption1);
    }
    function getData2() {
        var relatedData = [
            {
                name: '王强',
                draggable: true,
                category: 0,
                itemStyle: {
                    normal: {
                        borderColor: '#50ff48',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#347fff',
                        color: '#001c43'
                    }
                }

            },
            {
                name: '杨思远',
                symbolSize: 70,
                category: 0,
                itemStyle: {
                    normal: {
                        borderColor: '#50ff48',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#347fff',
                        color: '#001c43'
                    }
                }

            },
            {
                name: '尤祥',
                symbolSize: 70,
                category: 0,
                itemStyle: {
                    normal: {
                        borderColor: '#50ff48',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#347fff',
                        color: '#001c43'
                    }
                }

            },
            {
                name: '郭靖',
                symbolSize: 70,
                category: 0,
                itemStyle: {
                    normal: {
                        borderColor: '#50ff48',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#347fff',
                        color: '#001c43'
                    }
                }

            },
            {
                name: '武汉',
                symbolSize: 40,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#347fff',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#347fff',
                        color: '#001c43'
                    }
                }
            },
            {
                name: '长沙',
                symbolSize: 40,
                draggable: true,
                category: 1,
                itemStyle: {
                    normal: {
                        borderColor: '#347fff',
                        borderWidth: 6,
                        shadowBlur: 20,
                        shadowColor: '#347fff',
                        color: '#001c43'
                    }
                }
            },
            {
                name: '荆州',
                symbolSize: 70,
                itemStyle: {
                    normal: {
                        borderColor: '#347fff',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#347fff',
                        color: '#001c43'
                    }
                },
                category: 1

            },
            {
                name: 'PHP',
                category: 2,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#b457ff',
                        color: '#001c43'
                    }
                }

            },
            {
                name: 'Java',
                category: 2,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#b457ff',
                        color: '#001c43'
                    }
                }

            },
            {
                name: 'JS',
                category: 2,
                itemStyle: {
                    normal: {
                        borderColor: '#b457ff',
                        borderWidth: 4,
                        shadowBlur: 10,
                        shadowColor: '#b457ff',
                        color: '#001c43'
                    }
                }

            }];
        var linksData = [
            {
                source: '王强',
                target: '武汉',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#639564' // 100% 处的颜色
                            }]
                        }
                    }
                }

            },
            {
                source: '王强',
                target: 'JS',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#639564' // 100% 处的颜色
                            }]
                        }
                    }
                }

            },
            {
                source: '杨思远',
                target: '武汉',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#eda553' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#7c785b' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '杨思远',
                target: 'Java',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#eda553' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#7c785b' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '尤祥',
                target: '荆州',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#eda553' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#7c785b' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '尤祥',
                target: 'Java',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#eda553' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#7c785b' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '郭靖',
                target: '长沙',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '郭靖',
                target: 'PHP',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '郭靖',
                target: '王强',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },
            {
                source: '杨思远',
                target: '郭靖',
                lineStyle: {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: '#e0f55a' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#639564' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }

            }
        ];
        myOption2.series.data = relatedData;
        myOption2.series.links = linksData;
        myChart2.hideLoading();
        myChart2.setOption(myOption2);
    }

    //初始化图表
    var myChart1 = echarts.init($('.echart-relation1')[0]);
    var myOption1 = {
        title: {
            text: '简单关系图',
            left: 'left',
            top: 10,
            textStyle:{
                color:"#68728c",
                fontSize: 16,
                fontWeight: 'normal'
            }
        },
        tooltip: {
            padding: 10,
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            axisPointer: {
                lineStyle:{
                    color: 'transparent'
                }
            },
            formatter: function (params) {
                if(params.dataType == 'edge'){
                    return '相关热词:' + params.data.target;
                }else if(params.dataType == 'node'){
                    return '热度值:' + params.data.symbolSize;
                }
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        series : {
            type: 'graph',
            layout: 'force',
            symbolSize: 30,
            left: 'center',
            top: 'middle',
            right: 'center',
            bottom: 'middle',
            roam: true,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#68728c'
                }
            },
            //edgeSymbol: ['circle', 'arrow'],
            //edgeSymbolSize: [0, 6],
            edgeLabel: {
                normal: {
                    show: false
                }
            },
            emphasis: {
                label: {
                    show: false
                }
            },
            data: [],
            links: [],
            animation:true,
            markArea:{
                animation:false
            },
            markPoint:{
                symbol: 'arrow'
            },
            markLine:{
                symbol: 'arrow',
                precision:5
            },
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0,
                    color: '#226afc',
                    type: 'dashed'
                }
            },
            force: {
                repulsion:[0, 500],
                edgeLength: [0, 200],
                layoutAnimation:false,
                //initLayout:'circle',
                gravity:0
            }
        },
        color: '#76a8fd'
    };
    myChart1.setOption(myOption1);
    myChart1.showLoading('default',{
        text: 'loading',
        color: '#347fff',
        textColor: '#68728c',
        maskColor: 'rgba(255, 255, 255, 0.6)',
        zlevel: 0
    });

    var myChart2 = echarts.init($('.echart-relation2')[0]);
    var myOption2 = {
        title: {
            text: '复杂关系图',
            left: 'left',
            top: 10,
            textStyle:{
                color:"#68728c",
                fontSize: 16,
                fontWeight: 'normal'
            }
        },
        backgroundColor: '#ffffff',
        tooltip: {
            padding: 10,
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            axisPointer: {
                lineStyle:{
                    color: 'transparent'
                }
            },
            formatter: '{b}',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        color:['#50ff48','#347fff','#b158ff'],
        legend: {
            show: true,
            bottom: 10,
            data: [
                {name: '人物',textStyle:{color:'#68728c'}},
                {name: '户口',textStyle:{color:'#68728c'}},
                {name: '语言',textStyle:{color:'#68728c'}}
            ]
        },
        series: {
            type: 'graph',
            layout: 'force', //引力布局
            force:{
                repulsion: 1000, //斥力因子
                edgeLength: 50 //节点间距，此距离还受repulsion的影响
            },
            symbolSize: 50,
            roam: true,
            label: {
                normal: {
                    show: true
                }
            },
            lineStyle: {
                normal: {
                    width: 5,
                    curveness: 0.8 //连线的曲度，0-1，值越大曲度越大。若设置为0，则为直线
                }
            },
            categories:[
                {name: '人物'},
                {name: '户口'},
                {name: '语言'}
            ],
            data: [],
            links: []
        }
    };
    myChart2.setOption(myOption2);
    myChart2.showLoading('default',{
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
    },2000);

    //根据浏览器大小改变而改变图表大小
    window.onresize = function (ev) {
        myChart1.resize();
        myChart2.resize();
    };
});