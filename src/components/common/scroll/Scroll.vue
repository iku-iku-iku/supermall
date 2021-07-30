<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    monitorScroll: {
      type: Boolean,
      default: false,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.monitorScroll ? 3 : 0,
      pullUpLoad: this.pullUpLoad,
    });
    if (this.monitorScroll) {
      this.scroll.on("scroll", (position) => {
        this.$emit("onScroll", position);
      });
    }
    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollTo(x, y, time = 400) {
      this.scroll && this.scroll.scrollTo(x, y, time);
      // 如果this.scroll为null则不会继续执行
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
};
</script>

<style scoped>
</style>