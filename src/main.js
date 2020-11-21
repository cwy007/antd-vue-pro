import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";

import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker,
} from "ant-design-vue";
import Authorized from "./components/Authorized.vue";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

// ant-design-vue 中的组件可以用use进行全局注册，是因为在 ant-design-vue 中做了处理
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.use(VueI18n);

// 全局注册权限验证组件
Vue.component("Authorized", Authorized);

// 指令形式的权限验证
Vue.use(Auth);

const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS },
  },
});

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2219984_e18lb14wvi8.js",
});
Vue.component("IconFont", IconFont);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount("#app");
