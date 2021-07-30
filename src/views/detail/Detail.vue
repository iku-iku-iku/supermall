<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @titleClick="titleClick" ref="navBar">
    </detail-nav-bar>
    <scroll
      class="content"
      ref="Scroll"
      :monitorScroll="true"
      @onScroll="contentScroll"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detailInfo="detailInfo"
        @goodsImageLoad="goodsImageLoad"
      ></detail-goods-info>
      <detail-params :paramInfo="paramInfo" ref="params"></detail-params>
      <detail-comment :comment="comment" ref="comment"></detail-comment>
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
// 导入子组件
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailsBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParams from "./childComps/DetailParams.vue";
import DetailComment from "./childComps/DetailComment.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import BackTop from "@/components/content/BackTop.vue";
import GoodsList from "@/components/content/goods/GoodsList.vue";

import Scroll from "@/components/common/scroll/Scroll.vue";
// 导入函数
import { debounce } from "@/common/utils.js";
// 导入mixin
import { imageListenerMixin } from "@/common/mixin.js";
// 导入网络请求相关函数和数据结构
import {
  getDetails,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "@/network/detail.js";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    Scroll,
    DetailParams,
    DetailComment,
    GoodsList,
    DetailBottomBar,
    BackTop,
  },
  data() {
    return {
      iid: null,
      data: null,
      topImages: null, // 轮播图
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      comment: {},
      recommend: {},
      titlePosition: [], // 锚点坐标
      getTitlePosition: null, // 获取锚点坐标的防抖函数
      positionY: 0,
    };
  },
  computed: {
    isBackTopShow() {
      return this.positionY < -660;
    },
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetails(this.iid).then((res) => {
      this.data = res;
      // 轮播图图片
      this.topImages = this.data.result.itemInfo.topImages;
      // 商品数据
      this.goods = new Goods(
        res.result.itemInfo,
        res.result.columns,
        res.result.shopInfo.services
      );
      // 商家信息
      this.shop = new Shop(res.result.shopInfo);
      // 详细信息
      this.detailInfo = res.result.detailInfo;
      // 商品参数
      this.paramInfo = new GoodsParam(
        res.result.itemParams.info,
        res.result.itemParams.rule
      );
      // 评论
      if (res.result.rate.cRate != 0) {
        this.comment = res.result.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommend = res.data;
    });
  },
  mounted() {
    this.getTitlePosition = debounce(() => {
      // 防抖
      this.titlePosition = [];
      this.titlePosition.push(0);
      this.titlePosition.push(this.$refs.params.$el.offsetTop);
      this.titlePosition.push(this.$refs.comment.$el.offsetTop);
      this.titlePosition.push(this.$refs.recommend.$el.offsetTop);
    });
  },
  methods: {
    // 图片加载完后获取锚点坐标并刷新BS
    goodsImageLoad() {
      this.getTitlePosition();
      this.refresh();
    },
    // 点击tab跳转到对应位置
    titleClick(index) {
      this.$refs.Scroll.scrollTo(0, -this.titlePosition[index]);
    },
    contentScroll(position) {
      this.positionY = position.y;
      for (let i = 0; i < this.titlePosition.length; i++) {
        if (-position.y >= this.titlePosition[i])
          this.$refs.navBar.currentIndex = i;
      }
    },
    backTop() {
      this.$refs.Scroll.scrollTo(0, 0);
    },
    addToCart() {
      const product = {};
      product.iid = this.iid;
      product.image = this.topImages[0];
      product.price = this.goods.realPrice;
      product.desc = this.goods.desc;
      product.title = this.goods.title;
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res);
      });
    },
  },
  destroyed() {
    // 注销监听
    this.$bus.$off("imageLoad", this.imageListener);
  },
  // 混入goodslist图片监听
  mixins: [imageListenerMixin],
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 93px);
  background-color: #fff;
}
.nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>