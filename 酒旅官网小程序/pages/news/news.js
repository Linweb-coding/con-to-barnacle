Page({
  data: {
    // 文章列表数据
    articleList: [
      {
        title: '避世好去处，这些藏在山谷中的宝藏民宿不可错过！',
        desc: '贵州竟然有这样治愈的新晋好去处，还未走...',
        date: '2024-05-06',
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg4pHisQYo77KXowQwygI4yAFAZQ.png'  // 对应图片路径
      },
      {
        title: '新晋爆火民宿盘点，适宜打卡高颜值森系旅行地',
        desc: '民宿位于望仙谷，融于自然，悄然立于山涧...',
        date: '2024-05-06',
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg4pHisQYo26WctwcwygI4yAFAZQ.png'
      },
      {
        title: '这些颜值爆表的民宿，才是旅行该有的样子！',
        desc: '在洞头这处世外桃源般的海岛之上，有一座...',
        date: '2024-05-06',
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg4pHisQYo4KGT6AYwygI4yAFAZQ.png'
      },
      {
        title: '绝民宿盘点，与你相约在美好的仲夏夜！',
        desc: '“一生痴绝处，无梦到徽州”，中国的“莎...',
        date: '2024-05-06',
        imgUrl: 'https://3622616.s81i.faiusr.com/4/101/AFEI2I3dARAEGAAg4ZHisQYosq-HygMwygI4yAFAZQ.png'
      }
    ]
  },
  call() {
    wx.makePhoneCall({
      phoneNumber: '138000000000'  // 替换为实际电话号码
    });
  },
  chat() {
    // 这里可添加调起客服聊天功能代码，比如wx.openCustomerServiceChat()等
    wx.showToast({
      title: '暂未开通聊天功能',
      icon: 'none'
    });
  },
  goToArticleDetail(e) {
    const articleId = e.currentTarget.dataset.id;
    wx.navigateTo({
      // 修改为正确的跳转路径
      url: `/pages/news/articleDetail?id=${articleId}` 
    });
  }
});