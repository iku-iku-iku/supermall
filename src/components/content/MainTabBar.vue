<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <div slot="item-text">首页</div>
      <img slot="item-img" src="@/assets/img/tabbar/home.svg" alt="" />
      <img
        slot="item-img-active"
        src="@/assets/img/tabbar/home_active.svg"
        alt=""
      />
    </tab-bar-item>
    <tab-bar-item path="/category">
      <div slot="item-text">分类</div>
      <img
        slot="item-img"
        src="@/assets/img/tabbar/classification.svg"
        alt=""
      />
      <img
        slot="item-img-active"
        src="@/assets/img/tabbar/classification_active.svg"
        alt=""
      />
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <div slot="item-text">购物车</div>
      <img slot="item-img" src="@/assets/img/tabbar/cart.svg" alt="" />
      <img
        slot="item-img-active"
        src="@/assets/img/tabbar/cart_active.svg"
        alt=""
      />
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="item-text">我的</div>
      <img slot="item-img" src="@/assets/img/tabbar/mine.svg" alt="" />
      <img
        slot="item-img-active"
        src="@/assets/img/tabbar/mine_active.svg"
        alt=""
      />
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>