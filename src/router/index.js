import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Home = () => import("@/views/home/Home.vue");
const Detail = () => import("@/views/detail/Detail.vue");
const Cart = () => import("@/views/cart/Cart.vue");

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/detail/:iid",
    component: Detail
  },
  {
    path: "/cart",
    component: Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
