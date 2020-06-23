// pages/orders/orders.js
var address;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {},
    hasAddress: false,
    total: 0,
    orders: []
  },
  /**
   * 生命周期函数--监听页面显示
   */
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
    this.getOrder(),
      this.getTotalPrice()
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
    //console.log(orders)
    for (let i = 0; i < orders.length; i++) {
      total += orders[i][3] * orders[i][15];
    }
    this.setData({
      total: total
    })
  },

  toPay() {
    let info = wx.getStorageInfoSync()
    let keys = info.keys
    let num = keys.length
    //console.log(keys)
    for (var i = 0; i < num; i++) {
      //删除已经购买的商品缓存
      let obj = wx.getStorageSync(keys[i])
      if (obj[16]) {
        wx.removeStorageSync(obj[0])
      }
    };
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text: 'center',
      complete() {
        wx.navigateBack();
      }
    });
    //wx.navigateBack();
  },

  getOrder: function() {
    let info = wx.getStorageInfoSync()
    let keys = info.keys
    let num = keys.length
    //console.log(keys)
    let myCart = [];
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
      if (obj[16]) {
        myCart.push(obj);
      }
    }
    this.setData({
      orders: myCart
    });
  }
})