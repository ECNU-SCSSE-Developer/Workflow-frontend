// pages/myWork/myWork.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgFlag: 0,
    hasWork: 0,
    workList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:8081/team/joinedTeam',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          workList: res.data.data
        });
        if (res.data.lenght == 0) {
          that.setData({
            hasWork: 0
          })
        }
        else {
          that.setData({
            hasWork: 1
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

  changeImg: function () {
    if (this.data.imgFlag == 1) {
      this.setData({
        imgFlag: 0
      });
    } else {
      this.setData({
        imgFlag: 1
      });
    }
  }
})