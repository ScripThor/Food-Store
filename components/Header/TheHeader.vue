<script setup lang="ts">
import TheHeaderDesktop from "@/components/Header/TheHeaderDesktop.vue";
import TheHeaderMobile from "@/components/Header/TheHeaderMobile.vue";

const { isDesktop } = useDevice()
</script>

<template>
  <the-header-desktop v-if="isDesktop"/>
  <the-header-mobile v-else/>
</template>