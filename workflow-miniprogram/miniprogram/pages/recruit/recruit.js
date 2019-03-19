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
      name: "本小队需要JAVA后端若干名",
      match: "第16届“大夏杯”大学生创业大赛",
      now: 1,
      total: 3,
      focus: 0,
    }, {
      id: 2,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a2.jpg",
        creator: "Weird",
      name: "本小队需要PHP后端两名",
      match: "第六届创新创业大赛",
      now: 1,
      total: 2,
      focus: 1,
    }, {
      id: 3,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a3.jpg",
        creator: "三眼皮猴子",
      name: "需要web前端若干名,福利满满",
      match: "第六届创新创业大赛",
      now: 2,
      total: 3,
      focus: 1,
    }, {
      id: 4,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a4.jpg",
        creator: "布里",
      name: "招全栈",
      match: "第六届创新创业大赛",
      now: 4,
      total: 3,
      focus: 0,
    }, {
      id: 5,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a5.jpg",
        creator: "咕叽",
      name: "需要设计学院的同学..",
      match: "第六届创新创业大赛",
      now: 0,
      total: 1,
      focus: 1,
    }, {
      id: 6,
        img: "https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a6.jpg",
        creator: "Type1551 ASDIC⚓🦇",
      name: "JAVAer WANTED",
      match: "第六届创新创业大赛",
      now: 1,
      total: 3,
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

  changeFocus: function(e) {},

  toOthersInfo: function(){
    wx.navigateTo({
      url: '/pages/othersInfo/othersInfo',
    })
  }
})