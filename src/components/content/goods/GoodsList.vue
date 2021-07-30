<template>
  <div>
    <ul class="goods-list">
      <goods-list-item
        v-for="(item, idx) in goods.list"
        :listItem="item"
        :key="idx"
        class="goods-list-item"
      ></goods-list-item>
    </ul>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goods-list-item {
  width: 48%;
}
</style>