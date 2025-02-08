<script setup lang="ts">
import type { Product } from '@/types/products';

type Props = {
  products: Product[]; // Продукты передаются через пропсы
};

const props = defineProps<Props>();
</script>

<template>
  <div class="product-list">
    <slot />
    <product-card
        v-for="product in props.products"
        :key="product.id"
        :product="product"
    />
  </div>
</template>

<style scoped lang="scss">
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 276px);
  gap: 55px 32px;
  justify-content: space-between;

  @include media('<=portrait-phone', '>=phone') {
    grid-template-columns: repeat(2, minmax(145px, 1fr));
    gap: 10px;
    padding: 25px 0 0;
  }

  @include media('<=tablet', '>=portrait-phone') {
    grid-template-columns: repeat(2, minmax(120px, 225px));
    gap: 10px;
    padding: 25px 0 0;
  }

  @include media('>=tablet', '<=desktop-mini') {
    grid-template-columns: repeat(3, minmax(217px, 1fr));
    gap: 10px;
    padding: 25px 0 0;
  }
}
</style>