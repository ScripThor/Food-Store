<script setup lang="ts">

</script>

<template>
  <div class="header__cart">
    <button class="header__cart-button" type="button" title="Открыть корзину">
      <div class="header__cart-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8.02409L3.93041 18.9992H16.0707L19.0011 8.02409M1 8.02409H19.0011M1 8.02409L7.69807 1M19.0011 8.02409L12.303 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path>
          <path d="M7.69812 12.0971V15.0482M12.303 12.0971V15.0482" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          </path>
        </svg>
      </div>
      <div class="header__cart-info">
        <div class="header__cart-price">
          <span class="header__cart-count">0</span>
          <span class="header__cart-currency">&nbsp;<label>руб.</label>
          </span>
        </div>
        <div class="header__cart-quantity">
          <span class="header__cart-count">0</span>
          <span class="header__cart-pieces">шт.</span>
        </div>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
.header__cart {

  &-button {
    color: var(--primary-text);
    border-radius: 60px;
    position: relative;
    z-index: 1;
    transition: 0.2s linear;
    width: auto;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0;


  }

  &-icon {
    display: inline-block;
    padding: 0 20px 0 8px;

    & svg {
      display: block;
    }
  }

  &-info {
    font-size: 12px;
    line-height: 18px;
    padding-left: 14px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      width: 1px;
      left: -2px;
      top: 0;
      height: 30px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }

  &-price {
    font-weight: 700;
    display: block;
    margin-bottom: -5px;
    position: relative;
    top: -3px;
  }

  &-quantity {
    opacity: 0.5;
  }
}
</style>