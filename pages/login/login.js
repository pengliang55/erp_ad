// pages/login/login.wxml.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
    yqForm:{},
    erpForm:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pagechange:function(e){
      if ("touch" === e.detail.source) {
        let currentPageIndex = this.data.currentIndex;
        currentPageIndex = (currentPageIndex + 1) % 2;
        this.setData({
          currentIndex: currentPageIndex
        })
      }
    },
    titleClick:function(e){
      let currentPageIndex = this.data.currentIndex ? 0 : 1;
        this.setData({
          currentIndex: currentPageIndex
        })
    },
    formSubmityq:function(){

    },
    formSubmiterp:function(){

    }
  }
})
