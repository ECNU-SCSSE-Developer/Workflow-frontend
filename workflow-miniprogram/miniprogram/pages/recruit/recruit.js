//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    dropDownMenuTitle: ['招聘', '比赛', '活动'],
    dropDownMenuFirstData:[
      {
        id: 1, title: '按比赛',
        childModel: [
          { id: '11', title: '第五届创新创业大赛'},
          { id: '12', title: '大夏杯'}
        ]
      },
      {
        id: 2, title: '按职位',
        childModel: [
          {id: '21', title: 'web前端'},
          {id: '22', title: 'java后端开发'}
        ]
      }
    ],
    dropDownMenuSecondData: [
      {id: 1, title: '26届大夏杯科赛'},
      {id: 2, title: '第五届创新创业大赛'},
      {id: 3, title: '第五届“互联网+”创新创业大赛'}
    ],
    dropDownMenuThirdData: [
      {id: 1, title: '第二届“科技英才”评选活动'},
      {id: 2, title: '一站到底'},
      {id: 3, title: '新生辩论赛'}
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
