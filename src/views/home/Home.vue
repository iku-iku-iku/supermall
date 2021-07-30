<template>
  <div id="home">
    <nav-bar class="nav-home">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['新款', '流行', '精选']"
      class="tab-control"
      @tabClick="tabClick"
      ref="fakeTabControl"
      v-show="isFakeTabControlShow"
    ></tab-control>
    <scroll
      class="wrapper"
      ref="Scroll"
      :monitorScroll="true"
      @onScroll="onScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <featrue></featrue>
      <tab-control
        :titles="['新款', '流行', '精选']"
        class="tab-control"
        @tabClick="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="goods[currentType]"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
    <!-- 当要监听一个组件的原生事件时，必须给对应的事件加上.native修饰符 -->
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import TabControl from "@/components/common/TabControl/TabControl.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";

import GoodsList from "@/components/content/goods/GoodsList.vue";
import BackTop from "@/components/content/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import HomeRecommend from "./childComps/HomeRecommend.vue";
import Featrue from "./childComps/Feature.vue";

import { getMultidata, getHomeGoods } from "@/network/home.js";

import { imageListenerMixin } from "@/common/mixin.js";

export default {
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    Featrue,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },

  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        sell: { page: 0, list: [] },
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
      },
      currentType: "new",
      positionY: 0,
      leftPositionY: 0, // 跳转到其它页面时记录的位置
      tabControlOffsetTop: 0,
    };
  },
  computed: {
    isShow() {
      return this.positionY < -660;
    },
    isFakeTabControlShow() {
      return this.positionY < -this.tabControlOffsetTop;
    },
  },
  created() {
    this.getMultidata();
    this.getHomeGoods("sell");
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
  },
  mixins: [imageListenerMixin],
  methods: {
    /*
     * 响应子组件事件
     */
    swiperImageLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },
    tabClick(index) {
      if (index == 0) this.currentType = "new";
      else if (index == 1) this.currentType = "pop";
      else this.currentType = "sell";
      this.$refs.fakeTabControl.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backTop() {
      this.$refs.Scroll.scrollTo(0, 0);
    },
    onScroll(position) {
      this.positionY = position.y;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.Scroll.finishPullUp();
    },
    /*
     * 网络请求相关方法
     */
    getMultidata() {
      getMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      getHomeGoods(type, ++this.goods[type].page).then((res) => {
        this.goods[type].list.push(...res.data.list);
      });
    },
  },
  activated() {
    // 滑回到之前位置
    this.$refs.Scroll.refresh();
    this.$refs.Scroll.scrollTo(0, this.leftPositionY, 0);
    // 开启监听
    this.$bus.$on("imageLoad", this.imageListener);
  },
  deactivated() {
    // 记录离开的位置
    this.leftPositionY = this.positionY;
    // 关闭监听
    this.$bus.$off("imageLoad", this.imageListener);
  },
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.nav-home {
  background-color: var(--color-tint);
  color: white;
}
.tab-control {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>