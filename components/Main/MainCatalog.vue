<script setup lang="ts">
import { useCategoriesStore } from '@/stores/useCategoriesStore';
import { useProductsStore } from '@/stores/useProductsStore';
import { onMounted, computed } from 'vue';

const categoriesStore = useCategoriesStore();
const productsStore = useProductsStore();

onMounted(() => {
  categoriesStore.loadCategories();
  productsStore.loadProducts(); // Загружаем продукты
});

const categories = computed(() => categoriesStore.categories);

// Функция для получения продуктов по категории
const getProductsByCategory = (categorySlug: string) => {
  return productsStore.getProductsByCategory(categorySlug);
};
</script>

<template>
  <div class="category">
    <div
        v-for="category in categories"
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