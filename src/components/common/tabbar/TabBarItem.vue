<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!active">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    active() {
      return this.$route.path == this.path;
    },
    activeStyle() {
      return this.active ? { color: this.activeColor } : {};
    },
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      if (this.$route.path != this.path) this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 5px;
  vertical-align: middle;
}
.red {
  color: red;
}
</style>