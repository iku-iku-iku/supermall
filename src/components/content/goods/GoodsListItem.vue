<template>
  <div class="list-item" @click="goodsItemClick">
    <img v-lazy="img" alt="" @load="imageLoad" />
    <p>{{ listItem.title }}</p>
    <div style="text-align: center">
      <span class="price">{{ listItem.price }}</span>
      <span class="colect">{{ listItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
      default: {},
    },
  },
  computed: {
    img() {
      return this.listItem.image || this.listItem.show.img;
    },
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("imageLoad");
    },
    goodsItemClick() {
      this.$router.push("/detail/" + this.listItem.iid);
    },
  },
};
</script>

<style scoped>
.price {
  color: red;
}
p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.colect::before {
  content: "☆";
}
.list-item img {
  width: 100%;
  height: 80%;
}
</style>