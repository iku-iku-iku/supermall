<template>
  <swiper>
    <swiper-item v-for="(item, idx) in banners" :key="idx">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      isLoadEmit: false,
    };
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperImageLoad() {
      if (!this.isLoadEmit) {
        this.isLoadEmit = true;
        this.$emit("swiperImageLoad");
      }
    },
  },
};
</script>

<style>
.recommend {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 2px solid #eee;
  font-size: 12px;
}
.recommend-item {
  flex: 1;
  text-align: center;
}
.recommend-item img {
  width: 100%;
}
</style>