Page({
  data: {
    avatarUrl: 'http://8.138.84.102/images/head.png', // 默认头像路径
    orderStatusList: [
      { icon: '/images/pay.png', badge: 1, text: '待支付' },
      { icon: '/images/ing.png', badge: 3, text: '进行中' },
      { icon: '/images/complete.png', text: '已完成' },
      { icon: '/images/cancel.png', text: '已取消' },
      { icon: '/images/aftersales.png', text: '售后中' }
    ],
    newMessageCount: 1,
    phoneNumber: '13800000000'
  },
  goToLogin() {
    // 跳转到登录页面
    wx.navigateTo({
      url: '/pages/login/login'
    });
  },
  goToOrders(e) {
    const status = e.currentTarget.dataset.status;
    // 跳转到订单列表页并传参
    wx.navigateTo({
      url: `/pages/user/order?status=${status}`
    });
  },
  goToMessages() {
    // 跳转到消息页面
    wx.navigateTo({
      url: '/pages/user/news'
    });
  },
  goToSubscriptions() {
    // 跳转到订阅页面
    wx.navigateTo({
      url: '/pages/user/subscriptions'
    });
  },
  goToForms() {
    // 跳转到表单页面
    wx.navigateTo({
      url: '/pages/user/biaodan'
    });
  },
  goToCollections() {
    // 跳转到收藏页面
    wx.navigateTo({
      url: '/pages/user/collections'
    });
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
  },
  logout() {
    // 调用接口清除登录状态，这里简单示例
    wx.showToast({
      title: '退出成功',
      icon: 'none'
    });
    // 跳转到首页等其他操作
    wx.switchTab({
      url: '/pages/index/index'
    });
  },
  goToAllOrders() {
    wx.navigateTo({
      url: '/pages/user/order'
    });
  }
});