//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/1.jpg',
      '/images/1.jpg',
      '/images/1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    beforeColor:'rgba(255, 255, 255, .3)',
    afterColor: 'white'
  },
  //事件处理函数
  honorTap: function() {
    wx.navigateTo({
      url: '../honor/honor'
    })
  },
  kehuTap: function() {
    wx.navigateTo({
      url: '../honor/honor'
    })
  },
  aboutTap: function() {
    wx.navigateTo({
      url: '../company_info/company_info'
    })
  },
  zhkjTap: function() {
    wx.navigateTo({
      url: '../zhkj/zhkj'
    })
  },
  erpTap: function() {
    wx.navigateTo({
      url: '../p_sy/p_sy'
    })
  },
  onLoad: function () {
    
  }
})
