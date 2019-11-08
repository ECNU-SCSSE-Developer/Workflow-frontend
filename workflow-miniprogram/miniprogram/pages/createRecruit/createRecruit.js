// pages/createRecruit/createRecruit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    positionArr:['前端', 'JAVA', 'C#', 'python', '美工', 'C/C++', '其他'],
    matchs:['比赛1','比赛2','比赛3'],
    teams: ['team1','team2'],
    posIndex: 0,
    matchIndex: 0,
    teamIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取比赛
    wx.request({
      url: 'http://localhost:8081/activity/all?type=finish',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          matchs: res.data.data
        })
      },
      fail: function (res) {
        console.log("fail!");
      }
    });

    //获取团队
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
          teams: res.data.data
        });
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

  positionChange: function(e){
    this.setData({
      posIndex: e.detail.value 
    })
  },

  matchChange: function(e){
    this.setData({
      matchIndex: e.detail.value
    })
  },

  teamChange: function(e) {
    this.setData({
      teamIndex: e.detail.value
    })
  },

  formSubmit: function(e){
    console.log(e.detail.value);
    if(e.detail.value.name==""||e.detail.value.personNum==""||e.detail.value.intro==""){
      wx.showModal({
        title: '请补充完整招聘信息',
        showCancel: false
      })
    }else{
      var that = this;
      wx.request({
        url: 'http://localhost:8081/user/myself',
        method: 'GET',
        header: {
          'content-type': 'application/json',
          'openid': wx.getStorageSync('openid')
        },
        success: function (res) {
          wx.request({
            url: 'http://localhost:8081/recruit',
            method: 'POST',
            data: {
              "recruitName": e.detail.value.name,
              "recruitPosition": that.data.positionArr[e.detail.value.position],
              "recruitDescription": e.detail.value.intro,
              "recruitWillingNumber": e.detail.value.personNum,
              "recruitRegisteredNumber": 0,
              "manager": {
                "userId": res.data.data
              },
              "activity": {
                "activityId": that.data.matchs[e.detail.value.match].activityId
              }
              // "Team": {
              //   "teamId": teams[e.detail.value.team].teamId
              // },
            },
            header: {
              'content-type': 'application/json',
              'openid': wx.getStorageSync('openid')
            },
            success: function (res2) {
              wx.showToast({
                title: '发布成功',
                icon: 'success'
              })
              wx.navigateTo({
                url: '/pages/recruit/recruit',
              })
            },
            fail: function (res2) {
              console.log("create fail");
            }
          })
        },
        fail: function (res) {
          console.log("get userId fail!");
        }
      })
    }
  }
})