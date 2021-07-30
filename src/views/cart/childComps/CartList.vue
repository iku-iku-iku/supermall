<template>
  <div>
    <cart-list-item
      v-for="item in cartItems"
      :key="item.iid"
      :cartListItem="item"
    ></cart-list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";
export default {
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartItems"]),
  },
};
</script>

<style>
</style>