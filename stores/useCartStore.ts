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
      const price = Number(product.price);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }

      this.totalQuantity++;
      this.totalPrice += price;
      this.saveToLocalStorage();
      return existingItem || this.items[this.items.length - 1];
    },

    removeFromCart(productId: string) {
      const itemIndex = this.items.findIndex((item) => item.id === productId);
      if (itemIndex === -1) return;

      const item = this.items[itemIndex];
      this.totalQuantity -= item.quantity;
      this.totalPrice -= item.price * item.quantity;
      this.items.splice(itemIndex, 1);
      this.saveToLocalStorage();
    },

    incrementQuantity(productId: string) {
      const item = this.items.find((item) => item.id === productId);
      if (!item) return;

      const price = Number(item.price);

      item.quantity++;
      this.totalQuantity++;
      this.totalPrice += price;
      this.saveToLocalStorage();
    },

    decrementQuantity(productId: string) {
      const item = this.items.find((item) => item.id === productId);
      if (!item) return;

      const price = Number(item.price);

      item.quantity--;
      this.totalQuantity--;
      this.totalPrice -= price;

      if (item.quantity === 0) {
        this.removeFromCart(productId);
      } else {
        this.saveToLocalStorage();
      }
    },

    saveToLocalStorage() {
      if (typeof window === 'undefined') return;
      localStorage.setItem(
        'cart',
        JSON.stringify({
          items: this.items,
          totalQuantity: this.totalQuantity,
          totalPrice: this.totalPrice,
        }),
      );
    },

    loadFromLocalStorage() {
      if (typeof window === 'undefined') return;
      const data = localStorage.getItem('cart');
      if (!data) return;

      const { items, totalQuantity, totalPrice } = JSON.parse(data);
      this.items = items.map((item) => ({
        ...item,
        price: Number(item.price),
      }));
      this.totalQuantity = totalQuantity;
      this.totalPrice = totalPrice;
    },
  },
});
