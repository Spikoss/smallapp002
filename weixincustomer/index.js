// pages/weixincustomer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weixin_content: [
      {
        id: 0,
        weixin_title: "之旅",
        weixin_des: "此活动是的一次活动，通过的形式宣传推广效果",
        weixin_images: ["https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4",
			"https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4", 
			"https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4"]
      },
      {
        id: 1,
        weixin_title: "最服饰",
        weixin_des: "此活动是为，推动旅游业发展",
        weixin_images: ["https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4",
			"https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4", 
			"https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4"]
      },
      {
        id: 2,
        weixin_title: "拼图游戏",
        weixin_des: "此拼图游戏是的小游戏，操作性强为主宣传推广的作用",
        weixin_images: ["https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4",
			"https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4", 
			"https://avatars2.githubusercontent.com/u/19703411?s=400&u=02a9a59df398a8334ab5c4e4c8152336bca30e96&v=4"]
      },
    ],

    indicatorDots: true,
    indicatorDotsBox: false,
    autoplay: false,
    interval: 1000,
    duration: 1000,
    //当前图标的id
    current: 0,
    // 切换界面的id
    currentTab: 0
  },

  /**
   * 切换tab
   */
  switchTab: function (opts) {
    this.setData({
      currentTab: opts.detail.current
    })
  },
  /**
   * 点击下一页   
   */
  nextPage: function (opts) {
    var cur = opts.target.dataset.current;
    console.log(cur + "current=======")

    if (this.data.currentTab >= 2) {
      this.setData({
        currentTab: 0
      })
      //return false;
    } else {
      this.setData({
        currentTab: cur + 1
      })

    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /**
       * 自适应屏幕高度
       */
      var that = this;
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            tabHeight: res.windowHeight           
          })
          }
      })
  
  }
})