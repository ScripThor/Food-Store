<script setup lang="ts">
import FooterContactsTel from '~/components/Footer/FooterContactsTel.vue';
</script>

<template>
  <div class="footer__contacts">
    <footer-contacts-tel />
    <footer-contacts-social />
  </div>
</template>

<style scoped lang="scss">
.footer {
  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
