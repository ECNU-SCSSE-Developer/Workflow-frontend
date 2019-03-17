var sliderWidth = 120; // 需要设置slider的宽度，用于计算中间位置
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
    tabs: ["近 期 比 赛", "已 截 止", "比 赛 年 鉴"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hasMatch: 1, //是否有近期比赛
    matchs: [{
      id: 1,
      title: "比赛1",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 2,
      title: "比赛2",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 3,
      title: "比赛3",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 4,
      title: "比赛4",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 5,
      title: "比赛5",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 6,
      title: "比赛6",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 7,
      title: "比赛7",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 8,
      title: "比赛8",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 9,
      title: "比赛9",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 10,
      title: "比赛10",
      level: "校级",
      time: "2019年2月28日",
    }],

    cutoffMatchs: [{
        id: 1,
        title: "比赛1",
        level: "校级",
        time: "2019年2月28日",
      }, {
        id: 2,
        title: "比赛2",
        level: "校级",
        time: "2019年2月28日",
      }, {
        id: 3,
        title: "比赛3",
        level: "校级",
        time: "2019年2月28日",
      },
      {
        id: 4,
        title: "比赛3",
        level: "校级",
        time: "2019年2月28日",
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
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