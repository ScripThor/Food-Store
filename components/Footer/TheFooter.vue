<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <footer-info />
      <footer-contacts />
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: var(--secondary-color);

  &__container {
    width: 100%;
    display: flex;
    padding: 40px 20px;
    flex-direction: column;
    align-items: center;
  }

  @include media('>desktop-mini') {
    &__container {
      padding: 40px calc((100% - 1200px) / 2);
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
