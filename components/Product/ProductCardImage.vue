<script setup lang="ts">
import type { Product } from '@/types/products';

type Props = {
  product: Product;
};

const props = defineProps<Props>();

const isErrorImage = ref(false);

const productImage = computed(() => {
  if (!props.product?.image || isErrorImage.value) {
    return '/images/no-image-product-card.webp';
  }
  return props.product.image;
});
</script>

<template>
  <a :href="`/product/${props.product.slug}/`" class="product-card-image">
    <img
      :src="productImage"
      :title="props.product.name"
      :alt="props.product.name"
      class="product-card-image__media"
      loading="lazy"
    />
  </a>
</template>

<style lang="scss" scoped>
.product-card-image {
  position: relative;
  height: 121px;
  overflow: hidden;
  border-radius: 16px;

  @include media('>=desktop-mini') {
    height: 185px;
  }

  &__media {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
