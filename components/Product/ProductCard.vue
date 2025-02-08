<script setup lang="ts">
import type { Product } from '@/types/products';

import ProductCardImage from "@/components/Product/ProductCardImage.vue";
import ProductCardContent from "@/components/Product/ProductCardContent.vue";
import ProductCardFooter from "@/components/Product/ProductCardFooter.vue";

type Props = {
  product: Product; // Продукт передается через пропсы
};

const props = defineProps<Props>();
</script>

<template>
  <div class="product-card">
    <product-card-image :product="props.product" />
    <product-card-content :product="props.product" />
    <product-card-footer :product="props.product" />
  </div>
</template>

<style scoped lang="scss">
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 248px;
  overflow: hidden;
  background-color: var(--secondary-color);
  border-radius: 16px;
  transition: background-color 0.2s ease-in-out;

  @include media('>=desktop-mini') {
    height: 360px;
    border-radius: 25px;
    gap: 20px;

    &:hover {
      background-color: var(--secondary-color--hover);
    }
  }
}

</style>