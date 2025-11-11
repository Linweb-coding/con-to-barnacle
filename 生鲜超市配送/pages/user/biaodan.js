Page({
  data: {
    currentPage: 0, // 当前页码（0: 第1页，1: 第2页）
    singleText: '',
    radioValue: '选项一',
    checkValues: ['选项一', '选项二'],
    multiText: '拖拽式，3分钟制作专属小程序',
    fileMsg: '',
    fileType: '',
    tempFilePath: '',
    dateTime: '2019.5.1',
    phone: '13000000000',
    selectorRange: ['选项一', '选项二', '选项三'],
    selectorIndex: 0,
    region: ['xxx省', 'xxx市', 'xxx县'],
    location: 'xxx省xxx市xxx县xxx路xxx号',
    email: 'xxx@123.com',
    idCard: '123456789012345678',
    star: 5, // 星级评分（1 - 5）
    touchStar: 0 // 触摸时的临时星级
  },

  // 单行文本输入
  onSingleTextChange(e) {
    this.setData({ singleText: e.detail.value });
  },

  // 单选按钮切换
  onRadioChange(e) {
    this.setData({ radioValue: e.detail.value });
  },

  // 多选按钮切换
  onCheckboxChange(e) {
    this.setData({ checkValues: e.detail.value });
  },

  // 多行文本输入
  onMultiTextChange(e) {
    this.setData({ multiText: e.detail.value });
  },

  // 选择文件（图片/视频）
  chooseFile() {
    wx.chooseMedia({
      count: 1,
      mediaType: ['image', 'video'],
      success: (res) => {
        const { type, tempFilePath } = res.tempFiles[0];
        this.setData({
          fileMsg: `${type === 'image' ? '图片' : '视频'}上传成功，点击预览`,
          fileType: type,
          tempFilePath,
        });
      },
    });
  },

  // 日期选择
  onDateChange(e) {
    const date = e.detail.value.replace(/-/g, '.'); // 转成“2019.5.1”格式
    this.setData({ dateTime: date });
  },

  // 手机号输入
  onPhoneChange(e) {
    this.setData({ phone: e.detail.value });
  },

  // 下拉选项切换
  onSelectorChange(e) {
    this.setData({ selectorIndex: e.detail.value });
  },

  // 省市区选择
  onRegionChange(e) {
    this.setData({ region: e.detail.value });
  },

  // 选择地理位置
  chooseLocation() {
    wx.chooseLocation({
      success: (res) => {
        this.setData({ location: res.address });
      },
    });
  },

  // 邮箱输入
  onEmailChange(e) {
    this.setData({ email: e.detail.value });
  },

  // 身份证号输入
  onIdCardChange(e) {
    this.setData({ idCard: e.detail.value });
  },

  // 星级评分点击
  onStarClick(e) {
    const star = e.currentTarget.dataset.star;
    this.setData({
      star,
      touchStar: 0 // 点击后重置触摸临时星级
    });
  },

  // 星级评分触摸开始
  onStarTouchStart(e) {
    const star = e.currentTarget.dataset.star;
    this.setData({ touchStar: star });
  },

  // 星级评分触摸移动
  onStarTouchMove(e) {
    const { clientX } = e.touches[0];
    const query = wx.createSelectorQuery();
    query.selectAll('.stars image').boundingClientRect((rects) => {
      rects.forEach((rect, index) => {
        if (clientX >= rect.left && clientX <= rect.right) {
          this.setData({ touchStar: index+1 });
        }
      });
    }).exec();
  },

  // 星级评分触摸结束
  onStarTouchEnd() {
    this.setData({
      star: this.data.touchStar,
      touchStar: 0 // 触摸结束后重置触摸临时星级
    });
  },

  // 分页切换
  onPageChange(e) {
    this.setData({ currentPage: e.detail.current });
  },

  // 上一页
  prevPage() {
    if (this.data.currentPage > 0) {
      this.setData({
        currentPage: this.data.currentPage - 1
      });
    }
  },

  // 下一页
  nextPage() {
    if (this.data.currentPage < 1) {
      this.setData({
        currentPage: this.data.currentPage + 1
      });
    }
  },
  goHome() {
    // 跳转到首页
    wx.switchTab({
      url: '/pages/index/index'
    });
  }
});