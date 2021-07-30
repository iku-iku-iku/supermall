import Vue from "vue";
import { ADD_COUNT, ADD_TO_CART, TOGGLE_CHECKED } from "./mutation_types";
export default {
  [ADD_TO_CART](state, payload) {
    Vue.set(state.cartList, payload.iid, payload);
    Vue.set(state.cartList[payload.iid], "count", 1);
    Vue.set(state.cartList[payload.iid], "checked", true);
  },
  [ADD_COUNT](state, iid) {
    state.cartList[iid].count++;
  },
  [TOGGLE_CHECKED](state, iid) {
    state.cartList[iid].checked = !state.cartList[iid].checked;
  }
};
