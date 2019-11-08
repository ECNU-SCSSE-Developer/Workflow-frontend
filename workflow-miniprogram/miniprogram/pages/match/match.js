var sliderWidth = 120; // 需要设置slider的宽度，用于计算中间位置
var util = require('../../utils/util.js')
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m1.jpg',
      'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m2.jpg',
      'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m3.jpg'
    ],
    tabs: ["近 期 比 赛", "已 截 止", "比 赛 年 鉴"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hasMatch: 1, //是否有近期比赛
    hasCutoffMatch: 1, //是否有已截至的比赛
    cal_style: [],
    year: new Date().getFullYear(), // 年份
    month: new Date().getMonth() + 1, // 月份
    day: new Date().getDate(),
    str: MONTHS[new Date().getMonth()], // 月份字符串
    matchs: [{
      id: 1,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m1.jpg",
      title: "第16届“大夏杯”大学生创业大赛",
      level: "校级",
      time: "2019年4月28日",
    }],

    cutoffMatchs: [{
        id: 1,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m5.png",
        title: "创青春国赛",
        level: "国家级",
        time: "2019年4月28日",
      }
    ],
    matchList: [{
      id: 1,
      name: "双创比赛",
      time: "12月"
    }, {
      id: 2,
      name: "大夏杯",
      time: "5月2日"
    }, {
      id: 3,
      name: "创青春",
      time: "9月"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const days_count = new Date(this.data.year, this.data.month, 0).getDate();
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    let cal_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      const date = new Date(this.data.year, this.data.month - 1, i);
      if (date.getDay() == 0) {
        cal_style.push({
          month: 'current',
          day: i,
          color: '#f488cd'
        });
      } else {
        cal_style.push({
          month: 'current',
          day: i,
          color: '#a18ada'
        });
      }
    }
    cal_style.push({
      month: 'current',
      day: 12,
      color: 'white',
      background: '#b49eeb'
    });
    cal_style.push({
      month: 'current',
      day: 17,
      color: 'white',
      background: '#f5a8f0'
    });
    cal_style.push({
      month: 'current',
      day: 20,
      color: 'white',
      background: '#aad4f5'
    });
    cal_style.push({
      month: 'current',
      day: 25,
      color: 'white',
      background: '#84e7d0'
    });

    this.setData({
      cal_style: cal_style
    });

    wx.request({
      url: 'http://localhost:8081/activity/all?type=fresh',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        // console.log(res.data.data);
        // 时间格式化
        for (let i = 0; i < res.data.data.length; i++) {
          res.data.data[i].activitySignUpDeadline = util.formatTime(new Date(res.data.data[i].activitySignUpDeadline))
          res.data.data[i].activityTime = util.formatTime(new Date(res.data.data[i].activityTime))
          // todo
          // mock image
          res.data.data[i].activityUrl = 'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m' + res.data.data[i].activityId % 7 + '.jpg'
        }

        that.setData({
          matchs: res.data.data
        })
        if(that.data.matchs.length == 0){
          that.setData({
            hasMatch: 0
          })
        }
        else{
          that.setData({
            hasMatch: 1
          })
        }
      },
      fail: function(res){
        console.log("fail!");
      }
    });

    wx.request({
      url: 'http://localhost:8081/activity/all?type=finish',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        // 'content-type': 'application/x-www-form-urlencoded',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        // console.log(res.data.data);
        // 时间格式化
        for (let i = 0; i < res.data.data.length; i++){
          res.data.data[i].activitySignUpDeadline = util.formatTime(new Date(res.data.data[i].activitySignUpDeadline))
          res.data.data[i].activityTime = util.formatTime(new Date(res.data.data[i].activityTime))

          // todo
          // mock image
          res.data.data[i].activityUrl = 'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m' + (res.data.data[i].activityId % 5 + 1) + '.jpg'
        }
        that.setData({
          cutoffMatchs: res.data.data
        })
        if(that.data.cutoffMatchs.length==0){
          that.setData({
            hasCutoffMatch: 0
          })
        }
        else{
          that.setData({
            hasCotoffMatch: 1
          })
        }
      },
      fail: function (res) {
        console.log("fail!");
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.setData({
      activeIndex: 0,
      sliderOffset: 0
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  matchClick: function(e){
    // console.log(e.currentTarget.id);
    wx.setStorageSync('matchId', e.currentTarget.id);
  }
  
})