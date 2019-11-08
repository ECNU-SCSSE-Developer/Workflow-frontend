// pages/recruit/recruit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id: 1,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a1.jpg",
      creator: "Knight",
      name: "workflow小组",
      match: "第16届“大夏杯”大学生创业大赛",
      now: 10,
      total: 13,
      focus: 0,
      time: "5分钟前",
    }, {
      id: 2,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a2.jpg",
      creator: "Weird",
      name: "BAS团队",
      match: "第六届创新创业大赛",
      now: 5,
      total: 6,
      focus: 1,
        time: "2小时前",
    }]
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

  toDetail: function (e) {
    wx.setStorageSync('teamId', e.currentTarget.id)
    console.log(wx.getStorageSync('teamId'));
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/workflowDetails/workflowDetails',
      })
    }, 500)
  },

  changeFocus: function (e) { },

  toOthersInfo: function () {
    wx.navigateTo({
      url: '/pages/othersInfo/othersInfo',
    })
  }
})