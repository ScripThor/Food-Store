<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import HeaderSearchInput from '@/components/Header/header-search/HeaderSearchInput.vue';
import { useProductsStore } from '@/stores/useProductsStore';

const productsStore = useProductsStore();
const searchQuery = ref('');
const isActive = ref(false);
const error = ref<string | null>(null);

const searchRef = ref(null);
onClickOutside(searchRef, () => {
  isActive.value = false;
});

// Загружаем товары при монтировании компонента
onMounted(async () => {
  try {
    await productsStore.loadProducts();
    error.value = null;
  } catch (e) {
    error.value = 'Ошибка загрузки товаров';
    console.error('Error loading products:', e);
  }
});

// Реактивный список товаров
const productsList = computed(() => {
  if (!searchQuery.value || searchQuery.value.length < 3) return [];

  const query = searchQuery.value.toLowerCase().trim();
  return productsStore.products.filter((product) =>
    product.name.toLowerCase().includes(query),
  );
});

// Обработчик изменений поискового запроса
watch(searchQuery, (newVal) => {
  isActive.value = newVal.length >= 3;
});

// Сбрасываем поиск при клике вне области
const resetSearch = () => {
  searchQuery.value = '';
  isActive.value = false;
};
</script>

<template>
  <div class="header__search" ref="searchRef">
    <header-search-input
      :modelValue="searchQuery"
      @update:modelValue="(value) => (searchQuery = value)"
    />
    <div>
      <div v-if="isActive" class="header-search__list">
        <template v-if="!error">
          <div v-if="productsList.length > 0">
            <nuxt-link
              v-for="product in productsList"
              :key="product.id"
              :to="`/product/${product.slug}/`"
              class="header-search__product"
              @click="resetSearch"
            >
              <div class="header-search__name">{{ product.name }}</div>
              <div class="header-search__price">
                {{ product.price.toLocaleString() }} ₽
              </div>
            </nuxt-link>
          </div>

          <div v-else class="header-search__no-results">Товары не найдены</div>
        </template>

        <div v-else class="search-error">
          {{ error }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-loading,
.search-error {
  padding: 10px;
  text-align: center;
  color: #666;
}

.header-search {
  &__no-results {
    padding: 10px;
    color: #999;
    text-align: center;
  }

  &__product {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  &__list {
    position: absolute;
    z-index: 1;
    background: #f2f2f2;
    width: 270px;
    top: 55%;
    padding-top: 15px;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-height: 400px;
    overflow-y: auto;
  }

  &__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
}
</style>
