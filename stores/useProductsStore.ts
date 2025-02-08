import { defineStore } from 'pinia';
import type { Product } from '@/types/products';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [] as Product[], // Локальное состояние для продуктов
    }),
    actions: {
        loadProducts() {
            // Временные данные
            this.products = [
                {
                    id: 1,
                    name: 'Филадельфия с манго',
                    slug: 'filadelfia-s-mango',
                    category_id: 1,
                    category_slug: 'rolly',
                    description: 'Вкусные роллы с рыбой и сыром',
                    image: '/products/mango.webp',
                    price: '1 300',
                },
                {
                    id: 1,
                    name: 'Филадельфия с манго',
                    slug: 'filadelfia-s-mango',
                    category_id: 1,
                    category_slug: 'rolly',
                    description: 'Вкусные роллы с рыбой и сыром',
                    image: '/products/mango.webp',
                    price: '1 300',
                },
                {
                    id: 1,
                    name: 'Филадельфия с манго',
                    slug: 'filadelfia-s-mango',
                    category_id: 1,
                    category_slug: 'rolly',
                    description: 'Вкусные роллы с рыбой и сыром',
                    image: '/products/mango.webp',
                    price: '1 300',
                },
                {
                    id: 1,
                    name: 'Филадельфия с манго',
                    slug: 'filadelfia-s-mango',
                    category_id: 1,
                    category_slug: 'rolly',
                    description: 'Вкусные роллы с рыбой и сыром',
                    image: '/products/mango.webp',
                    price: '1 300',
                },
                {
                    id: 1,
                    name: 'Филадельфия с манго',
                    slug: 'filadelfia-s-mango',
                    category_id: 1,
                    category_slug: 'rolly',
                    description: 'Вкусные роллы с рыбой и сыром',
                    image: '/products/mango.webp',
                    price: '1 300',
                },
                {
                    id: 1,
                    name: 'Филадельфия с манго',
                    slug: 'filadelfia-s-mango',
                    category_id: 1,
                    category_slug: 'rolly',
                    description: 'Вкусные роллы с рыбой и сыром',
                    image: '/products/mango.webp',
                    price: '1 300',
                },
                {
                    id: 1,
                    name: 'Филадельфия с манго',
                    slug: 'filadelfia-s-mango',
                    category_id: 1,
                    category_slug: 'rolly',
                    description: 'Вкусные роллы с рыбой и сыром',
                    image: '/products/mango.webp',
                    price: '1 300',
                },
                {
                    id: 1,
                    name: 'Филадельфия с манго',
                    slug: 'filadelfia-s-mango',
                    category_id: 1,
                    category_slug: 'rolly',
                    description: 'Вкусные роллы с рыбой и сыром',
                    image: '/products/mango.webp',
                    price: '1 300',
                },
                {
                    id: 2,
                    name: 'Пицца Лесная',
                    slug: 'pizza-lesnaya',
                    category_id: 2,
                    category_slug: 'pizza',
                    description: 'Горячая пицца с тянущимся сыром',
                    image: '/products/lesnaya.webp',
                    price: '1 500',
                },
            ];
        },
    },
    getters: {
        getProductsByCategory: (state) => (categorySlug: string) =>
            state.products.filter((product) => product.category_slug === categorySlug),
    },
});