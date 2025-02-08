import { defineStore } from 'pinia';

interface Category {
    name: string;
    slug: string;
}

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [] as Category[], // Список категорий
    }),
    actions: {
        loadCategories() {
            // Временные данные
            this.categories = [
                { name: 'Роллы', slug: 'rolly' },
                { name: 'Пицца', slug: 'pizza' },
                { name: 'Бургеры', slug: 'burgers' },
                { name: 'Салаты', slug: 'salats' },
                { name: 'Напитки', slug: 'napitki' },
            ];
        },
    },
});