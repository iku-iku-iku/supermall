import { debounce } from "./utils.js";
export const imageListenerMixin = {
  data() {
    return {
      imageListener: null,
      refresh: null
    };
  },
  mounted() {
    this.refresh = debounce(
      this.$refs.Scroll && this.$refs.Scroll.refresh,
      100
    );
    this.imageListener = () => {
      this.refresh();
    };
    this.$bus.$on("imageLoad", this.imageListener);
  }
};
