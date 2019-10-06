// pages/createRecruit/createRecruit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    positionArr:['职位1', '职位2', '职位3', '职位4'],
    matchArr:['比赛1','比赛2','比赛3'],
    posIndex: 0,
    matchIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
  positionChange: function(e){
    this.setData({
      posIndex: e.detail.value 
    })
  },
  matchChange: function(e){
    this.setData({
      matchIndex: e.detail.value
    })
  },

  formSubmit: function(e){
    console.log(e.detail.value);
    wx.request({
      url: 'http://localhost:8081/recruit',
      method: 'POST',
      data: {
        name: e.detail.value.name,
        position: e.detail.value.position,
        match: e.detail.value.match,
        personNum: e.detail.value.personNum,
        intro: e.detail.value.intro
      },
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/recruit/recruit',
          })
        }, 500)
      },
      fail: function (res) {
        console.log("fail");
      }
    })
  }
})