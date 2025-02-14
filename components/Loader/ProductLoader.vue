<script setup lang="ts">
import AddToCartButton from '@/components/Button/AddToCartButton.vue';
</script>

<template>
  <div class="product-page container">
    <div class="product">
      <div class="product__image"></div>
      <div class="product__content">
        <div class="product__content-title">
          <h1></h1>
          <span></span>
        </div>
        <div class="product__content-description"></div>
        <div class="product__content-footer"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-page {
  margin-top: 50px;
}

.product {
  display: flex;
  gap: 20px;

  &__image {
    width: 600px;
    height: 400px;
    background: #e7e7e7;
    border-radius: 25px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px 0;

    &-title {
      & h1 {
        width: 400px;
        height: 40px;
        border-radius: 25px;
        background: #e7e7e7;
      }

      & span {
        width: 200px;
        height: 40px;
        display: block;
        border-radius: 25px;
        background: #e7e7e7;
      }
    }

    &-description {
      width: 500px;
      height: 150px;
      display: block;
      border-radius: 25px;
      background: #e7e7e7;
    }

    &-footer {
      width: 500px;
      height: 40px;
      border-radius: 25px;
      background: #e7e7e7;
    }
  }
}
</style>
