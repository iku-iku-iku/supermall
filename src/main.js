import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import toast from "./components/common/toast";
import FastClick from "fastclick";
FastClick.attach(document.body);
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png")
});
Vue.config.productionTip = false; // 事件总线
Vue.prototype.$bus = new Vue();
Vue.use(toast);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
