<script setup lang="ts">
import type { Product } from '@/types/products';
import AddToCartButton from '@/components/Button/AddToCartButton.vue';

type Props = {
  product: Product;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="product-card-footer">
    <add-to-cart-button />
    <div class="product-card-footer__price">
      <span>{{ props.product.price }} ₽</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card-footer {
  display: flex;
  justify-content: space-between;
  padding: 15px;

  &__price {
    display: flex;
    align-items: center;

    & span {
      color: var(--secondary-text);
      font-size: 22px;
      font-weight: 600;
    }
  }
}
</style>
