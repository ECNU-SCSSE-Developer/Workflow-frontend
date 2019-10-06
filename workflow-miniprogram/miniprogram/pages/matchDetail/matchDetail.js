// pages/matchDetail/matchDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    match:{
      url: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m1.jpg",
      title: "第16届“大夏杯”大学生创业大赛",
      place: "华东师范大学中山北路校区",
      endTime: "2019年4月28日",
      matchTime: "2019年9月15日",
      summary: "这是一个比较长的简介这是一个比较长的简介这是一个比较长的简介这是一个比较长的简介这是一个比较长的简介这是一个比较长的简介"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(activeId);
    wx.request({
      url: 'http://localhost:8081//activity/' + wx.getStorageSync('matchId'),
      method: 'GET',
      header:{
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        console.log(res);
        wx.setData({
          match: res.data
        })
      },
      fail: function(res){
        console.log("fail");
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

  }
})