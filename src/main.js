import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Layout, Icon, Drawer, Radio, Menu } from "ant-design-vue";
import Authorized from "./components/Authorized.vue";

Vue.config.productionTip = false;

// ant-design-vue 中的组件可以用use进行全局注册，是因为在 ant-design-vue 中做了处理
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);

// 全局注册权限验证组件
Vue.component("Authorized", Authorized);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
