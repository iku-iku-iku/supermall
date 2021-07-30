<template>
  <nav-bar>
    <div slot="left" class="left" @click="backClick">
      <img src="~@/assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="center">
      <div
        v-for="(item, index) in titles"
        :key="item"
        :class="{ active: currentIndex === index }"
        @click="titleClick(index)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.left {
  position: absolute;
}
.left img {
  position: absolute;
  top: 10px;
  left: 10px;
}
.center {
  display: flex;
}
.center div {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>