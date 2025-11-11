Page({
  data: {
    // 可根据实际需求添加数据
  },
  callPhone() {
    // 拨打电话逻辑
    wx.makePhoneCall({
      phoneNumber: '10086' 
    })
  },
  openLocation() {
    // 打开地图定位逻辑
    wx.openLocation({
      latitude: 30.52, //门店纬度
      longitude: 114.31, // 门店经度
      name: '生鲜配送', // 门店名称
      address: '武昌望隆广场' // 门店详细地址
    })
  },
  goConsult() {
    // 点击“马上咨询”的逻辑
    wx.navigateTo({
      url: '/pages/user/biaodan' 
    })
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