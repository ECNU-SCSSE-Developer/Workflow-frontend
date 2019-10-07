// pages/recruit/recruit.js
var util = require('../../utils/util.js');
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
    }, ],
    time: util.formatTime(new Date()),
    offset: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.time);
    var that = this;
    wx.request({
      url: 'http://localhost:8081/recruit/all?currentTime=' + that.data.time + '&offset=0',
      method: 'GET',
      header: {
        'content-type':'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        console.log(res.data.data);
        that.setData({
          list: res.data.data,
          offset: 1
        })
        if (that.data.list.length != 0) {
          that.setData({
            hasRecruit: 1
          })
        }
        else{
          that.setData({
            hasRecruit: 0,
            offset: 0
          })
        }
      },
      fail: function(res){
        console.log("fail");
      }
    })
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
    var that = this;
    var nowTime = util.formatTime(new Date());
    console.log("fresh! Time: "+that.data.time);
    wx.request({
      url: 'http://localhost:8081/recruit/all?currentTime=' + nowTime + '&&offset=0',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          list: res.data.data,
          time: nowTime,
          offset: 1
        })
        if (that.data.list.length != 0) {
          that.setData({
            hasRecruit: 1
          })
        }
        else {
          that.setData({
            hasRecruit: 0,
            offset: 0
          })
        }
      },
      fail: function (res) {
        console.log("fail");
      }
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log("reach bottom! Time: " + this.data.time + ". offset: " + this.data.offset);
    var that = this;
    wx.request({
      url: 'http://localhost:8081/recruit/all?currentTime='+ that.data.time +'&&offset=' + that.data.offset,
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        console.log(res.data.data);
        that.setData({
          list: that.data.list.concat(res.data.data),
          offset: that.data.offset+1
        })
      },
      fail: function(res){
        console.log("fail");
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  toDetail: function(e) {
    wx.setStorageSync('recruitId', e.currentTarget.id);
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/recruitDetail/recruitDetail',
      })
    }, 500)
  },

  changeFocus: function(e) {
    
  },

  toOthersInfo: function(){
    wx.navigateTo({
      url: '/pages/othersInfo/othersInfo',
    })
  },

  screen: function(e){
    var that = this;
    wx.request({
      url: 'http://localhost:8081/recruit/all?recruitName=' + e.detail.value.recruitName + '&currentTime=' + that.data.time + '&offset=0',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          list: res.data.data,
          offset: 1
        })
        if (that.data.list.length != 0) {
          that.setData({
            hasRecruit: 1
          })
        }
        else {
          that.setData({
            hasRecruit: 0,
            offset: 0
          })
        }
      },
      fail: function (res) {
        console.log("fail");
      }
    })
  }
})