Page({
  data: {
    // 可在这里定义数据，如动态消息内容等
  },
  onLoad() {
    // 页面加载时的逻辑，比如请求数据
  },
  goHome() {
    // 跳转首页逻辑，
    wx.switchTab({url: '/pages/index/index'}) 
    wx.showToast({title: '跳转首页', icon: 'none'});
  },
  makeCall() {
    // 拨打电话逻辑，需先配置权限等，
    wx.makePhoneCall({phoneNumber: '10086'})
    wx.showToast({title: '拨打电话', icon: 'none'});
  }
})