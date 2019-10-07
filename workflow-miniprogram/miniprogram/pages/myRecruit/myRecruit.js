// pages/myRecruit/myRecruit.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["应聘", "申请"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hasRecruit: 0,
    hasApply: 0,
    recruitList: [],
    applyList:[]
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

    wx.request({
      url: 'http://localhost:8081/recruit/assignedRecruit',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          recruitList: res.data.data
        });
        if (that.data.recruitList.length == 0) {
          that.setData({  
            hasRecruit: 0
          })
        }
        else {
          that.setData({
            hasRecruit: 1
          })
        }
      },
      fail: function (res) {
        console.log("fail!");
      }
    })

    wx.request({
      url: 'http://localhost:8081/recruit/appliedRecruit',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          applyList: res.data.data
        });
        if (that.data.applyList.length == 0) {
          that.setData({
            hasApply: 0
          })
        }
        else {
          that.setData({
            hasApply: 1
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
  }
})