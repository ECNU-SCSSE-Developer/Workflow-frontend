// pages/workflowDetails/workflowDetails.js
import * as echarts from '../../ec-canvas/echarts';

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);
  var data1 = {
    "name": "root",

    "symbol": 'roundRect',
    "itemStyle": {
      borderColor: 'rgb(255, 190, 118)',
      color: '#fff'
    },


    "children": [{
      "name": "a",
      
      "symbol": 'roundRect',
      "itemStyle": {
        borderColor: 'rgb(255, 190, 118)',
        color: '#fff'
      },


      "children": [{
        "name": "a1",
        "symbol":'rect',
        "itemStyle":{
          borderColor:'rgb(106, 176, 76)',
          color:'#fff'
        }
      }, {
          "name": "a2",
          "symbol": 'rect',
          "itemStyle": {
            borderColor: 'rgb(106, 176, 76)',
            color: '#fff'
          }
        
      }, {
          "name": "a3",
          "symbol": 'rect',
          "itemStyle": {
            borderColor: 'rgb(106, 176, 76)',
            color: '#fff'
          }
      }, {
        "name": "a4"
      }]
    }, {
      "name": "b",
      "children": [{
        "name": "b1"
      }, {
        "name": "b2"
      }, {
        "name": "b3"
      }, {
        "name": "b4"
      }]
    }, {
      "name": "c",
      "children": [{
        "name": "c1"
      }]
    }, {
      "name": "d",
      "children": [{
        "name": "d1"
      }]
    }]
  };

  var option = {
    legend:{
      data: [{
        name: '系列1',
        // 强制设置图形为圆。
        icon: 'circle',
        // 设置文本为红色
        textStyle: {
          color: 'red'
        }
      }]
    },

    series: [{
      type: 'tree',

      initialTreeDepth: -1,

      name: 'tree1',
      roam: true,

      data: [data1],

      top: '5%',
      left: '20%',
      bottom: '2%',
      right: '15%',

      symbolSize: 15,
      symbol: 'circle',

      
      itemStyle:{
        color: '#fff',
        borderColor:'rgb(255, 121, 121)'
      },

      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          color: 'black'
        }
      },

    }],
    title:{
      text:'很长很长的测试标题',
      textStyle:{
        fontWeight:'lighter',
        fontSize:'18'
      },
      subtext:'测试子标题✌️',
      left:'3%'
    },
    
  };

  chart.setOption(option);
  return chart;
}


Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["状态展示", "信息汇总", "团队成员"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    ec: {
      onInit: initChart
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})