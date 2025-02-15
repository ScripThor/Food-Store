<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/useProductsStore';
import type { Product } from '@/types/products';

import AddToCartButton from '@/components/Button/AddToCartButton.vue';
import ProductLoader from '@/components/Loader/ProductLoader.vue';
import TheCounter from '@/components/Counter/TheCounter.vue';
import { useCartStore } from '@/stores/useCartStore';

const route = useRoute();
const productStore = useProductsStore();

const slug = route.params.product as string;
const product = ref<Product | null>(null);
const isLoading = ref(true);

const cartStore = useCartStore();
const showCounter = ref(false);

onMounted(async () => {
  await productStore.loadProducts();
  const foundProduct = productStore.products.find((p) => p.slug === slug);
  if (foundProduct) {
    product.value = foundProduct;
    updateCounterState();
  } else {
    console.error('Товар не найден');
  }
  isLoading.value = false;
});

watch(
  () => cartStore.items,
  () => updateCounterState(),
  { deep: true },
);

const updateCounterState = () => {
  if (product.value) {
    const item = cartStore.items.find((i) => i.id === product.value.id);
    showCounter.value = !!item && item.quantity > 0;
  }
};

const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value);
    showCounter.value = true;
  }
};

const increaseQuantity = () => {
  if (product.value) {
    cartStore.incrementQuantity(product.value.id);
  }
};

const decreaseQuantity = () => {
  if (product.value) {
    cartStore.decrementQuantity(product.value.id);
  }
};
</script>

<template>
  <product-loader v-if="isLoading" />
  <div v-else-if="product" class="product-page container">
    <product-card-breadcrumbs v-if="product" :product="product" />
    <div class="product">
      <div class="product__image">
        <img :src="product.image" :alt="product.name" />
      </div>
      <div class="product__content">
        <div class="product__content-title">
          <h1>{{ product.name }}</h1>
          <span>{{ product.weight }} г.</span>
        </div>
        <div class="product__content-description">
          {{ product.description }}
        </div>
        <div class="product__content-composition">
          <span>Состав</span>
          <p>{{ product.composition }}</p>
        </div>
        <div class="product__content-footer">
          <the-counter
            v-if="showCounter"
            :value="
              cartStore.items.find((i) => i.id === product.id)?.quantity || 0
            "
            @increase="increaseQuantity"
            @decrease="decreaseQuantity"
          />
          <add-to-cart-button
            v-else
            :product="product"
            @click="handleAddToCart"
          />
          <span>{{ product.price }} руб.</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Товар не найден.</p>
  </div>
</template>

<style scoped lang="scss">
.product-page {
  margin-top: 50px;
}

.product {
  display: flex;
  gap: 20px;

  &__image {
    & img {
      border-radius: 20px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0;

    &-title {
      & h1 {
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
        color: var(--primary-color);
        margin-bottom: 10px;
      }

      & span {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        color: #c1c1c1;
      }
    }

    &-description {
      color: var(--secondary-text);
      font-size: 18px;
    }

    &-composition {
      & span {
        font-size: 20px;
        font-weight: 600;
        color: #000;
      }

      & p {
        font-size: 18px;
        color: var(--secondary-text);
      }
    }

    &-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & span {
        color: var(--secondary-text);
        font-size: 30px;
        font-weight: 600;
      }
    }
  }
}
</style>
