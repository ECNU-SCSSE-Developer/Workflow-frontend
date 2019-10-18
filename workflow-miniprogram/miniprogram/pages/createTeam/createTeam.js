// pages/createTeam/createTeam.js
Page({

  /**
   * Page initial data
   */
  data: {
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  getTeamName: function(e){
    console.log(e.detail.value);
    wx.setStorageSync('teamName', e.detail.value);
  },

  createTeam: function(){
    var that = this;
    wx.request({
      url: '',
      method: '',
      data: {
        teamName: wx.getStorageSync('teamName')
      },
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        wx.showToast({
          title: '创建成功！',
          icon: 'success'
        })
      },
      fail: function (res) {
        console.log("create team fail!");
      }
    })
  }
})