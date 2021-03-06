// pages/recruitDetail/recruitDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recruit: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8081/recruit/' + wx.getStorageSync('recruitId'),
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        console.log(res.data.data);
        that.setData({
           recruit: res.data.data
        })
      },
      fail: function(res){
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

  applyRecruit: function(){
    wx.request({
      url: 'http://localhost:8081/user/myself',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        wx.request({
          url: 'http://localhost:8081/recruit/' + wx.getStorageSync('recruitId') + '/appliedUser/' + res.data.data,
          method: 'PUT',
          header: {
            'content-type': 'application/json',
            'openid': wx.getStorageSync('openid')
          },
          success: function (res) {
            wx.showToast({
              title: '应聘成功！',
              icon: 'success'
            })
            setTimeout(()=>{
              wx.switchTab({
                url: '/pages/recruit/recruit'
              })
            }, 1000)
          },
          fail: function (res) {
            wx.showToast({
              title: '应聘失败！',
              icon: 'loading'
            })
          }
        })
      },
      fail: function(res){
        console.log("get selfId fail!");
      }
    })
  }
})