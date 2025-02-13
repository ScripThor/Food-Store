<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import type { Product } from '@/types/products';

const cartStore = useCartStore();

type Props = {
  product: Product;
  required: true;
};

const { product } = defineProps<Props>();

const addToCart = () => {
  cartStore.addToCart(product);
};
</script>

<template>
  <button class="product-card-button" @click="addToCart">В корзину</button>
</template>

<style scoped lang="scss">
.product-card-button {
  color: #ffffff;
  background: var(--primary-color);
  min-height: 40px;
  padding: 7px 18px 9px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border-radius: 40px;
  border: 2px solid transparent;
  transition: 0.2s ease-out;
  user-select: none;
  outline: none;
  cursor: pointer;
}
</style>
