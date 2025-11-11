Page({
  data: {
    themeList: [
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAgg43isQYonPjVngMw4AE4sQFAZQ.png', 
        title: '治愈海景'
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAgt47isQYo-MbBgwUw4AE4sQFAZQ.png',
        title: '悠然山居'
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAgvo7isQYogKbX7wcw4AE4sQFAZQ.png', 
        title: '天然温泉'
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAgxo7isQYo5u2M2QUw4AE4sQFAZQ.png',
        title: '宝藏营地'
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAgz47isQYoyNfj0QYw4AE4sQFAZQ.png', 
        title: '亲子出游'
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg3I7isQYooMfXxAMw4AE4sQFAZQ.png', 
        title: '宠物游'
      }
    ],
    premiumList: [
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/2/101/AFEI2I3dARACGAAg0ZLisQYogNWAzAEw7gU47gVAZQ.jpg',
        title: '绝美海景房民宿',
        desc: '回归自然，聆听海的声音，看全海景+日出+日落',
        price: 990,
        originalPrice: 1100,
        bookedNum: 0,
        discount: true
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/2/101/AFEI2I3dARACGAAggJPisQYowImnggUw7gU47gVAZQ.jpg',
        title: '悠闲古镇乡村民宿',
        desc: '',
        price: 445,
        originalPrice: 600,
        bookedNum: 0,
        discount: true
      },
    ],
    strategyList: [
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg4ZHisQYosq-HygMwygI4yAFAZQ.png',
        title: '绝美民宿盘点，与你相约在美好的仲夏夜！'
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg4pHisQYo4KGT6AYwygI4yAFAZQ.png',
        title: '这些颜值爆表的民宿，才是旅行该有的样子！'
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg4pHisQYo26WctwcwygI4yAFAZQ.png',
        title: '新晋爆火民宿盘点，适宜打卡高颜值森系旅行地'
      },
      {
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg4pHisQYo77KXowQwygI4yAFAZQ.png',
        title: '避世好去处，这些藏在山谷中的宝藏民宿不可错过！'
      }
    ]
  },
  navigateToReservation() {
    wx.switchTab({
      url: '/pages/booking/booking',
      success: function(res) {
        console.log('跳转成功', res);
      },
      fail: function(err) {
        console.log('跳转失败', err);
      }
    });
  },
  navigateToStrategy() {
    wx.switchTab({
      url: '/pages/news/news',
      success: function(res) {
        console.log('跳转成功', res);
      },
      fail: function(err) {
        console.log('跳转失败', err);
      }
    });
  },
  navigateToPremium() {
    wx.switchTab({
      url: '/pages/booking/booking',
      success: function(res) {
        console.log('跳转成功', res);
      },
      fail: function(err) {
        console.log('跳转失败', err);
      }
      
    });
  },
  navigateToDiscount() {
    wx.switchTab({
      url: '/pages/booking/booking',
      success: function(res) {
        console.log('跳转成功', res);
      },
      fail: function(err) {
        console.log('跳转失败', err);
      }
    });
  },
  navigateToThemeDetail(e) {
    const index = e.currentTarget.dataset.index;
    const theme = this.data.themeList[index];
    wx.navigateTo({
      url: `/pages/themeDetail/themeDetail?title=${theme.title}&imgUrl=${theme.imgUrl}`
    });
  },
  navigateToHomestayDetail(e) {
    const index = e.currentTarget.dataset.index;
    const homestay = this.data.premiumList[index];
    wx.navigateTo({
      url: `/pages/homestayDetail/homestayDetail?imgUrl=${homestay.imgUrl}&title=${homestay.title}&desc=${homestay.desc}&price=${homestay.price}&originalPrice=${homestay.originalPrice}&bookedNum=${homestay.bookedNum}`
    });
  },
  reserveHomestay() {
    // 预约逻辑，可调用后端接口
    wx.showToast({
      title: '预约成功',
      icon: 'none'
    });
  },
  swiperChange(e) {
    console.log('当前轮播图索引:', e.detail.current);
  },
  navigateToStrategyDetail(e) {
    const index = e.currentTarget.dataset.index;
    const strategy = this.data.strategyList[index];
    wx.navigateTo({
      url: `/pages/strategyDetail/strategyDetail?title=${strategy.title}&imgUrl=${strategy.imgUrl}`
    });
  }
});