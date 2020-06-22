var common = require('../../utils/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productList:[],
    productAll:[],
    classType:[]
  },
  /*
  searchTab(e){
    var p = this.data.productAll;
    var id = e.currentTarget.id;
    var list = [];
    for(var i = 0; i<p.length; i++){
      if(p[i].classid==id){
        list.push(p[i])
      }
    }
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
    this.setData({
      productList:list
    })
  }, */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getProductList()
    wx.request({
      url: 'http://123.56.254.65:8100/getdetails',
      data: {},
      method: "GET",
      header: {},
      success: function (res) {
        //console.log(res.data);
        //console.log(typeof res.data[0][0])
        that.setData({
          //productAll: res.data,
        })
      }
    });
    //console.log(tlist);
    let tlist = common.getClassList()
    this.setData({
      productAll: list,
      classType: tlist
    })

  },

})