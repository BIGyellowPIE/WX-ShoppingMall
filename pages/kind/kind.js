var common = require('../../utils/common.js')
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList:[],
    productAll:[],
    classType:[]
  },
  
  searchTab(e){
    var p = this.data.productAll;
    var id = e.currentTarget.id;
    //console.log(id)
    //console.log(p)
    var list = [];
    for(var i = 0; i<p.length; i++){
      if(p[i][2]==id){
        list.push(p[i])
      }
    }
<<<<<<< HEAD
    //console.log(list)
=======
    this.setData({
      productList:list
    })
  },
  searchid(d)
  {
    var p=this.data.productAll;
    var id=d;
    var list=[];
    console.log(p.length);
    for(var i=0;i<p.length;i++)
    {
      if(p[i].classid==id)
      {
        list.push(p[i]);
      }
    }
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b
    this.setData({
      productList:list
    })
  },
  /*
  searchid(d)
  {
    var p=this.data.productAll;
    var id=d;
    var list=[];
    console.log(p.length);
    for(var i=0;i<p.length;i++)
    {
      if(p[i].classid==id)
      {
        list.push(p[i]);
      }
    }
    this.setData({
      productList:list
    })
  }, */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    let list = common.getProductList()
<<<<<<< HEAD
    wx.request({
      url: 'http://123.56.254.65:8100/get_detail',
      data: {},
      method: "GET",
      header: {},
      success: function (res) {
        //console.log(res.data);
        //console.log(typeof res.data[0][0])
        that.setData({
          productAll: res.data,
        })
      }
    });
    let tlist = common.getClassList()
    //console.log(tlist);
    that.setData({
      //productAll: list,
      classType: tlist
    })
=======
    let tlist=common.getClassList()
    console.log(options.name);
    this.setData({
      productAll: list,
      classType: tlist
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
>>>>>>> 89644cb00f706ecc9524328d5a3529f405798a2b

  },

})