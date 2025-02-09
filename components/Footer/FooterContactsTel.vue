<script setup lang="ts"></script>

<template>
  <div class="footer__tel">
    <span>Свяжитесь с нами</span>
    <a href="tel:8 (800) 500-02-20">8 (800) 500-02-20</a>
  </div>
</template>

<style scoped lang="scss">
.footer {
  &__tel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & a {
      font-size: 25px;
      font-weight: 600;
      color: var(--primary-text);

      &:hover {
        color: var(--primery-text--hover);
      }
    }
  }
}
</style>
