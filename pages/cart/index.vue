<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import CartLoader from '@/components/Loader/CartLoader.vue';
import TheCounter from '@/components/Counter/TheCounter.vue';
import type { Product } from '@/types/products';
import BaseButton from '@/components/Button/BaseButton.vue';

const cartStore = useCartStore();
const isLoading = ref(true);
const isSuccess = ref(false);

onMounted(async () => {
  cartStore.loadFromLocalStorage();
  isLoading.value = false;
});

const increaseQuantity = (item: Product) => {
  cartStore.incrementQuantity(item.id);
};

const decreaseQuantity = (item: Product) => {
  cartStore.decrementQuantity(item.id);
};

const totalItemPrice = (item: Product) => {
  return item.price * item.quantity;
};

const totalItemWeight = (item: Product) => {
  return item.weight * item.quantity;
};

const handleCheckout = () => {
  isLoading.value = true;

  setTimeout(() => {
    cartStore.clearCart();
    isLoading.value = false;
    isSuccess.value = true;
  }, 2000);
};
</script>

<template>
  <div class="cart-page">
    <div class="cart-page__inner">
      <h1 class="cart-page__title">Корзина</h1>

      <cart-loader v-if="isLoading" />

      <div
        v-else-if="cartStore.items.length === 0 && isSuccess == false"
        class="order-page__empty"
      >
        <p>Ваша корзина пуста.</p>
      </div>

      <div v-else class="order-page">
        <div v-if="!isSuccess">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="order-page__product"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="order-page__product-image"
            />
            <div class="order-page__product-details">
              <div class="order-page__product-main">
                <h3 class="order-page__product-name">{{ item.name }}</h3>
                <span class="order-page__product-weight"
                  >{{ totalItemWeight(item) }} г.</span
                >
              </div>
              <div class="order-page__product-info">
                <p class="order-page__product-price">
                  {{ totalItemPrice(item) }} руб.
                </p>
                <div class="order-page__product-quantity">
                  <the-counter
                    :value="item.quantity"
                    @increase="increaseQuantity(item)"
                    @decrease="decreaseQuantity(item)"
                  />
                </div>
                <button
                  class="remove-button"
                  @click="cartStore.removeFromCart(item.id)"
                >
                  Удалить
                </button>
              </div>
            </div>
          </div>
          <div class="order-page__footer">
            <div class="order-page__footer-submit">
              <base-button @click="handleCheckout">Оформить</base-button>
            </div>
            <div class="order-page__footer-summary">
              <p>Общее количество: {{ cartStore.totalQuantity }} шт.</p>
              <p>Общая стоимость: {{ cartStore.totalPrice }} руб.</p>
            </div>
          </div>
        </div>
        <div v-else class="order-page__success">
          Спасибо за Ваш заказ! Наша кухня уже начала для Вас готовить
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cart-page {
  padding: 20px;
  margin: auto;
  max-width: 800px;

  &__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--secondary-text);
  }

  .order-page {
    background-color: #f1f1f1;
    border-radius: 25px;
    display: flex;
    flex-direction: column;

    &__product {
      display: flex;
      gap: 20px;
      align-items: center;
      border-bottom: 1px solid;
      padding: 15px;

      &-image {
        width: 200px;
        height: 130px;
        object-fit: cover;
        border-radius: 8px;
      }

      &-details {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
      }

      &-main {
        display: flex;
        align-items: center;
        gap: 20px;
      }

      &-name {
        font-size: 18px;
        font-weight: bold;
        color: var(--secondary-text);
      }

      &-weight {
        color: #9f9f9f;
        font-weight: 600;
      }

      &-info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-price {
        font-size: 20px;
        margin: 5px;
        color: #000;
        font-weight: 600;
      }

      &-quantity {
        font-size: 16px;
        margin: 5px;
      }
    }

    &__footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 30px;

      &-summary {
        font-size: 25px;
        font-weight: bold;
        text-align: right;
      }
    }

    &__empty {
      text-align: center;
      font-size: 18px;
      color: gray;
    }

    &__success {
      color: var(--primary-color);
      padding: 50px 10px;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
    }

    .order-page__products {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}

.order .remove-button {
  background-color: red;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }
}
</style>
