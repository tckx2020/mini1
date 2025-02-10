App({
  onLaunch(options) {
    // 小程序启动时执行
    console.log('App Launch', options);
  },
  onShow(options) {
    // 小程序显示时执行
    console.log('App Show', options);
  },
  onHide() {
    // 小程序隐藏时执行
    console.log('App Hide');
  },
  onError(msg) {
    // 小程序发生错误时执行
    console.log('App Error:', msg);
  },
  globalData: {
    userInfo: null
  }
});