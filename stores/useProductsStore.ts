import { defineStore } from 'pinia';
import { getProducts, getProductsByCategory } from '@/api/services/products';
import type { Product } from '@/types/products';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [] as Product[],
    }),
    actions: {
        async loadProducts() {
            this.products = await getProducts();
        },
    },
    getters: {
        getProductsByCategory: (state) => (categorySlug: string) => {
            return state.products.filter((product) => product.category_slug === categorySlug);
        },
    },
});