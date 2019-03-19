var sliderWidth = 120; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m1.jpg',
      'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m2.jpg',
      'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m3.jpg'
    ],
    tabs: ["近 期 比 赛", "已 截 止", "比 赛 年 鉴"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hasMatch: 1, //是否有近期比赛
    matchs: [{
      id: 1,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m1.jpg",
      title: "第16届“大夏杯”大学生创业大赛",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 2,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m2.jpg",
        title: "R3全球大学生区块链商业计划竞赛",
      level: "国家级",
      time: "2019年2月28日",
    }, {
      id: 3,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m3.jpg",
      title: "上海市大学生计算机应用能力大赛",
      level: "市级",
      time: "2019年2月28日",
    }, {
      id: 4,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m4.jpg",
      title: "(第十一届)华师大本科生计算机应用能力大赛",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 5,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m6.jpg",
      title: "互联网+",
      level: "校级",
      time: "2019年2月28日",
    }, {
      id: 6,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m5.png",
      title: "创青春市赛",
      level: "市级",
      time: "2019年2月28日",
    }],

    cutoffMatchs: [{
        id: 1,
      img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m5.png",
      title: "创青春国赛",
        level: "国家级",
        time: "2019年2月28日",
      }, {
        id: 2,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m4.jpg",
        title: "互联网+",
        level: "市级",
        time: "2019年2月28日",
      }, {
        id: 3,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m3.jpg",
        title: "第2届计算机科学与软件工程学院双创比赛",
        level: "院级",
        time: "2019年2月28日",
      },
      {
        id: 4,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/m1.jpg",
        title: "第15届“大夏杯”大学生创业大赛",
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
      success: function(res) {
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