<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/stores/useProductsStore';
import type { Product } from '~/types/products';

const route = useRoute();
const productStore = useProductsStore();

const slug = route.params.product as string;

const product = ref<Product | null>(null);

onMounted(async () => {
  await productStore.loadProducts();
  product.value = productStore.products.find((p) => p.slug === slug) || null;
});
</script>
<template>
  <div v-if="product" class="product-page">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" :alt="product.name" />
    <p>{{ product.description }}</p>
    <p>Цена: {{ product.price }} руб.</p>
  </div>
  <div v-else>
    <p>Товар не найден.</p>
  </div>
</template>

<style scoped lang="scss"></style>
