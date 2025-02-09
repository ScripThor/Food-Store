<script setup lang="ts">
import TheLogo from '@/components/TheLogo.vue';

const year = new Date().getFullYear();
</script>

<template>
  <div class="footer__info">
    <div class="footer__logo">
      <the-logo></the-logo>
    </div>
    <div class="footer__copyright">© {{ year }} sushi-gaysha.ru</div>
    <div class="footer__payment">
      <nuxt-img src="/icons/mir.svg" alt="MirPay" />
      <nuxt-img src="/icons/visa.svg" alt="Visa" />
      <nuxt-img src="/icons/mastercard.svg" alt="Mastercard" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;

    @include media('>tablet') {
      display: block;
      margin-bottom: 0;
      text-align: center;
    }
  }

  &__logo {
    margin-bottom: 20px;
  }

  &__copyright {
    margin-bottom: 20px;
  }

  &__payment {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
}
</style>
