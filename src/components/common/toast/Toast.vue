<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message, timeout = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
      }, timeout);
    },
  },
};
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 8px 10px;
  z-index: 999;
  transform: translate(-50%, -50%);
  background-color: red;
}
</style>