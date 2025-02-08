<script setup lang="ts">
const onScroll = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="header__logo">
    <nuxt-link to="/" class="header__logo-link" @click.prevent="onScroll">
      <img src="/assets/logo.png" alt="Sushi Stories" />
    </nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
.header__logo {
  margin-left: 20px;

  &-link {
    position: relative;
    display: block;
    height: 40px;

    & img {
      height: 100%;
    }

    @include media('>=desktop') {
      height: 50px;
    }
  }
}
</style>