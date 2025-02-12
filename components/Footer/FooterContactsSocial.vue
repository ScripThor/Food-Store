<script setup lang="ts"></script>

<template>
  <div class="footer__social">
    <a
      target="_blank"
      href="https://vk.com/"
      rel="nofollow noopener noreferrer"
      class="footer__social-item"
    >
      <add-to-cart-button class="footer__social-link">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 576 512"
            font-size="25"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"
            ></path>
          </svg>
        </span>
      </add-to-cart-button>
    </a>
    <a
      target="_blank"
      href="https://www.youtube.com/"
      rel="nofollow noopener noreferrer"
      class="footer__social-item"
    >
      <add-to-cart-button class="footer__social-link">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 1024 1024"
            font-size="25"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"
            ></path>
          </svg>
        </span>
      </add-to-cart-button>
    </a>
    <a
      target="_blank"
      href="https://ok.ru/"
      rel="nofollow noopener noreferrer"
      class="footer__social-item"
    >
      <add-to-cart-button class="footer__social-link">
        <span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 320 512"
            font-size="25"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M275.1 334c-27.4 17.4-65.1 24.3-90 26.9l20.9 20.6 76.3 76.3c27.9 28.6-17.5 73.3-45.7 45.7-19.1-19.4-47.1-47.4-76.3-76.6L84 503.4c-28.2 27.5-73.6-17.6-45.4-45.7 19.4-19.4 47.1-47.4 76.3-76.3l20.6-20.6c-24.6-2.6-62.9-9.1-90.6-26.9-32.6-21-46.9-33.3-34.3-59 7.4-14.6 27.7-26.9 54.6-5.7 0 0 36.3 28.9 94.9 28.9s94.9-28.9 94.9-28.9c26.9-21.1 47.1-8.9 54.6 5.7 12.4 25.7-1.9 38-34.5 59.1zM30.3 129.7C30.3 58 88.6 0 160 0s129.7 58 129.7 129.7c0 71.4-58.3 129.4-129.7 129.4s-129.7-58-129.7-129.4zm66 0c0 35.1 28.6 63.7 63.7 63.7s63.7-28.6 63.7-63.7c0-35.4-28.6-64-63.7-64s-63.7 28.6-63.7 64z"
            ></path>
          </svg>
        </span>
      </add-to-cart-button>
    </a>
  </div>
</template>

<style scoped lang="scss">
.footer {
  &__social {
    &-item {
      margin-right: 10px;
    }

    &-link {
      color: #fff;
      background: var(--primary-color);
      padding: 10px 10px;
      border-radius: 50%;

      & span {
        display: flex;
      }

      &:hover {
        color: #bebebe;
        background: var(--primary-color--hover);
      }
    }
  }
}
</style>
