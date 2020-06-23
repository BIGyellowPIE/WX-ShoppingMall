// pages/index/index.js
var common = require('../../utils/common.js')
var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
      {
        src: "http://img11.360buyimg.com/n7/jfs/t1/129529/29/4050/351819/5ed8568bEd0e2ca18/b723da7c3f642348.jpg",
       url:'/pages/detail/detail?name=689'},
      {
        src: "//img13.360buyimg.com/n7/jfs/t1/59845/20/821/329534/5cf078c7Ea3bdfd00/4bac89f788215c7a.jpg",
        url: '/pages/detail/detail?name=713' },
      {
        src: "//img10.360buyimg.com/n7/jfs/t17206/57/2548678252/361987/40364e8d/5afa3fdbNaf54fea8.jpg",
        url: '/pages/detail/detail?name=811'},
      {
        src: "//img14.360buyimg.com/n7/jfs/t21040/54/2099922208/146915/d73b689/5b458589N2e2e47f5.jpg",
        url: '/pages/detail/detail?name=892' },
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