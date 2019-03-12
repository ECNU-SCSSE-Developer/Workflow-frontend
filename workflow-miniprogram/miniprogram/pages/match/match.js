Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/image/1.jpg',
      '/image/1.jpg',
      '/image/1.jpg'
    ],
    tabs: ["近 期 比 赛", "已 截 止", "历 史 比 赛"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hasMatch: 1, //是否有近期比赛
    matchs: [{
      id: 1,
      title: "比赛1",
      time: "2019年2月28日",
    }, {
      id: 2,
      title: "比赛2",
      time: "2019年2月28日",
    }, {
      id: 3,
      title: "比赛3",
      time: "2019年2月28日",
    }, {
      id: 4,
      title: "比赛4",
      time: "2019年2月28日",
    }, {
      id: 5,
      title: "比赛5",
      time: "2019年2月28日",
    }, {
      id: 6,
      title: "比赛6",
      time: "2019年2月28日",
    }, {
      id: 7,
      title: "比赛7",
      time: "2019年2月28日",
    }, {
      id: 8,
      title: "比赛8",
      time: "2019年2月28日",
    }, {
      id: 9,
      title: "比赛9",
      time: "2019年2月28日",
    }, {
      id: 10,
      title: "比赛10",
      time: "2019年2月28日",
    }],
    historyMatchs: [{
      id: 1,
      title: "比赛1",
      time: "2019年2月28日",
    }, {
      id: 2,
      title: "比赛2",
      time: "2019年2月28日",
    }, {
      id: 3,
      title: "比赛3",
      time: "2019年2月28日",
    }],
    cutoffMatchs: [{
      id: 1,
      title: "比赛1",
      time: "2019年2月28日",
    }, {
      id: 2,
      title: "比赛2",
      time: "2019年2月28日",
    }, {
      id: 3,
      title: "比赛3",
      time: "2019年2月28日",
    }],
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

  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})