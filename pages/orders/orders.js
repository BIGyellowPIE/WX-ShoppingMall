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
<<<<<<< HEAD
    orders: []
=======
    orders: [
<<<<<<< HEAD
    ]
>>>>>>> glare-ni
  },
=======
      { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01 },
      { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03 }
    ]
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
    this.getTotalPrice();
  },

>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
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
<<<<<<< HEAD
    this.getOrder(),
      this.getTotalPrice()
=======
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let orders = this.data.orders;
    let total = 0;
<<<<<<< HEAD
    //console.log(orders)
    for (let i = 0; i < orders.length; i++) {
      total += orders[i][3] * orders[i][15];
    }
<<<<<<< HEAD
=======
    //console.log(total)
=======
    for (let i = 0; i < orders.length; i++) {
      total += orders[i].num * orders[i].price;
    }
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
>>>>>>> glare-ni
    this.setData({
      total: total
    })
  },

  toPay() {
<<<<<<< HEAD
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
=======
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
    wx.showModal({
      title: '提示',
      content: '本系统只做演示，支付系统已屏蔽',
      text: 'center',
      complete() {
<<<<<<< HEAD
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
=======
        wx.switchTab({
          url: '/page/component/user/user'
        })
      }
    })
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

>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
  }
})