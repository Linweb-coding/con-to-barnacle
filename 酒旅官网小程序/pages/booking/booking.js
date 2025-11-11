Page({
  data: {
    activeTab: 'all'
  },
  onLoad() {
    const eventChannel = this.getOpenerEventChannel();
    if (eventChannel) {
      eventChannel.on('switchToHomestay', () => {
        this.setData({
          activeTab: 'homestay'
        });
      });
    }
  },
  switchTab: function (e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },
  navigateToDetail: function (e) {
    const url = e.currentTarget.dataset.url;
    // 这里简单打印跳转标识，实际需替换为wx.navigateTo等跳转方法
    console.log(`跳转到${url}详情页`); 
  }
})