<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProductsStore } from '@/stores/useProductsStore';
import type { Product } from '@/types/products';

import AddToCartButton from '@/components/Button/AddToCartButton.vue';
import ProductLoader from '~/components/Loader/ProductLoader.vue';

const route = useRoute();
const productStore = useProductsStore();

const slug = route.params.product as string;
const product = ref<Product | null>(null);
const isLoading = ref(true);

onMounted(async () => {
  await productStore.loadProducts();
  product.value = productStore.products.find((p) => p.slug === slug) || null;
  isLoading.value = false;
});
</script>
<template>
  <product-loader v-if="isLoading" />
  <div v-else-if="product" class="product-page container">
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
          <add-to-cart-button />
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
