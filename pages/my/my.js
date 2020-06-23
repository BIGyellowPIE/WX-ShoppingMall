// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: "未登录",
    src: "/images/index1.png",
    address: {},
    hasAddress: true,
  },
  getMyInfo: function (e) {
    let info = e.detail.userInfo
    console.log(info)
    this.setData({
      src: info.avatarUrl,
      nickName: info.nickName,
      isLogin: true
    })
  }, 
  onShow: function () {
    const self = this;
    wx.getStorage({
      key: 'address',
      success(res) {
        self.setData({
          address: res.data,
          hasAddress: true
        })
      }
    })
  },
})