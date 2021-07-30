<template>
  <div id="cart">
    <!-- 顶部导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- 购物车列表 -->
    <scroll class="content" ref="Scroll">
      <cart-list></cart-list>
    </scroll>
    <!-- 底部汇总 -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import CartList from "./childComps/CartList.vue";
import BottomBar from "./childComps/BottomBar.vue";

// 映射getters到computed中
import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    Scroll,
    CartList,
    BottomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
  },
  activated() {
    this.$refs.Scroll.refresh();
  },
};
</script>

<style scoped>
#cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100% - 133px);
  overflow: hidden;
}
</style>