<script setup lang="ts">
import type { Product } from '@/types/products';

defineProps<{
  product: Product | null;
}>();
</script>

<template>
  <nav class="product-breadcrumbs" aria-label="breadcrumbs">
    <nuxt-link class="product-breadcrumbs__link" to="/">Главная</nuxt-link>
    <span class="product-breadcrumbs__link">{{ product.name }}</span>
  </nav>
</template>

<style scoped lang="scss">
.product-breadcrumbs {
  display: flex;
  flex-wrap: wrap;

  &__link {
    display: block;
    color: #000;
    font-size: 18px;
    font-weight: 500;
    line-height: 16px;
    text-decoration: none;
    transition: color 0.2s ease-in;
    &:hover {
      color: var(--primary-color);
    }
    &:not(:last-child) {
      &::after {
        content: '/';
        margin: 0 5px;
        color: var(--primary-color);
      }
    }
    &:last-child {
      color: var(--secondary-text);
    }
  }
}
</style>
