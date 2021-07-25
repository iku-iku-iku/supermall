<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { getMultidata } from "@/network/home.js";
import { HomeSwiper, HomeRecommend } from "./childComps";

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
  },

  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.nav-home {
  background-color: var(--color-tint);
  color: white;
}
</style>