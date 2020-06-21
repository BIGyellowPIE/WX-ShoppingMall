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
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let list = common.getProductList()
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

  }
})