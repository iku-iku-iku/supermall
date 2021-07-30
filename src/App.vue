<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 路由到其它页面不要销毁原来的组件 -->
      <router-view />
    </keep-alive>
    <main-tab-bar />
  </div>
</template>
<script>
import MainTabBar from "@/components/content/MainTabBar.vue";
export default {
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import url("~@/assets/css/base.css");
</style>
