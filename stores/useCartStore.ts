import { defineStore } from 'pinia';
import type { Product } from '@/types/products';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[], // Массив товаров в корзине
    totalQuantity: 0, // Общее количество товаров
    totalPrice: 0, // Общая стоимость товаров
  }),
  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }

      // Преобразуем цену в число перед обновлением totalPrice
      const price = Number(product.price);
      if (!isNaN(price)) {
        this.totalQuantity += 1;
        this.totalPrice += price;
      } else {
        console.error('Цена товара не является числом:', product.price);
      }

      this.saveToLocalStorage();
    },

    // Удаление товара из корзины
    removeFromCart(productId: string) {
      const itemIndex = this.items.findIndex((item) => item.id === productId);
      if (itemIndex !== -1) {
        const item = this.items[itemIndex];
        this.totalQuantity -= item.quantity || 1;
        this.totalPrice -= (item.quantity || 1) * (item.price || 0);
        this.items.splice(itemIndex, 1);
        this.saveToLocalStorage();
      }

      this.saveToLocalStorage();
    },

    // Сохранение состояния в Local Storage
    saveToLocalStorage() {
      if (typeof window !== 'undefined') {
        // Проверяем, что мы в браузере
        const cartData = {
          items: this.items,
          totalQuantity: this.totalQuantity,
          totalPrice: this.totalPrice,
        };
        localStorage.setItem('cart', JSON.stringify(cartData));
      }

      this.saveToLocalStorage();
    },

    // Загрузка состояния из Local Storage
    loadFromLocalStorage() {
      if (typeof window !== 'undefined') {
        // Проверяем, что мы в браузере
        const cartData = localStorage.getItem('cart');
        if (cartData) {
          const parsedData = JSON.parse(cartData);
          this.items = parsedData.items || [];
          this.totalQuantity = parsedData.totalQuantity || 0;
          this.totalPrice = parsedData.totalPrice || 0;
        }
      }
    },
  },
});
