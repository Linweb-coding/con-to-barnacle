Page({
  data: {
    phoneNumber: '13800000000' // 假设电话号码是这个
  },
  call() {
    // 拨打电话
    wx.makePhoneCall({
      phoneNumber: this.data.phoneNumber
    });
  },
  chat() {
    // 跳转到聊天页面
    wx.navigateTo({
      url: '/pages/chat/chat'
    });
  }
});