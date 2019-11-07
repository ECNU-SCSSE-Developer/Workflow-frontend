// pages/myRecruit/myRecruit.js
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["我的申请", "处理申请"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hasOthersApply: 0,
    hasApply: 0,
    othersApplyList: [],
    applyList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    // 我的申请
    wx.request({
      url: 'http://localhost:8081/recruit/appliedRecruit',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          applyList: res.data.data,
          hasApply: res.data.data.length
        })
      },
      fail: function (res) {
        console.log("fail!");
      }
    })

    // 待处理的提交的申请
    wx.request({
      url: 'http://localhost:8081/recruit/myAppliedUsers',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function (res) {
        console.log(res.data.data);
        that.setData({
          othersApplyList: res.data.data,
          hasOthersApply: res.data.data.length
        })
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

  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  toDetail: function (e) {
    wx.setStorageSync('recruitId', e.currentTarget.id);
    setTimeout(() => {
      wx.navigateTo({
        url: '/pages/recruitDetail/recruitDetail',
      })
    }, 500)
  },
 
  toOthersInfo: function (e) {
    wx.setStorageSync('userId', e.currentTarget.dataset.id);
    wx.navigateTo({
      url: '/pages/othersInfo/othersInfo',
    })
  },

  acceptApply: function(e){
    // wx.request({
    //   url: 'http://localhost/recruit/' + e.currentTarget.dataset.recruitId + '/user/' + e.currentTarget.dataset.userId,
    //   method: 'PUT',
    //   header: {
    //     'content-type': 'application/json',
    //     'openid': wx.getStorageSync('openid')
    //   },
    //   success: function(res){
    //     console.log("success");
    //   },
    //   fail: function(res){
    //     console.log("accept fail!");
    //   }
    // })
  },

  changeFocus: function (e) {
    var that = this;
    if (e.currentTarget.dataset.id.followed == true) {
      wx.request({
        url: 'http://localhost:8081/user/recruit/' + e.currentTarget.dataset.id.recruitId,
        method: 'delete',
        header: {
          'content-type': 'application/json',
          'openid': wx.getStorageSync('openid')
        },
        success: function (res) {
          wx.showToast({
            title: '取消收藏',
            icon: 'success'
          })
          that.onLoad();
        },
        fail: function (res) {
          wx.showToast({
            title: '操作失败',
            icon: 'success'
          })
        }
      })
    }
    else {
      wx.request({
        url: 'http://localhost:8081/user/recruit/' + e.currentTarget.dataset.id.recruitId,
        method: 'put',
        header: {
          'content-type': 'application/json',
          'openid': wx.getStorageSync('openid')
        },
        success: function (res) {
          wx.showToast({
            title: '收藏成功',
            icon: 'success'
          })
          that.onLoad();
        },
        fail: function (res) {
          wx.showToast({
            title: '操作失败',
            icon: 'success'
          })
        }
      })
    }
    this.onLoad();
  },
})