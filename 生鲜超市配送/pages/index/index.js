Page({
  data: {
    goodsList: [
      {
        id: 1,
        img: "http://8.138.84.102/images/xiangjiao.png",
        name: "菲律宾进口超甜蕉700g",
        price: "¥10.90"
      },
      {
        id: 2,
        img: "http://8.138.84.102/images/beaf.png",
        name: "生鲜套餐家庭进口牛扒...",
        price: "¥128.66" 
      },
      {
        id: 3,
        img: "http://8.138.84.102/images/xihongshi.png",
        name: "新鲜西红柿",
        price: "¥13.08" 
      },
      {
        id: 4,
        img: "http://8.138.84.102/images/yumi.png",
        name: "甜玉米",
        price: "¥11.22" 
      }
    ],
    themeList: [
      {
        imgUrl: 'http://8.138.84.102/images/mangguo.jpg', 
        title: '芒果'
      },
      {
        imgUrl: 'http://8.138.84.102/images/shuimitao.jpg',
        title: '水蜜桃'
      },
      {
        imgUrl: 'http://8.138.84.102/images/xianggua.jpg', 
        title: '香瓜'
      },
      {
        imgUrl: 'http://8.138.84.102/images/yangmei.jpg',
        title: '杨梅'
      },
      {
        imgUrl: 'http://8.138.84.102/images/li.jpg', 
        title: '梨'
      },
      {
        imgUrl: 'http://8.138.84.102/images/hamigua.jpg', 
        title: '哈密瓜'
      }
    ]
  },
  handleOrder() {
    wx.switchTab({
      url: '/pages/peisong/peisong',
    });
  },
  goToEnvPage() {
    wx.navigateTo({
      url: '/pages/index/huanjing'
    });
  },
  goToBooking() {
    // 跳转到预约界面
    wx.switchTab({
      url: '/pages/booking/booking',
      success: function(res) {
        console.log('跳转成功', res);
      },
      fail: function(err) {
        console.error('跳转失败', err);
      }
    });
  },
  makeCall() {
    // 拨打电话逻辑，需先配置权限等，
    wx.makePhoneCall({phoneNumber: '10086'})
    wx.showToast({title: '拨打电话', icon: 'none'});
  }
})