<script setup lang="ts"></script>

<template>
  <div class="header__search">
    <form>
      <div class="header__search-inner">
        <input
          placeholder="Например: филадельфия"
          type="text"
          value=""
          class="header__search-input"
        />
        <add-to-cart-button type="submit" class="header__search-submit">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            class="svg-inline--fa fa-search fa-w-16"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              class=""
            ></path>
          </svg>
        </add-to-cart-button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.header {
  &__search-inner {
    position: relative;
    width: 275px;
  }

  &__search-input {
    background-color: rgb(242, 242, 242);
    box-sizing: border-box;
    color: rgb(181, 181, 181);
    font-size: 12px;
    height: 40px;
    padding-left: 20px;
    padding-right: 50px;
    width: 100%;
    border-style: none;
    border-radius: 40px;
  }

  &__search-submit {
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.09) 0 3px 6px;
    color: var(--primaty-text);
    cursor: pointer;
    font-size: 14px;
    height: 40px;
    justify-content: center;
    top: 0;
    width: 40px;
    border-radius: 50%;
    background-color: var(--primary-color);
    display: flex;
    position: absolute;
    right: 0;

    & svg {
      width: 25px;
    }
  }
}
</style>
