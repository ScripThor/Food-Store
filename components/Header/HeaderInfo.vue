<script setup lang="ts">

</script>

<template>
  <div class="header__info">
    <div class="header__info-block">
      <div class="header__info-icon">
        <nuxt-img src="/icons/icn-work-time.svg" alt="WhatsUp"/>
      </div>
      <div class="header__info-item">
        <small>режим работы</small>
        <strong>10:00 - 23:00</strong>
      </div>
      <div class="header__info-tel">
        <a href="tel:8 (800) 500-02-20">8 (800) 500-02-20</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header__info {
  &-block {
    align-items: center;
    display: flex;
  }

  &-icon {
    display: flex;
    margin-right: 10px;

    & img {
      width: 40px;
    }
  }

  &-item {
    margin-right: 35px;
    position: relative;
    text-align: center;

    & small {
      color: #c9d1d9;
      display: block;
      font-size: 10px;
      font-weight: 600;
    }

    & strong {
      color: var(--primary-text);
      display: block;
      font-size: 15px;
      font-weight: 700;
    }

    &:after {
      background-image: url('@/assets/images/icons/slash.svg');
      background-position: 50%;
      background-size: contain;
      content: "";
      height: 24px;
      position: absolute;
      right: -22px;
      top: 50%;
      transform: translateY(-50%);
      width: 7px;
    }
  }
  &-tel a {
    color: var(--primary-text);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    text-decoration: none;
  }

}
</style>