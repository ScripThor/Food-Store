<script setup lang="ts">
defineProps({
  value: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['increase', 'decrease']);
</script>

<template>
  <div class="counter">
    <button class="counter__button" @click="emit('decrease')">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 12L18 12"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div class="counter__number">{{ value }}</div>
    <button class="counter__button" @click="emit('increase')">
      <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 12H20M12 4V20"
          stroke="#000000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped lang="scss">
.counter {
  min-width: 85px;
  background-color: #d6d6d6;
  align-items: center;
  border-radius: 25px;
  color: #000;
  display: flex;
  justify-content: space-between;
  line-height: 16px;
  position: relative;
  transition: background-color 0.2s ease-in-out;

  &__number {
    width: 24px;
    font-size: 19px;
    font-weight: 700;
    margin: 0 auto;
    text-align: center;
    user-select: none;
  }

  &__button {
    transition: all 0.2s ease-in-out;
    border-radius: 25px;
    padding: 0 4px;

    & svg {
      width: 25px;
      height: 25px;
      margin-top: 4px;
    }

    &:hover {
      background-color: #c8c8c8;
    }

    &--overlay {
      position: absolute;
      width: 100% !important;
    }

    &--hidden {
      pointer-events: none;
      visibility: hidden;
      opacity: 0;
    }
  }
}
</style>
