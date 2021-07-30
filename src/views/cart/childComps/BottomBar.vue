<template>
  <div class="bottom-bar">
    <div class="check-all" @click="checkAll">
      <check-button :isChecked="isChecked"></check-button>
      <span>全选</span>
    </div>
    <div class="sum">合计 ￥{{ checkedTotalPrice }}</div>
    <div class="clear" @click="clearCart">去结算({{ quantity }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    CheckButton,
  },
  methods: {
    checkAll() {
      if (this.isChecked) {
        // 如果已经全选则取消
        this.checkedCartItems.forEach((e) => (e.checked = false));
      } else {
        // 如果未全选则全选
        this.cartItems.forEach((e) => (e.checked = true));
      }
    },
    clearCart() {
      if (!this.quantity) this.$toast.show("请先选择商品");
    },
  },
  computed: {
    ...mapGetters([
      "cartItems",
      "cartLength",
      "checkedCartItems",
      "checkedTotalPrice",
    ]),
    quantity() {
      return this.checkedCartItems.length;
    },
    isChecked() {
      return this.cartLength != 0 && this.quantity == this.cartLength;
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  height: 40px;
  background-color: pink;
  align-items: center;
}
.check-all {
  width: 70px;
  position: relative;
  display: flex;
}
.check-all span {
  line-height: 19.19px;
  margin-left: 7px;
}
.sum {
  flex: 1;
  text-align: center;
}
.clear {
  height: 100%;
  line-height: 40px;
  text-align: center;
  width: 100px;
  background-color: red;
  color: #fff;
}
</style>