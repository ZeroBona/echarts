$(function () {
    //模拟数据请求
    function getData1() {
        var data = [
            {name: '中国', size: 500},
            {name: '美国', size: 400},
            {name: '英国', size: 330},
            {name: '法国', size: 320},
            {name: '德国', size: 300},
            {name: '意大利', size: 250},
            {name: '乌拉圭', size: 230},
            {name: '日本', size: 220},
            {name: '澳大利亚', size: 150},
            {name: '印度', size: 100},
            {name: '泰国', size: 90},
            {name: '新加坡', size: 80},
            {name: '韩国', size: 70},
            {name: '朝鲜', size: 50}
        ];
        var AreaSizeDataArr = [ //如果各个词之间的数据接近则使用固定的面积比例，如果相差比较大则可以直接使用数据值来设置面积
            [50,40,30,20,16,14,12,10,8,8,8,6,6,6],
            [50,40,30,20,16,14,12,10,8,8,8,6,6,6],
            [50,40,30,20,16,14,12,10,8,8,8,6,6,6]
        ];
        var index = parseInt(3*Math.random());
        var AreaSizeData = AreaSizeDataArr[index];
        $(data).each(function (i, v) {
            myOption1.series.data.push({
                name: v.name,
                value: AreaSizeData[i],
                size: v.size
            })
        });
        myChart1.hideLoading();
        myChart1.setOption(myOption1);
    }
    function getData2() {
        var data = [
            {name: '中国', value: 500},
            {name: '美国', value: 400},
            {name: '英国', value: 330},
            {name: '法国', value: 320},
            {name: '德国', value: 300},
            {name: '意大利', value: 250},
            {name: '乌拉圭', value: 230},
            {name: '日本', value: 220},
            {name: '澳大利亚', value: 150},
            {name: '印度', value: 100},
            {name: '泰国', value: 90},
            {name: '新加坡', value: 80},
            {name: '韩国', value: 70},
            {name: '朝鲜', value: 50}
        ];
        $(data).each(function (i, v) {
            myOption2.series.data.push({
                name: v.name,
                value: v.value
            })
        });
        myChart2.hideLoading();
        myChart2.setOption(myOption2);

    }
    function getData3() {
        var data = [
            {name: '中国', value: 500},
            {name: '美国', value: 400},
            {name: '英国', value: 330},
            {name: '法国', value: 320},
            {name: '德国', value: 300},
            {name: '意大利', value: 250},
            {name: '乌拉圭', value: 230},
            {name: '日本', value: 220},
            {name: '澳大利亚', value: 150},
            {name: '印度', value: 100},
            {name: '泰国', value: 90},
            {name: '新加坡', value: 80},
            {name: '韩国', value: 70},
            {name: '朝鲜', value: 50}
        ];
        $(data).each(function (i, v) {
            myOption3.series.data.push({
                name: v.name,
                value: v.value
            })
        });
        myChart3.hideLoading();
        myChart3.setOption(myOption3);
    }

    //初始化图表
    var myChart1 = echarts.init($('.echart-hotword1')[0]);
    var myOption1 = {
        tooltip: {
            show: true,
            padding: 10,
            formatter:  function (params) {
                return params.data.name + '<br/>热度：' + params.data.size;
            },
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        series: {
            type: 'treemap',
            left: 'center',
            width: '100%',
            height: '100%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b}"
                    },
                    borderWidth:1
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            label: {
                normal: {
                    fontSize: 14
                }
            },
            breadcrumb: {
                show: false //关闭面包屑路径
            },
            nodeClick: false,//关闭节点点击
            //silent: false,//关闭鼠标事件
            roam: false, //是否开启拖拽漫游（移动和缩放)
            data: []
        },
        color: ['#347fff', '#18d4cc', '#e85dc6', '#e85dc6', '#5cc7f8', '#f77865']
    };
    myChart1.setOption(myOption1);
    myChart1.showLoading('default',{
        text: 'loading',
        color: '#347fff',
        textColor: '#68728c',
        maskColor: 'rgba(255, 255, 255, 0.6)',
        zlevel: 0
    });

    var myChart2 = echarts.init($('.echart-hotword2')[0]);
    var myOption2 = {
        tooltip: {
            show: true,
            padding: 10,
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        series: {
            name: '热度值',
            type: 'wordCloud',
            size: ['9%', '100%'],
            sizeRange: [14, 80],
            textRotation: [0, 90],
            rotationStep: 180,
            rotationRange: [0, 90],
            shape: 'rectangle',
            textPadding: 0,
            width: '100%',
            height: '100%',
            left: 'center',
            top: 'center',
            gridSize: 20, //词间距
            autoSize: {
                enable: true,
                minSize: 15
            },
            textStyle: {
                normal: {
                    color: function () {
                        var colors = ['#347fff', '#18d4cc', '#e85dc6', '#e85dc6', '#5cc7f8', '#f77865'];
                        return colors[parseInt(Math.random() * 6)];
                    }
                }
            },
            data: []
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

    var myChart3 = echarts.init($('.echart-hotword3')[0]);
    var i = 0;
    var myOption3 = {
        tooltip: {
            show: true,
            padding: 10,
            textStyle: {
                fontSize: 14,
                fontFamily: 'MicrosoftYaHei',
                color: '#68728c'
            },
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            extraCssText: 'box-shadow: 0px 4px 10px 0px rgba(20, 36, 70, 0.16);border-radius: 4px!important;'
        },
        series: {
            name: '热度值',
            type: 'wordCloud',
            size: ['9%', '100%'],
            sizeRange: [14, 80],
            textRotation: [0, 90],
            rotationStep: 180,
            rotationRange: [0, 90],
            gridSize: 10,
            shape: 'rectangle',
            textPadding: 0,
            width: '96%',
            height: '96%',
            left: 'center',
            top: 'center',
            autoSize: {
                enable: true,
                minSize: 15
            },
            textStyle: {
                normal: {
                    color: function () {
                        var colors = ['rgba(59, 140, 254, 1)', 'rgba(59, 140, 254, .9)', 'rgba(59, 140, 254, .8)', 'rgba(59, 140, 254, .7)', 'rgba(59, 140, 254, .6)', 'rgba(59, 140, 254, .5)', 'rgba(59, 140, 254, .4)'];
                        i++;
                        if (i <= 6) {
                            return colors[i];
                        } else {
                            return colors[6];
                        }
                    }
                }
            },
            data: []
        }
    };
    myChart3.setOption(myOption3);
    myChart3.showLoading('default',{
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
    },2000);

    //根据浏览器大小改变而改变图表大小
    window.onresize = function (ev) {
        myChart1.resize();
        myChart2.resize();
        myChart3.resize();
    };
});