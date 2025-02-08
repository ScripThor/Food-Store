<script setup lang="ts">
import type { Product } from '@/types/products';

type Props = {
  product: Product;
};

const props = defineProps<Props>();
</script>

<template>
  <div class="product-card-footer">
    <button class="product-card-footer__button">В корзину</button>
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

  &__button {
    color: var(--primary-text);
    background: var(--primary-color);
    min-height: 40px;
    padding: 7px 18px 9px;
    font-size: 14px;
    line-height: 20px;
    border-radius: 40px;
    border: 2px solid transparent;
    transition: .2s ease-out;
    user-select: none;
    outline: none;
    cursor: pointer;
  }

  &__price {
    display: flex;
    align-items: center;

    & span {
      color: var(--primary-text);
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>