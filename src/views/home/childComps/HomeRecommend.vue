<template>
  <div class="recommend">
    <div v-for="(item, idx) in recommends" :key="idx" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
      </a>
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style>
</style>