// pages/selfInfo/selfInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: [],
    followingUserNum: 0,
    followedUserNum: 0,
    collegeArr: ['计算机学院', '软件工程学院', '数据学院', '其他'],
    gradeArr: ['本16级', '本17级', '本18级', '本19级', '本20级', '本21级', '研17级', '研18级', '研19级', '研20级', '研21级'],
    genderArr: ['男', '女', '未知'],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取userId
    wx.request({
      url: 'http://localhost:8081/user/myself',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        var userId = res.data.data;
        //获取关注数
        wx.request({
          url: 'http://localhost:8081/user/' + userId + '/followingUser',
          method: 'GET',
          header: {
            'content-type': 'application/json',
            'openid': wx.getStorageSync('openid')
          },
          success: function (res) {
            that.setData({
              followingUserNum: res.data.data.length
            });
          },
          fail: function (res2) {
            console.log("get followingUser fail!");
          }
        })

        //获取粉丝数
        wx.request({
          url: 'http://localhost:8081/user/' + userId + '/followedUser',
          method: 'GET',
          header: {
            'content-type': 'application/json',
            'openid': wx.getStorageSync('openid')
          },
          success: function (res) {
            that.setData({
              followedUserNum: res.data.data.length
            });
          },
          fail: function (res2) {
            console.log("get followedUser fail!");
          }
        })

        //获取个人信息
        wx.request({
          url: 'http://localhost:8081/user/' + userId + '/detailPage',
          method: 'GET',
          header: {
            'content-type': 'application/json',
            'openid': wx.getStorageSync('openid')
          },
          success: function(res){
            console.log(res.data.data);
              that.setData({
                info: res.data.data
              })
          },
          fail: function(res){
            console.log("get info fail!");
          }
        })
      },
      fail: function(res){
        console.log("get userId fail!");
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