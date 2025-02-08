<script setup lang="ts">
import TheHeader from "~/components/Header/TheHeader.vue";

</script>

<template>
  <the-header />
    <main class="wrapper">
      <div class="page">
        <slot />
      </div>
    </main>
  <the-footer />
</template>

<style scoped>
:deep(.page) {
  min-height: calc(100vh - 118px);
}

.wrapper {
  position: relative;
}
</style>