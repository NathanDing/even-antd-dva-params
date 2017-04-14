
export default {

  namespace: 'navapp',

  state: {
    islogin: false,  // 是否登录
    modules: { // 包含的模块
      home: {
        text: '主页',
        route: 'home',
      },
      sysmng: {
        text: '平台管理',
        route: 'sysmng',
      },
    },
    evenversion: 'v1.0', // 平台版本
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {},

  reducers: {},

};
