// pages/myFocus/myFocus.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["同学", "比赛", "招聘"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hasFocusPerson: 0,
    hasFocusMatch: 1,
    hasFocusRecruit: 1,
    focusPerson: [{
      id: 1,
      name: "三眼皮猴子",
      url:"https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a3.jpg",
      motto: "好好睡觉"
    }, {
      id: 2,
        url:"https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a2.jpg",
        name: "Weird",
      motto: "我爱学习"
    }, {
      id: 3,
        url:"https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a4.jpg",
        name: "布里",
      motto: "学习爱我"
    }],

    focusRecruits: [{
      id: 1,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a1.jpg",
      creator: "Knight",
      name: "本小队需要JAVA后端若干名",
      match: "第16届“大夏杯”大学生创业大赛",
      now: 1,
      total: 3,
      focus: 1,
    }, {
      id: 2,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a2.jpg",
      creator: "Weird",
      name: "本小队需要PHP后端两名",
      match: "第六届创新创业大赛",
      now: 1,
      total: 2,
      focus: 1,
    }, {
      id: 3,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a3.jpg",
      creator: "三眼皮猴子",
      name: "需要web前端若干名,福利满满",
      match: "第六届创新创业大赛",
      now: 2,
      total: 3,
      focus: 1,
    }, {
      id: 4,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a4.jpg",
      creator: "布里",
      name: "招全栈",
      match: "第六届创新创业大赛",
      now: 4,
      total: 3,
      focus: 1,
    }, {
      id: 5,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a5.jpg",
      creator: "咕叽",
      name: "需要设计学院的同学..",
      match: "第六届创新创业大赛",
      now: 0,
      total: 1,
      focus: 1,
    }, {
      id: 6,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a6.jpg",
      creator: "Type1551 ASDIC⚓🦇",
      name: "JAVAer WANTED",
      match: "第六届创新创业大赛",
      now: 1,
      total: 3,
      focus: 1,
    },],

    focusMatchs: [{
      id: 1,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m1.jpg",
      title: "第16届“大夏杯”大学生创业大赛",
      level: "校级",
      time: "2019年4月28日",
    }, {
      id: 2,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m2.jpg",
      title: "R3全球大学生区块链商业计划竞赛",
      level: "国家级",
      time: "2019年4月28日",
    }, {
      id: 3,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m3.jpg",
      title: "上海市大学生计算机应用能力大赛",
      level: "市级",
      time: "2019年4月28日",
    }, {
      id: 4,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m4.jpg",
      title: "(第十一届)华师大本科生计算机应用能力大赛",
      level: "校级",
      time: "2019年4月28日",
    }, {
      id: 5,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m6.jpg",
      title: "互联网+",
      level: "校级",
      time: "2019年4月28日",
    }, {
      id: 6,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m5.png",
      title: "创青春市赛",
      level: "市级",
      time: "2019年4月28日",
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    if (that.data.focusPerson.length != 0) {
      that.setData({
        hasFocusPerson: 1
      })
    }

    wx.request({
      url: 'http://localhost:8081/user/follower',
      method: '',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        console.log(res);
        that.setData({
          focusPerson: res.data
        });
        if(that.data.focusPerson.length==0){
          that.setData({
            hasFocusPerson: 0
          })
        }else{
          that.setData({
            hasFocusPerson: 1
          })
        }
      },
      fail:function(res){
        console.log("fail!");
      }
    })

    wx.request({
      url: 'http://localhost:8081//activity/followed',
      method: '',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res);
        that.setData({
          focusMatchs: res.data
        });
        if (that.data.focusMatchs.length == 0) {
          that.setData({
            hasFocusMatch: 0
          })
        } else {
          that.setData({
            hasFocusMatch: 1
          })
        }
      },
      fail: function (res) {
        console.log("fail!");
      }
    })

    wx.request({
      url: 'http://localhost:8081/recruit/followed',
      method: '',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res);
        that.setData({
          focusRecruit: res.data
        });
        if (that.data.focusRecruits.length == 0) {
          that.setData({
            hasFocusRecruit: 0
          })
        } else {
          that.setData({
            hasFocusRecruit: 1
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

  matchClick: function (e) {
    // console.log(e.currentTarget.id);
    wx.setStorageSync('matchId', e.currentTarget.id);
  },

  toOthersInfo: function () {
    wx.navigateTo({
      url: '/pages/othersInfo/othersInfo',
    })
  },

  toDetail: function (e) {
    wx.setStorageSync('recruitId', e.currentTarget.id);
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/recruitDetail/recruitDetail',
      })
    }, 500)
  },

  changeFocus: function (e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8081/user/' + userId + '/follower/'+e.currentTarget.id,
      method: 'delete',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        console.log("success!");
      },
      fail: function(res){
        console.log("fail!");
      }
    })
  }
})