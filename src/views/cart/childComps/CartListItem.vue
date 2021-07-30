<template>
  <div class="item">
    <check-button
      :isChecked="cartListItem.checked"
      @click.native="clickButton"
    ></check-button>
    <div class="cart-image">
      <img :src="cartListItem.image" alt="" />
    </div>
    <div class="info-right">
      <div class="title">{{ cartListItem.title }}</div>
      <div class="desc">{{ cartListItem.desc }}</div>
      <div class="price">{{ cartListItem.price }}</div>
      <div class="count">x{{ cartListItem.count }}</div>
    </div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
import { TOGGLE_CHECKED } from "@/store/mutation_types.js";
export default {
  components: {
    CheckButton,
  },
  props: {
    cartListItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    clickButton() {
      this.$store.commit(TOGGLE_CHECKED, this.cartListItem.iid);
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  height: 150px;
  padding: 7px;
  border-bottom: 3px solid rgba(100, 100, 100, 0.2);
}
check-button {
  flex: 1;
}
.cart-image {
  border-radius: 10px;
  flex: 4;
}

.cart-image img {
  width: 100%;
  height: 100%;
}

.item div {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.info-right {
  position: relative;
  padding-left: 22px;
  flex: 10;
}
.title {
  font-size: 20px;
  margin-bottom: 15px;
}
.price {
  position: absolute;
  bottom: 13px;
  color: rgb(255, 136, 0);
  font-size: 20px;
}
.count {
  position: absolute;
  right: 10px;
  bottom: 13px;
  font-size: 18px;
}
</style>