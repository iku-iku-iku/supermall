export default {
  cartItems(state) {
    return Object.values(state.cartList);
  },
  cartLength(state, getters) {
    return getters.cartItems.length;
  },
  checkedCartItems(state, getters) {
    return getters.cartItems.filter(item => item.checked);
  },
  checkedTotalPrice(state, getters) {
    return getters.checkedCartItems.reduce((prev, item) => {
      return prev + item.price * item.count;
    }, 0);
  }
};
