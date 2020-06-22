// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      name: '',
      phone: '',
      detail: ''
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    var self = this;

    wx.getStorage({
      key: 'address',
      success: function (res) {
        self.setData({
          address: res.data
        })
      }
    })
  },
  formSubmit(e) {
    const value = e.detail.value;
    if (value.name && value.phone && value.detail) {
      wx.setStorage({
        key: 'address',
        data: value,
        success() {
          wx.navigateBack();
        }
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请填写完整资料',
        showCancel: false
      })
    }
  },
})