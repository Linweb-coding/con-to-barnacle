Page({
  data: {
    avatarUrl: '/images/default-avatar.png', // 默认头像路径
    orderStatusList: [
      { icon: '/images/unpaid-icon.png', badge: 1, text: '待支付' },
      { icon: '/images/in-progress-icon.png', badge: 3, text: '进行中' },
      { icon: '/images/complete-icon.png', text: '已完成' },
      { icon: '/images/canceled-icon.png', text: '已取消' },
      { icon: '/images/after-sale-icon.png', text: '售后中' }
    ],
    icon:'/images/phone-icon.png',
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
    const type = e.currentTarget.dataset.type;
    // 跳转到订单列表页并传参
    wx.navigateTo({
      url: `/pages/orders/orders?type=${type}`
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
  }
});