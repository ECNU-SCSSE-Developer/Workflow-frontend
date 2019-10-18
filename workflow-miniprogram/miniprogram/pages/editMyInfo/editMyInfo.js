// pages/editMyInfo/editMyInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    collegeArr: ['计算机学院', '软件工程学院', '数据学院', '其他'],
    gradeArr: ['本16级', '本17级', '本18级', '本19级', '本20级', '本21级', '研17级', '研18级', '研19级', '研20级','研21级'],
    genderArr: ['男', '女', '未知'],
    collegeIndex: 0,
    gradeIndex: 0,
    genderIndex: 0
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

  collegeChange: function (e) {
    this.setData({
      collegeIndex: e.detail.value
    })
  },

  gradeChange: function (e) {
    this.setData({
      gradeIndex: e.detail.value
    })
  },

  genderChange: function (e) {
    this.setData({
      genderIndex: e.detail.value
    })
  },

  formSubmit: function(e){
    console.log(e.detail.value);
    wx.request({
      url: 'http://localhost:8081/user/self',
      method: 'PUT',
      data: {
        username: e.detail.value.username,
        gender: e.detail.value.gender,
        userNumber: e.detail.value.userNumber,
        college: e.detail.value.college,
        userGrade: e.detail.value.userGrade,
        userPhone: e.detail.value.userPhone,
        userEmail: e.detail.value.userEmail,
        userSpecialty: e.detail.value.userSpecialty,
        wxId: e.detail.value.wxId,
        userResume: e.detail.value.userResume
      },
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res){
        wx.showToast({
          title: '修改成功！',
          icon: 'success'
        })
      },
      fail: function(res){
        console.log("edit fail!");
      }
    })
  }
})