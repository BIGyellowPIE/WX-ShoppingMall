var address;
var obj;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalprice:0, //总价，初始为0
    productList: [], //购物车列表
    hasList: false, //列表是否有数据
<<<<<<< HEAD
    selectAllStatus: true, //全选状态，默认全选
=======
    selectAllStatus: false, //全选状态，默认全选
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
    carts: [],
    //number:0,//商品数量
  },
  //获取商品列表,计算总价
  getCart: function () {
<<<<<<< HEAD
    //把地址缓存取出
    if (wx.getStorageSync('address')) {
      address = wx.getStorageSync('address')
      wx.removeStorageSync('address');
    }
    //获得所有未购买商品信息
=======
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
    let info = wx.getStorageInfoSync()
    let keys = info.keys
    console.log(keys)
    let num = keys.length

    let myCart = [];
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
<<<<<<< HEAD
      //console.log(obj)
      myCart.push(obj)
    }
    wx.setStorageSync('address', address)
    //let pp = wx.getStorageInfoSync()
    //console.log(pp)
    //console.log(myCart)
=======
      console.log(obj)
      myCart.push(obj)
    }
    console.log(typeof myCart)
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
    this.setData({
      carts: myCart,
      hasList: true
    });
    this.getTotalPrice();
  },
<<<<<<< HEAD
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getCart();
  },
  /**
    * 当前商品选中事件
    */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index][16];
    //console.log(selected)
    carts[index][16] = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

=======
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
  /**
   * 删除购物车当前商品
   */
<<<<<<< HEAD
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
=======
  onShow: function () {
    /* this.setData({
      hasList: true,
      carts:[
        { id: 1, name: '西瓜', src: '/images/xigua1.jpg', num: 4, price: 0.01, selected: true},
        { id: 2, name: 'timg', src: '/images/timg.jpg', num: 1, price: 0.03, selected: true }
      ]
    });
    this.getTotalPrice(); */
    this.getCart();
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
  },
  /**
    * 当前商品选中事件
    */
  selectList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    const selected = carts[index].selected;
    carts[index].selected = !selected;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
<<<<<<< HEAD
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i][16] = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index][15];
    num = num + 1;
    carts[index][15] = num;
    this.setData({
=======
   * 删除购物车当前商品
   */
  deleteList(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    carts.splice(index, 1);
    this.setData({
      carts: carts
    });
    if (!carts.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },

  /**
   * 购物车全选事件
   */
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let carts = this.data.carts;

    for (let i = 0; i < carts.length; i++) {
      carts[i].selected = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
<<<<<<< HEAD
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index][15];
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index][15] = num;
=======
   * 绑定加数量事件
   */
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let carts = this.data.carts;
    let num = carts[index].num;
    num = num + 1;
    carts[index].num = num;
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
<<<<<<< HEAD
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i][16]) {                     // 判断选中才会计算价格
        total += carts[i][3] * carts[i][15];   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  },

  /**
   * 去支付
   */
  toPay() {
    let carts = this.data.carts;  
    //console.log(carts)
    if (wx.getStorageSync('address')){
      obj = wx.getStorage('address');
    }
    wx.clearStorage();
    if (wx.getStorageSync('address')){
    wx.clearStorage();
    }
    wx.setStorageSync('address', obj)
    for(let i = 0; i < carts.length; i++){
      wx.setStorageSync(carts[i][0], carts[i])
    }
  },
=======
   * 绑定减数量事件
   */
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    const obj = e.currentTarget.dataset.obj;
    let carts = this.data.carts;
    let num = carts[index].num;
    if (num <= 1) {
      return false;
    }
    num = num - 1;
    carts[index].num = num;
    this.setData({
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
   * 计算总价
   */
  getTotalPrice() {
    let carts = this.data.carts;                  // 获取购物车列表
    let total = 0;
    for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
      if (carts[i].selected) {                     // 判断选中才会计算价格
        total += carts[i].num * carts[i].price;   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  }
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b

});