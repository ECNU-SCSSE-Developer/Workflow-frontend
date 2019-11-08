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
    }],
    time: util.formatDateTime(new Date()),
    offset: 0,
    recruitName: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(this.data.time);
    var that = this;
    wx.request({
      url: 'http://localhost:8081/recruit/all?currentTime=' + that.data.time + '&pageNum=0',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res) {
        console.log(res.data.data);

        //mock image
        for (var i = 0; i < res.data.data.length; i++) {
          res.data.data[i].image = 'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a' + res.data.data[i].organizer.userId + '.jpg'
        }
        that.setData({
          list: res.data.data,
          offset: 1
        })
        if (that.data.list.length != 0) {
          that.setData({
            hasRecruit: 1
          })
        } else {
          that.setData({
            hasRecruit: 0,
            offset: 0
          })
        }
      },
      fail: function(res) {
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
    var nowTime = util.formatDateTime(new Date());
    console.log("fresh! Time: " + that.data.time);
    wx.request({
      url: 'http://localhost:8081/recruit/all?currentTime=' + nowTime + '&&pageNum=0',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res) {
        console.log(res.data.data);

        //todo
        //mock image
        for (var i = 0; i < res.data.data.length; i++) {
          res.data.data[i].image = 'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a' + res.data.data[i].organizer.userId + '.jpg'
        }

        that.setData({
          list: res.data.data,
          time: nowTime,
          offset: 1
        })
        if (that.data.list.length != 0) {
          that.setData({
            hasRecruit: 1
          })
        } else {
          that.setData({
            hasRecruit: 0,
            offset: 0
          })
        }
      },
      fail: function(res) {
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
    if (that.data.recruitName == "") {
      wx.request({
        url: 'http://localhost:8081/recruit/all?' + that.data.recruitName + 'currentTime=' + that.data.time + '&&pageNum=' + that.data.offset,
        method: 'GET',
        header: {
          'content-type': 'application/json',
          'openid': wx.getStorageSync('openid')
        },
        success: function(res) {
          console.log(res.data.data);
          
          //mock image
          for (var i = 0; i < res.data.data.length; i++) {
            res.data.data[i].image = 'https://workflow-1258575893.cos.ap-shanghai.myqcloud.com/a' + res.data.data[i].organizer.userId + '.jpg'
          }
          that.setData({
            list: that.data.list.concat(res.data.data),
            offset: that.data.offset + 1
          })
        },
        fail: function(res) {
          console.log("fail");
        }
      })
    } else {
      wx.request({
        url: 'http://localhost:8081/recruit/all?currentTime=' + that.data.time + '&&pageNum=' + that.data.offset,
        method: 'GET',
        header: {
          'content-type': 'application/json',
          'openid': wx.getStorageSync('openid')
        },
        success: function(res) {
          console.log(res.data.data);
          that.setData({
            list: that.data.list.concat(res.data.data),
            offset: that.data.offset + 1
          })
        },
        fail: function(res) {
          console.log("fail");
        }
      })
    }
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
    var that = this;
    if (e.currentTarget.dataset.id.followed == true) {
      wx.request({
        url: 'http://localhost:8081/user/recruit/' + e.currentTarget.dataset.id.recruitId,
        method: 'delete',
        header: {
          'content-type': 'application/json',
          'openid': wx.getStorageSync('openid')
        },
        success: function(res) {
          wx.showToast({
            title: '取消收藏',
            icon: 'success'
          })
          that.onLoad();
        },
        fail: function(res) {
          wx.showToast({
            title: '操作失败',
            icon: 'success'
          })
        }
      })
    } else {
      wx.request({
        url: 'http://localhost:8081/user/recruit/' + e.currentTarget.dataset.id.recruitId,
        method: 'put',
        header: {
          'content-type': 'application/json',
          'openid': wx.getStorageSync('openid')
        },
        success: function(res) {
          wx.showToast({
            title: '收藏成功',
            icon: 'success'
          })
          that.onLoad();
        },
        fail: function(res) {
          wx.showToast({
            title: '操作失败',
            icon: 'success'
          })
        }
      })
    }
    this.onLoad();
  },

  toOthersInfo: function(e) {
    wx.setStorageSync('userId', e.currentTarget.dataset.id);
    console.log(wx.getStorageSync('userId'));
    wx.navigateTo({
      url: '/pages/othersInfo/othersInfo',
    })
  },

  deleteRecruit: function(e) {
    var that = this;
    wx.showModal({
      title: '是否确认删除？',
      showCancel: true,
      cancelText: '取消',
      success: function(res) {
        wx.request({
          url: 'http://localhost:8081/recruit/' + e.currentTarget.dataset.id.recruitId,
          method: 'delete',
          header: {
            'content-type': 'application/json',
            'openid': wx.getStorageSync('openid')
          },
          success: function(res) {
            if (res.confirm) {
              wx.showToast({
                title: '删除成功！',
                icon: 'success'
              })
              that.onLoad();
            }
          },
          fail: function(res) {
            wx.showToast({
              title: '操作失败！',
              icon: 'success'
            })
          }
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '操作失败！',
          icon: 'success'
        })
      }
    })
  },

  getRecruitName: function(e) {
    console.log(e.detail.value);
    this.setData({
      recruitName: e.detail.value
    })
  },

  screen: function(e) {
    var that = this;
    wx.request({
      url: 'http://localhost:8081/recruit/all?recruitName=' + that.data.recruitName + '&currentTime=' + that.data.time + '&pageNum=0',
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res) {
        console.log(res.data.data);
        that.setData({
          list: res.data.data,
          offset: 1
        })
        if (that.data.list.length != 0) {
          that.setData({
            hasRecruit: 1
          })
        } else {
          that.setData({
            hasRecruit: 0,
            offset: 0
          })
        }
      },
      fail: function(res) {
        console.log("fail");
      }
    })
  },

  createRecruit: function(e) {
    // 判断是否已经有团队
    wx.request({
      url: 'http://localhost:8081/team/joinedTeam',
      method: 'get',
      header: {
        'content-type': 'application/json',
        'openid': wx.getStorageSync('openid')
      },
      success: function(res) {
        if (res.data.data.length == 0) {
          wx.navigateTo({
            url: '/pages/createTeam/createTeam',
          })
        } else {
          wx.navigateTo({
            url: '/pages/createRecruit/createRecruit',
          })
        }
      },
      fail: function(res) {
        console.log("fail");
      }
    })
  }
})