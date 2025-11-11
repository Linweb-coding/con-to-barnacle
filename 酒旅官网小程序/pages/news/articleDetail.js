Page({
  data: {
    article: {},
    noCommentText: '暂无评论，快来评论吧！',
    commentInput: ''
  },

  onLoad(options) {
    const articleId = options.id;
    this.getArticleDetail(articleId);
  },

  getArticleDetail(id) {
    // 模拟从服务器获取文章详情
    const articleList = [
      {
        id: 0,
        title: '避世好去处，这些藏在山谷中的宝藏民宿不可错过！',
        date: '2024-05-06',
        readCount: 26,
        content: `<div style="font-size:28rpx;line-height:1.8;color:#333;">
          <p>贵州竟然有这样治愈的新晋好去处，还未走进民宿，映入眼帘的便是一株株守护陆家寨村千年的古榕树和一座座长满青苔的青石古桥，仿佛在述说着时光洪流里被遗忘的那些或悲或喜的故事。</p>
          <p>这里有整片的枫叶林，400年的古榕树，小桥流水，古溶洞，梯田，花海，竹林环绕，在静谧的古村落拥抱自然。</p>
          <p>枕山河峡谷野奢度假民宿隐世于风景如画的峡谷里，依山而建，背靠青山，与自然融为一体，我们在民宿自种5亩地的向日葵，推门就是连绵起伏的峡谷和花海。</p>
          <p>在这里岁月流逝变得缓慢，时光的菱角都变得温柔，回归田园生活，醒来看见铺了薄雾的山景，体会悠然见南山的真谛。</p>
          <p>建议在这里住两天，体验别样的山野生活，早晨起床伴着鸟鸣，呼吸新鲜空气。</p>
          <p>在这里可以吃到本地的土鸡、乌洋芋、本地自种小菜，农户家新打的红米、河虾、野味鱼、农户种的甘蔗。</p>
          <p>关于娱乐：星空电影、泳池、求婚、生日派对，旅拍、围炉煮茶。</p>
          <p>周边玩乐推荐：逛古村落、溪边垂钓、峡谷河流徒步、越野车骑行，看枫叶林、早晨起床看云瀑。</p>
        </div>`
      },
      {
        id: 1,
        title: '新晋爆火民宿盘点，适宜打卡高颜值森系旅行地',
        date: '2024-05-06',
        readCount: 26,
        content: `<div style="font-size:28rpx;line-height:1.8;color:#333;">
          <p>民宿位于望仙谷，融于自然，悄然立于山涧，周围景色优美，空气清新。</p>
          <p>这里的建筑风格独特，充满了自然的气息，让人仿佛置身于童话世界中。</p>
          <p>房间布置温馨舒适，设施齐全，为游客提供了良好的住宿体验。</p>
          <p>周边还有许多好玩的地方，如徒步小径、瀑布等，适合喜欢户外活动的游客。</p>
        </div>`
      },
      {
        id: 2,
        title: '这些颜值爆表的民宿，才是旅行该有的样子！',
        date: '2024-05-06',
        readCount: 26,
        content: `<div style="font-size:28rpx;line-height:1.8;color:#333;">
          <p>在洞头这处世外桃源般的海岛之上，有一座颜值爆表的民宿，它的外观设计独特，与周围的自然环境融为一体。</p>
          <p>民宿内部装修精致，每一个细节都彰显着品质和品味。</p>
          <p>在这里，你可以欣赏到美丽的海景，感受到海风的吹拂，让身心得到彻底的放松。</p>
          <p>此外，民宿还提供了各种丰富的活动，如海上冲浪、海钓等，让你的旅行更加丰富多彩。</p>
        </div>`
      },
      {
        id: 3,
        title: '绝民宿盘点，与你相约在美好的仲夏夜！',
        date: '2024-05-06',
        readCount: 26,
        content: `<div style="font-size:28rpx;line-height:1.8;color:#333;">
          <p>“一生痴绝处，无梦到徽州”，中国的“莎士比亚”汤显祖曾如此赞美徽州。在徽州的仲夏夜，有一些绝美的民宿等待着你的到来。</p>
          <p>这些民宿充满了徽派建筑的特色，白墙黑瓦，错落有致，让人仿佛穿越回了古代。</p>
          <p>夜晚，你可以在民宿的庭院中纳凉，欣赏着星空，感受着夏夜的宁静和美好。</p>
          <p>周边还有许多古村落和景点，如宏村、西递等，让你在旅行中领略到徽州的历史文化和自然风光。</p>
        </div>`
      }
    ];

    const article = articleList.find(item => item.id === parseInt(id));
    if (article) {
      this.setData({
        article
      });
    }
  },

  goBack() {
    wx.navigateBack();
  },

  call() {
    wx.makePhoneCall({
      phoneNumber: '13800000000'
    });
  },

  chat() {
    wx.showModal({
      title: '联系客服',
      content: '客服功能即将上线，敬请期待！',
      showCancel: false
    });
  },

  likeArticle() {
    wx.showToast({
      title: '点赞成功',
      icon:'success',
      duration: 1500
    });
  },

  commentArticle() {
    wx.showModal({
      title: '评论功能',
      content: '评论功能即将上线，敬请期待！',
      showCancel: false
    });
  },

  shareArticle() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage','shareTimeline']
    });
  },

  inputChange(e) {
    this.setData({
      commentInput: e.detail.value
    });
  },
  postComment() {
    const comment = this.data.commentInput;
    if (comment.trim() === '') {
      wx.showToast({
        title: '评论不能为空',
        icon: 'none'
      });
      return;
    }
    // 这里需要替换为实际向服务器发送评论请求的代码
    wx.showToast({
      title: '评论提交成功',
      icon:'success'
    });
    // 清空输入框
    this.setData({
      commentInput: ''
    });
  }
});