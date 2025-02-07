<script setup lang="ts">
const onScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <nuxt-link to="/" class="the-logo" @click.prevent="onScroll">
    <img src="/assets/logo.png" alt="Sushi Stories" />
  </nuxt-link>
</template>

<style scoped>
.the-logo {
  position: relative;
  display: block;
  height: 40px;
  img {
    height: 100%;
  }
  @include media($bp-desktop-sm) {
    height: 50px;
  }
}
</style>