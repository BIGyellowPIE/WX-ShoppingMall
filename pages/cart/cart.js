Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalprice:0, //总价，初始为0
    productList: [], //购物车列表
    hasList: false, //列表是否有数据
    selectAllStatus: true, //全选状态，默认全选
    carts: [],
    //number:0,//商品数量
  },
  //获取商品列表,计算总价
  getCart: function () {
    let info = wx.getStorageInfoSync()
    let keys = info.keys
    let num = keys.length

    let myCart = [];
    for (var i = 0; i < num; i++) {
      let obj = wx.getStorageSync(keys[i])
      //console.log(obj)
      myCart.push(obj)
    }
    //console.log(myCart)
    this.setData({
      carts: myCart,
      hasList: true
    });
    this.getTotalPrice();
  },
  /**
   * 生命周期函数--监听页面显示
   */
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

  /**
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
      carts: carts
    });
    this.getTotalPrice();
  },

  /**
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
      if (carts[i][16]) {                     // 判断选中才会计算价格
        total += carts[i][3] * carts[i][15];   // 所有价格加起来
      }
    }
    this.setData({                                // 最后赋值到data中渲染到页面
      carts: carts,
      totalPrice: total.toFixed(2)
    });
  }

});