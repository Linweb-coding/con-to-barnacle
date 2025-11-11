Page({
  data: {
    tabList: ['全部', '待支付', '进行中', '已完成', '已取消', '售后中'],
    currentTab: 0, // 默认选中“全部”
    orderList: [
      {
        orderId: '20171027',
        status: '待支付',
        statusClass: 'pending-pay',
        serviceName: '小程序服务（示例数据）',
        serviceDesc: '专业提供微信小程序管理、设计服务',
        price: '0.1',
        originalPrice: '1',
        actions: [
          { text: '取消订单', action: 'cancel', btnClass: 'cancel-btn' },
          { text: '去支付', action: 'pay', btnClass: 'pay-btn' }
        ]
      },
      {
        orderId: '20171028',
        status: '进行中(微信支付)',
        statusClass: 'in-progress',
        serviceName: '小程序服务（示例数据）',
        serviceDesc: '专业提供微信小程序管理、设计服务',
        price: '0.1',
        originalPrice: '1',
        actions: [
          { text: '取消订单', action: 'cancel', btnClass: 'cancel-btn' }
        ]
      },
      {
        orderId: '20171029',
        status: '退款中',
        statusClass: 'refund-ing',
        serviceName: '小程序服务（示例数据）',
        serviceDesc: '专业提供微信小程序管理、设计服务',
        price: '0.1',
        originalPrice: '1',
        actions: []
      },
      {
        orderId: '20171030',
        status: '已完成',
        statusClass: 'completed',
        serviceName: '生鲜配送服务',
        serviceDesc: '新鲜蔬果配送到家',
        price: '20.0',
        originalPrice: '25.0',
        actions: []
      },
      {
        orderId: '20171031',
        status: '已取消',
        statusClass: 'cancelled',
        serviceName: '家政服务预约',
        serviceDesc: '家庭清洁服务预约',
        price: '0.0',
        originalPrice: '50.0',
        actions: []
      },
      {
        orderId: '20171101',
        status: '售后中',
        statusClass: 'after-sales',
        serviceName: '电子产品维修服务',
        serviceDesc: '手机屏幕更换服务',
        price: '80.0',
        originalPrice: '100.0',
        actions: []
      }
    ],
    filteredOrderList: []
  },

  onLoad(options) {
    const status = options.status;
    if (status) {
      const filteredOrders = this.data.orderList.filter(order => order.status.includes(status));
      this.setData({
        filteredOrderList: filteredOrders,
        currentTab: this.data.tabList.indexOf(status)
      });
    } else {
      this.setData({
        filteredOrderList: this.data.orderList
      });
    }
  },

  // 切换顶部标签
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentTab: index
    });
    const status = this.data.tabList[index];
    if (status === '全部') {
      this.setData({
        filteredOrderList: this.data.orderList
      });
    } else {
      const filteredOrders = this.data.orderList.filter(order => order.status.includes(status));
      this.setData({
        filteredOrderList: filteredOrders
      });
    }
  },

  // 处理订单操作（取消、支付等）
  handleAction(e) {
    const orderId = e.currentTarget.dataset.orderid;
    const action = e.currentTarget.dataset.action;
    if (action === 'cancel') {
      // 执行取消订单逻辑，如调用接口
      wx.showToast({
        title: '取消订单成功',
        icon: 'none'
      });
      // 可更新订单列表状态
    } else if (action === 'pay') {
      // 执行支付逻辑，如调起支付接口
      wx.showToast({
        title: '支付成功',
        icon: 'none'
      });
      // 可更新订单列表状态
    }
  }
});