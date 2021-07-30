import Toast from "./Toast.vue";
export default {
  install(Vue) {
    // 组件构造器
    const toastConstructor = Vue.extend(Toast);
    // 实例化
    const toast = new toastConstructor();
    // 挂载到一个元素上
    toast.$mount(document.createElement("div"));
    // 添加到body中
    document.body.appendChild(toast.$el);
    // 注册$toast
    Vue.prototype.$toast = toast;
  }
};
