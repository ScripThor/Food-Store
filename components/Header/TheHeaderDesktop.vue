<script setup lang="ts">
import TheLogo from "@/components/TheLogo.vue";
import HeaderSearch from "@/components/Header/HeaderSearch.vue";
import HeaderCart from "@/components/Header/HeaderCart.vue";
</script>

<template>
  <header class="header">
    <div class="header__container">
      <the-logo/>
      <header-search/>
      <header-info/>
      <header-contactus/>
      <header-cart/>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 99;

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 60px;
    max-width: 1250px;
    padding: 0 15px;
    border-radius: 0 0 25px 25px;
    background-color: #1c8551;
    box-shadow: 0 0 16px 0 #0000007d;
  }
}

</style>