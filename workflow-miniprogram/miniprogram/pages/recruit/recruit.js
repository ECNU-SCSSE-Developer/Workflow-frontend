// pages/recruit/recruit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 1,
      name: "xxx小队需要JAVA后端若干名",
      match: "第六届创新创业大赛",
      now: 5,
      total: 10,
      focus: 0,
    }, {
      id: 2,
      name: "xxx小队需要JAVA后端若干名",
      match: "第六届创新创业大赛",
      now: 5,
      total: 10,
      focus: 1,
    }, {
      id: 3,
      name: "xxx小队需要JAVA后端若干名",
      match: "第六届创新创业大赛",
      now: 5,
      total: 10,
      focus: 1,
    }, {
      id: 4,
      name: "xxx小队需要JAVA后端若干名",
      match: "第六届创新创业大赛",
      now: 5,
      total: 10,
      focus: 0,
    }, {
      id: 5,
      name: "xxx小队需要JAVA后端若干名",
      match: "第六届创新创业大赛",
      now: 5,
      total: 10,
      focus: 1,
    }, {
      id: 6,
      name: "xxx小队需要JAVA后端若干名",
      match: "第六届创新创业大赛",
      now: 5,
      total: 10,
      focus: 0,
    }, ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  toDetail: function() {
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/recruitDetail/recruitDetail',
      })
    }, 500)
  },

  changeFocus: function(e) {
    console.info(e.currentTarget.dataset.id)
  },
})