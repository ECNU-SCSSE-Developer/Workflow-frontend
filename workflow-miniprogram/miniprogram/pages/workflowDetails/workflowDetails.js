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
    name: "基于微信小程序的可视化工作流",
    symbol: 'roundRect',
    description: '创新创业项目',
    itemStyle: {
      borderColor: 'rgb(255, 190, 118)',
      color: 'rgb(255, 190, 118)'
    },
    children: [{
      name: "前期准备",
      description: '立项前期准备',
      symbol: 'rect',
      itemStyle: {
        borderColor: 'rgb(120, 224, 143)',
        color: 'rgb(120, 224, 143)'
      },

      children: [{
        name: "开题报告",
        description: '准备相关资料及开题报告',
        symbol: 'rect',
        itemStyle: {
          borderColor: 'rgb(120, 224, 143)',
          color: 'rgb(120, 224, 143)'
        },
        children: [
          {
            name: "资料收集",
            description: '准备相关资料',
            itemStyle: {
              borderColor: 'rgb(120, 224, 143)',
              color: 'rgb(120, 224, 143)'
            },
          },
          {
            name: "PPT制作",
            description: '制作PPT',
            itemStyle: {
              borderColor: 'rgb(120, 224, 143)',
              color: 'rgb(120, 224, 143)'
            },
          },
          {
            name: "视频录制",
            description: '录制',
            itemStyle: {
              borderColor: 'rgb(120, 224, 143)',
              color: 'rgb(120, 224, 143)'
            },
          },
        ]
      }, {
        name: "需求分析",
        description: '查找资料，问卷调查',
        symbol: 'rect',
        itemStyle: {
          borderColor: 'rgb(120, 224, 143)',
          color: 'rgb(120, 224, 143)'
        }

      }, {
        name: "架构设计",
        description: '设计系统架构',
        symbol: 'rect',
        itemStyle: {
          borderColor: 'rgb(120, 224, 143)',
          color: 'rgb(120, 224, 143)'
        }
      }, {
        name: "程序框架搭建",
        description: '初始化Git仓库及程序框架',
        symbol: 'rect',
        itemStyle: {
          borderColor: 'rgb(120, 224, 143)',
          color: 'rgb(120, 224, 143)'
        },
        children: [
          {
            name: "前端",
            description: '搭建框架',
            itemStyle: {
              borderColor: 'rgb(120, 224, 143)',
              color: 'rgb(120, 224, 143)'
            },
          },
          {
            name: "后端",
            description: '搭建框架',
            itemStyle: {
              borderColor: 'rgb(120, 224, 143)',
              color: 'rgb(120, 224, 143)'
            },
          },
        ],
      }]
    }, {
      name: "中期实现",
      description: '中期答辩前的相关工作',
      children: [
        {
          name: "精化需求+调研",
          description: '精化需求',
          symbol: 'rect',
          itemStyle: {
            borderColor: 'rgb(120, 224, 143)',
            color: 'rgb(120, 224, 143)'
          }
        }, {
          name: "功能实现",
          description: '实现功能',
          symbol: 'rect',
          itemStyle: {
            borderColor: 'rgb(120, 224, 143)',
            color: 'rgb(120, 224, 143)'
          }

        }, {
          name: "答辩准备",
          description: '准备相关材料：报告PPT等',
          symbol: 'rect',
          itemStyle: {
            borderColor: 'rgb(120, 224, 143)',
            color: 'rgb(120, 224, 143)'
          }
        }, {
          name: "Alpha版本测试",
          description: '集成测试',
        }],
      symbol: 'roundRect',
      itemStyle: {
        borderColor: 'rgb(255, 190, 118)',
        color: 'rgb(255, 190, 118)',
      },
    }, {
      name: "后期完善",
      description: '进一步完善功能',
      children: [{
        name: "结项答辩",
        description: '准备相关材料',
      }]
    }, {
      name: "正式上线",
      description: '关于上线的相关工作',
      children: [{
        name: "系统测试"

      }]
    }]
  };

  var option = {
    

    
    tooltip: {
      trigger: "item",
      formatter: (params) => {
        return params.data.description;
      }
    },

    label: {
      
      formatter: (params) => {
        return '{a|' + params.data.name+ '}';
      },
      rich:{
        a: {
          color: '#4b6584',
          fontWeight: 'lighter',
          backgroundColor: '#f5f6fa',
          fontSize:'13',
        },
      }

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
        color: 'rgb(252, 92, 101)',
        borderColor:'rgb(252, 92, 101)'
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
      text:'可视化工作流',
      textStyle:{
        fontWeight:'lighter',
        fontSize:'18'
      },
      subtext:'展示项目的预计生命周期以及实际状态✌️',
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
    },
    motto: "Seize the day"

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