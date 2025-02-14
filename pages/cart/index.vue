<script setup lang="ts">
import { useCartStore } from '@/stores/useCartStore';
import CartLoader from '@/components/Loader/CartLoader.vue';
import TheCounter from '@/components/Counter/TheCounter.vue';

const cartStore = useCartStore();
const isLoading = ref(true);

onMounted(async () => {
  cartStore.loadFromLocalStorage();
  isLoading.value = false;
});

const increaseQuantity = (item) => {
  item.quantity++;
};

const decreaseQuantity = (item) => {
  if (item.quantity > 0) {
    item.quantity--;
  }
};
</script>

<template>
  <div class="cart-page">
    <div class="cart-page__inner">
      <h1 class="cart-page__title">Корзина</h1>

      <cart-loader v-if="isLoading" />

      <div v-else-if="cartStore.items.length === 0" class="order-page__empty">
        <p>Ваша корзина пуста.</p>
      </div>

      <div v-else class="order-page">
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
            <h3 class="order-page__product-name">{{ item.name }}</h3>
            <div class="order-page__product-info">
              <p class="order-page__product-price">{{ item.price }} руб.</p>
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

        <div class="order-summary">
          <p>Общее количество: {{ cartStore.totalQuantity }} шт.</p>
          <p>Общая стоимость: {{ cartStore.totalPrice }} руб.</p>
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

      &-name {
        font-size: 18px;
        font-weight: bold;
        color: var(--secondary-text);
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

    &__empty {
      text-align: center;
      font-size: 18px;
      color: gray;
    }

    .order-page__products {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}

.order-summary {
  margin-right: 50px;
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
  text-align: right;
}

.remove-button {
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
