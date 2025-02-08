<script setup lang="ts">
import { useCategoriesStore } from '@/stores/useCategoriesStore';
import { useProductsStore } from '@/stores/useProductsStore';
import { onMounted, computed } from 'vue';

const categoriesStore = useCategoriesStore();
const productsStore = useProductsStore();

onMounted(async () => {
  categoriesStore.loadCategories();
  await productsStore.loadProducts(); // Загружаем товары из Firestore
});

const categories = computed(() => categoriesStore.categories);

const getProductsByCategory = (categorySlug: string) => {
  return productsStore.getProductsByCategory(categorySlug);
};

const filteredCategories = computed(() => {
  return categories.value.filter((category) => {
    const products = getProductsByCategory(category.slug);
    return products.length > 0;
  });
});
</script>

<template>
  <div class="category">
    <div
        v-for="category in filteredCategories"
        :id="category.slug"
        :key="category.slug"
        class="category__block"
    >
      <h2 class="category__title">
        {{ category.name }}
      </h2>
      <product-list
          :products="getProductsByCategory(category.slug)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.category {
  &__block {
    padding: 0 0 50px;

    @include media('<desktop-mini') {
      padding: 0 0 24px;
    }
  }

  &__title {
    height: max-content;
    margin-bottom: 30px;
    font-size: 30px;
    font-weight: 900;
    color: #2c2f39;

    @include media('<desktop-mini') {
      margin-bottom: 0;
      font-size: 18px;
    }
  }
}
</style>