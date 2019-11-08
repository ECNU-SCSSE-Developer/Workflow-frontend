// pages/myFocus/myFocus.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var util = require('../../utils/util.js')
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
      url: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a3.jpg",
      motto: "好好睡觉"
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
    }],

    focusMatchs: [{
      id: 1,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m1.jpg",
      title: "第16届“大夏杯”大学生创业大赛",
      level: "校级",
      time: "2019年4月28日",
    }]
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

    //同学
    wx.request({
      url: 'http://localhost:8081/user/myself',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        wx.request({
          url: 'http://localhost:8081/user/' + res.data.data + '/followingUser',
          method: 'GET',
          header: {
            'content-type': 'application/json',
            'openid': wx.getStorageSync('openid')
          },
          success: function (res2) {
            console.log(res2.data.data);
            that.setData({
              focusPerson: res2.data.data
            });
            if (that.data.focusPerson.length == 0) {
              that.setData({
                hasFocusPerson: 0
              })
            } else {
              that.setData({
                hasFocusPerson: 1
              })
            }
          },
          fail: function (res2) {
            console.log("fail!");
          }
        })

        //比赛
        wx.request({
          url: 'http://localhost:8081/user/' + res.data.data + '/followedActivity',
          method: 'GET',
          header: {
            'content-type': 'application/json',
            'openid': wx.getStorageSync('openid')
          },
          success: function (res2) {
            console.log(res2.data.data);
            // 时间格式化
            for (let i = 0; i < res2.data.data.length; i++) {
              res2.data.data[i].activitySignUpDeadline = util.formatTime(new Date(res2.data.data[i].activitySignUpDeadline))
              res2.data.data[i].activityTime = util.formatTime(new Date(res2.data.data[i].activityTime))
            }

            that.setData({
              focusMatchs: res2.data.data,
              hasFocusMatch: res2.data.data.length
            })
          },
          fail: function (res2) {
            console.log("fail!");
          }
        })

        //招聘
        wx.request({
          url: 'http://localhost:8081/user/' + res.data.data + '/followedRecruit',
          method: 'GET',
          header: {
            'content-type': 'application/json',
            'openid': wx.getStorageSync('openid')
          },
          success: function (res2) {
            console.log(res2.data.data);
            that.setData({
              focusRecruits: res2.data.data,
              hasFocusRecruit: res2.data.data.length
            })
          },
          fail: function (res2) {
            console.log("fail!");
          }
        })
      }
    })
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

  },


  tabClick: function (e) {
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
      url: 'http://localhost:8081/user/recruit/' + e.currentTarget.dataset.id.recruitId,
      method: 'delete',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        wx.showToast({
          title: '取消收藏',
          icon: 'success'
        })
        that.onLoad();
      },
      fail: function (res) {
        wx.showToast({
          title: '操作失败',
          icon: 'success'
        })
      }
    })
    this.onLoad();
  }
})