<script setup lang="ts">
import type { Product } from '@/types/products';

type Props = {
  product: Product;
};

const props = defineProps<Props>();
</script>

<template>
  <a
      :href="`/product/${props.product.slug}/`"
      class="product-card-content"
  >
    <div class="product-card-content__header">
      <span class="product-card-content__title">
        {{ props.product.name }}
      </span>
    </div>
    <div
        class="product-card-content__text"
    >
      {{ props.product.description }}
    </div>
  </a>
</template>

<style scoped lang="scss">
.product-card-content {
  display: block;
  flex-grow: 1;
  padding: 0 8px 8px;

  @include media('>=desktop-mini') {
    padding: 0 16px 16px;
    line-height: 21px;
  }

  &__header {
    max-height: 36px;
    overflow: hidden;
    font-weight: 600;
    line-height: 18px;

    @include media('>=desktop-mini') {
      max-height: 42px;
      line-height: 21px;
    }
  }

  &__title {
    margin-right: 4px;
    font-size: 14px;
    color: var(--primary-text);
    word-break: break-word;

    @include media('>=desktop-mini') {
      font-size: 16px;
    }
  }

  &__text {
    display: none;

    @include media('>=desktop-mini') {
      display: -webkit-box;
      margin-top: 4px;
      overflow: hidden;
      font-size: 14px;
      font-weight: 600;
      line-height: 18px;
      color: var(--primery-text--hover);
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>