// pages/index/index.js
var common = require('../../utils/common.js')
var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      { src: "https://m.360buyimg.com/babel/jfs/t1/142516/38/996/94361/5eec5797E28a59e99/6ecfdecd80d51b23.jpg" },
      { src: "https://m.360buyimg.com/babel/jfs/t1/122328/6/4707/114253/5ee332f4Efc0a512a/9f6f3fbfcd4b7e45.jpg" },
      { src: "https://m.360buyimg.com/babel/jfs/t1/110749/14/13028/95358/5eeb42cbEb7526a42/15e1f7cd2d8f49e8.jpg" },
      { src: "https://m.360buyimg.com/babel/jfs/t1/116049/6/10247/53453/5ee96c5cE60cd2147/977d9e815a5bc4d5.jpg" },
    ],
    productList:[],
    navList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this
    //let list = common.getProductList()
    let list1= common.getClassList()
    this.setData({
      //productList:list,
      navList: list1
    })
    wx.request({
      url: 'http://123.56.254.65:8100/get_detail',
      data: {},
      method: "GET",
      header: {},
      success: function (res) {
        console.log(res.data);
        //console.log(typeof res.data[0][0])
        that.setData({
          productList: res.data,
        })
      }
    });
    /* function getProductList() {
      let list = [];
      for (var i = 0; i < productList.length; i++) {
        let obj = {};
        obj.id = productList[i].id;
        obj.name = productList[i].name;
        obj.price = productList[i].price;
        obj.src = productList[i].src;
        obj.classid = productList[i].classid;
        list.push(obj);
      }
      return list;
    } */
  },
})