// pages/booking/detail.js
Page({
  data: {
    allGoodsDetails: [
      {
        id: 1,
        image: 'http://8.138.84.102/images/xiangjiao.png',
        title: '菲律宾进口超甜蕉700g',
        desc: '百分百进口 香甜可口',
        price: 10.90,
        reserved: 115,
        remaining: 241,
        tag: '',
        serviceDesc: '香蕉（学名：Musa nana Lour.）芭蕉科芭蕉属植物，又指其果实。热带地区广泛栽培食用。香蕉味香、富含营养，终年可收获，在温带地区也很受重视。植株为大型草本，从根状茎发出，由叶鞘下部形成高3～6公尺 (10～20尺)的假杆；叶长圆形至椭圆形，有的长达3～3.5 公尺(10～11.5尺)，宽65公分(26寸)，10～20枚簇生茎顶。穗状花序下垂 ，由假杆顶端抽出，花多数，淡黄色；果序弯垂，结果10～20串，约50～150个。植株结果后枯死，由根状茎长出的吸根继续繁殖，每一根株 活多年。原产亚洲东南部：台湾、海南、广东、广西等地区均有栽培。'
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
        tag: '促',
        serviceDesc: '牛排，或称牛扒，是块状的牛肉，是西餐中常见的食物之一。牛排的烹调方法以煎和烧烤为主。欧洲中世纪时，猪肉及羊肉是平民百姓的食用肉，牛肉则是公们的肉品，尊贵的牛肉被他们搭配上了当时也是享有尊贵身份的胡椒及香辛料一起烹调，并在特殊场合中供应，以彰显主人的尊贵身份。清末小说中已出现「牛排」、「猪排」等西菜菜名，可能是因形似上海「大排」（猪丁骨），故名「排」。而在上海话里，「排」发[ba]音，广东又作牛扒。'
      },
      {
        id: 3,
        image: 'http://8.138.84.102/images/xihongshi.png',
        title: '攀枝花米易沙瓤西红柿2.5kg',
        desc: '无农药种植 香甜可口',
        price: 20.90,
        originalPrice: 40.90,
        reserved: 19,
        remaining: 298,
        tag: '',
        serviceDesc: '番茄，即西红柿（学名：Lycopersicon esculentum Mill.），是茄科番茄属一年生或多年生草本植物，体高0.6-2米，全体生粘质腺毛，有强烈气味，茎易倒伏，叶羽状复叶或羽状深裂，花序总梗长2-5厘米，常3-7朵花，花萼辐状，花冠辐状，浆果扁球状或近球状，肉质而多汁液，种子黄色，花果期夏秋季。番茄原产南美洲，中国南北方广泛栽培。番茄的果实营养丰富，具特殊风味。可以生食、煮食、加工番茄酱、汁或整果罐藏。'
      }
    ],
    currentGoodsId: 0,
    currentGoods:1
  },
  onLoad(options) {
    const id = parseInt(options.id);
    console.log('当前商品ID:', id);
    
    // 查找当前商品详情
    const currentGoods = this.data.allGoodsDetails.find(item => item.id === id);
    console.log('当前商品详情:', currentGoods);
    
    if (currentGoods) {
      this.setData({
        currentGoodsId: id,
        currentGoods: currentGoods
      });
    } else {
      // 如果找不到商品，显示错误信息
      wx.showToast({
        title: '商品不存在',
        icon: 'none',
        duration: 2000
      });
    }
  },
  callPhone() {
    wx.makePhoneCall({
      phoneNumber: '10086'
    });
  },
  handleReserve() {
    wx.showToast({
      title: '预约成功',
      icon: 'success',
      duration: 2000
    });
  }
});