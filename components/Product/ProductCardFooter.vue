<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import type { Product } from '@/types/products';
import AddToCartButton from '@/components/Button/AddToCartButton.vue';
import TheCounter from '~/components/Counter/TheCounter.vue';

const props = defineProps<{
  product: Product;
}>();

const cartStore = useCartStore();
const showCounter = ref(false);

onMounted(() => updateCounterState());

watch(
  () => cartStore.items,
  () => updateCounterState(),
  { deep: true },
);

const updateCounterState = () => {
  const item = cartStore.items.find((i) => i.id === props.product.id);
  showCounter.value = !!item && item.quantity > 0;
};

const handleAddToCart = () => {
  cartStore.addToCart(props.product);
  showCounter.value = true;
};

const increaseQuantity = () => {
  cartStore.incrementQuantity(props.product.id);
};

const decreaseQuantity = () => {
  cartStore.decrementQuantity(props.product.id);
};
</script>

<template>
  <div class="product-card-footer">
    <the-counter
      v-if="showCounter"
      :value="cartStore.items.find((i) => i.id === product.id)?.quantity || 0"
      @increase="increaseQuantity"
      @decrease="decreaseQuantity"
    />
    <add-to-cart-button
      v-else
      :product="props.product"
      @click="handleAddToCart"
    />
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
