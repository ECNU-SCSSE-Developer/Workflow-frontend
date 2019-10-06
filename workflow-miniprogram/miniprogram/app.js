//app.js
App({
  onLaunch: function () {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //获取凭证
        var code = res.code;
        if(code){
          console.log("获取用户登录凭证：" + code);
          wx.request({
            url: 'http://localhost:8081/login',
            data: {
              code: code
            },
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success: function(res){
              if(res.statusCode == 200){
                console.log("openid: " + res.data);
                wx.setStorageSync('openid', res.data);
              }else{
                console.log("fail!");
              }
            },
            fail: function(res){
              console.log("fail!");
            }
          })
        }else{
          console.log("fail! " + res.errMsg);
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})