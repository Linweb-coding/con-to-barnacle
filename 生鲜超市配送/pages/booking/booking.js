Page({
  data: {
    currentTab: 0, // 默认选中“全部”
    goodsList: [
      // 全部商品（按 tab 索引：0=全部，1=肉类，2=水果，3=蔬菜）
      [
        {
          id: 1,
          image: 'http://8.138.84.102/images/xiangjiao.png', 
          title: '菲律宾进口超甜蕉700g',
          desc: '百分百进口 香甜可口',
          price: 10.90,
          reserved: 115,
          remaining: 241,
          tag: '' // 无促销标签
        },
        {
          id: 2,
          image: 'http://8.138.84.102/images/beaf.png', 
          title: '生鲜套餐家庭进口牛扒12片',
          desc: '百分百新鲜进口 带给您不一样的口感',
          price: 268.00,
          originalPrice: 288.00,
          reserved: 20,
          remaining: 289,
          tag: '促' // 促销标签
        },
        {
          id: 3,
          image: 'http://8.138.84.102/images/xihongshi.png', // 替换为真实西红柿图片 URL
          title: '攀枝花米易沙瓤西红柿2.5kg',
          desc: '无农药种植 香甜可口',
          price: 20.90,
          originalPrice: 40.90,
          reserved: 19,
          remaining: 298,
          tag: '' // 无促销标签
        }
      ],
      [/* 肉类商品（仅牛排） */
        {
          id: 2,
          image: 'http://8.138.84.102/images/beaf.png',
          title: '生鲜套餐家庭进口牛扒12片',
          desc: '百分百新鲜进口 带给您不一样的口感',
          price: 268.00,
          originalPrice: 288.00,
          reserved: 20,
          remaining: 289,
          tag: '促'
        }
      ],
      [/* 水果商品（仅香蕉） */
        {
          id: 1,
          image: 'http://8.138.84.102/images/xiangjiao.png',
          title: '菲律宾进口超甜蕉700g',
          desc: '百分百进口 香甜可口',
          price: 10.90,
          reserved: 115,
          remaining: 241,
          tag: ''
        }
      ],
      [/* 蔬菜商品（仅西红柿） */
        {
          id: 3,
          image: 'http://8.138.84.102/images/xihongshi.png',
          title: '攀枝花米易沙瓤西红柿2.5kg',
          desc: '无农药种植 香甜可口',
          price: 20.90,
          originalPrice: 40.90,
          reserved: 19,
          remaining: 298,
          tag: ''
        }
      ]
    ]
  },

 // 立即预约按钮事件
 handleReserve(e) {
  const id = e.currentTarget.dataset.id;
  // 跳转到商品详情页并传递商品 ID
  wx.navigateTo({
    url: `/pages/booking/detail?id=${id}`
  });
},
 // 切换 tab 的函数
 switchTab(e) {
  const index = e.currentTarget.dataset.index;
  this.setData({
    currentTab: index
  });
}
})