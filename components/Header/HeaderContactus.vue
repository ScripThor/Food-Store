<script setup lang="ts"></script>

<template>
  <div class="header__contactus">
    <div class="header__contactus-text">Свяжитесь с нами</div>
    <div class="header__contactus-drop">
      <a
        href="https://t.me/dreake88"
        class="header__contactus-social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/assets/images/icons/icn-telegram_circle.svg"
          alt="Telegram"
        />
      </a>
      <a
        href="https://wa.me/+79811114942"
        class="header__contactus-social"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/images/icons/icn-whatsup__circle.svg" alt="WhatsUp" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.header__contactus {
  position: relative;
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;

  &-text {
    color: var(--primary-text);
    transition: color 0.3s ease;
    position: relative;
    top: 1px;
    font-weight: bold;
    font-size: 14px;
    line-height: 21px;
    cursor: default;
  }

  &-drop {
    position: absolute;
    top: 100%;
    left: 0;
    background: #fff;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.2s linear,
      visibility 0.2s linear;

    & img {
      width: 40px;
    }
  }

  &-social {
    margin-right: 10px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    transition: 0.2s opacity linear;
  }

  &:hover {
    .header__contactus-text {
      color: var(--primery-text--hover);
    }

    .header__contactus-drop {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
