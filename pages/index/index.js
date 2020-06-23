// pages/index/index.js
var common = require('../../utils/common.js')
var that;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperImg: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
      { src: "https://m.360buyimg.com/babel/jfs/t1/142516/38/996/94361/5eec5797E28a59e99/6ecfdecd80d51b23.jpg",
       url:'/pages/detail/detail?name=5894'},
>>>>>>> glare-ni
      {
        src: "http://img11.360buyimg.com/n7/jfs/t1/129529/29/4050/351819/5ed8568bEd0e2ca18/b723da7c3f642348.jpg",
       url:'/pages/detail/detail?name=689'},
      {
        src: "//img13.360buyimg.com/n7/jfs/t1/59845/20/821/329534/5cf078c7Ea3bdfd00/4bac89f788215c7a.jpg",
        url: '/pages/detail/detail?name=713' },
      {
<<<<<<< HEAD
        src: "//img10.360buyimg.com/n7/jfs/t17206/57/2548678252/361987/40364e8d/5afa3fdbNaf54fea8.jpg",
        url: '/pages/detail/detail?name=811'},
      {
        src: "//img14.360buyimg.com/n7/jfs/t21040/54/2099922208/146915/d73b689/5b458589N2e2e47f5.jpg",
        url: '/pages/detail/detail?name=892' },
=======
        src: "https://m.360buyimg.com/babel/jfs/t1/116049/6/10247/53453/5ee96c5cE60cd2147/977d9e815a5bc4d5.jpg",
        url: '/pages/detail/detail?name=5894' },
=======
      { src: "http://image1.chinanews.com.cn/cnsupload/big/2019/10-01/4-426/a7e426b0dd6c43d2bc710fafe810a0d5.jpg" },
      { src: "http://i2.chinanews.com/simg/cmshd/2019/10/05/998e12aa71f248d4a797761b18e48418.jpg" },
      { src: "http://i2.chinanews.com/simg/cmshd/2019/10/01/c5391220f28d49bdbd14c58a4300bde0.jpg" }
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
>>>>>>> glare-ni
    ],
    productList:[],
    navList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that=this
<<<<<<< HEAD
    //let list = common.getProductList()
=======
    let list = common.getProductList()
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
    let list1= common.getClassList()
    this.setData({
      //productList:list,
      navList: list1
    })
    wx.request({
<<<<<<< HEAD
      url: 'http://123.56.254.65:8100/get_detail',
=======
      url: 'http://123.56.254.65:8100/productlist',
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
      data: {},
      method: "GET",
      header: {},
      success: function (res) {
<<<<<<< HEAD
        console.log(res.data);
        //console.log(typeof res.data[0][0])
=======
        //console.log(res.data);
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
        that.setData({
          productList: res.data,
        })
      }
    });
<<<<<<< HEAD
    /* function getProductList() {
=======
    function getProductList() {
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
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
<<<<<<< HEAD
    } */
=======
    }
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
  },
})