import { ADD_COUNT, ADD_TO_CART } from "./mutation_types";

export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      // 如果存在对应商品，则直接增加数量
      if (context.state.cartList[payload.iid]) {
        context.commit(ADD_COUNT, payload.iid);
        resolve("数量加一");
      } else {
        context.commit(ADD_TO_CART, payload);
        resolve("添加新的商品");
      }
      console.log(context.state.cartList);
    });
  }
};
