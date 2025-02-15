import { defineStore } from 'pinia';
import { getProducts, getProductsByCategory } from '@/api/services/products';
import { generateSlug } from '@/utils/helpers';
import type { Product } from '@/types/products';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
  }),
  actions: {
    async loadProducts() {
      try {
        const products = await getProducts();
        this.products = products.map((product) => ({
          ...product,
          slug: product.slug || generateSlug(product.name),
        }));
      } catch (error) {
        console.error('Error loading products:', error);
        throw error;
      }
    },
  },
  getters: {
    getProductsByCategory: (state) => (categorySlug: string) => {
      return state.products.filter(
        (product) => product.category_slug === categorySlug,
      );
    },
  },
});
