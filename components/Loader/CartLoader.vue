<script setup lang="ts"></script>

<template>
  <div class="cart-page">
    <div class="cart-page__inner">
      <div class="order-page">
        <div class="order-page__product">
          <div class="order-page__product-image" />
          <div class="order-page__product-details">
            <h3 class="order-page__product-name"></h3>
            <div class="order-page__product-info">
              <p class="order-page__product-price"></p>
              <p class="order-page__product-quantity"></p>
            </div>
          </div>
        </div>

        <div class="order-summary"></div>
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
        border-radius: 25px;
        background: #e7e7e7;
      }

      &-details {
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-between;
      }

      &-name {
        width: 250px;
        height: 40px;
        border-radius: 25px;
        background: #e7e7e7;
      }

      &-info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-price,
      &-quantity {
        width: 130px;
        height: 40px;
        border-radius: 25px;
        background: #e7e7e7;
        margin: 5px;
      }
    }

    .order-page__products {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
}
</style>
