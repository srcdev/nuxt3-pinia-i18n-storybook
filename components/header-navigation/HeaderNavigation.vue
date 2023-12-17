<template>
  <nav class="navigation__wrapper">
    <div class="menu__wrapper">
      <button type="button" :class="['menu__button', { open: navActive }]" @click="toggleMenu($event)"></button>
    </div>
    <div :class="['menu__items', { open: navActive }]">
      <p class="text-header-medium">{{ t("components.header-navigation.title") }}</p>
      <details v-for="item in navItems">
        <summary>
          <p>{{ item.summary }}</p>
        </summary>
        <div>
          <ul>
            <li v-for="link in item.links">
              <NuxtLink class="menu__items_link" :to="link.url">{{ link.text }}</NuxtLink>
            </li>
          </ul>
        </div>
      </details>
    </div>
  </nav>
</template>

<script setup lang="ts">
  // import { useAccountStore } from "@/stores/store.account";
  // import { useRootStore } from "@/stores/store.root";
  // import { useI18n } from "vue-i18n";

  const { t } = useI18n();

  console.log(t("components.header-navigation.title"));
  console.log(t("components.header-navigation.nav-links"));

  // const navItems = toRaw(t("components.header-navigation.nav-links"));
  const navItems = {
    examples: {
      summary: "Examples",
      links: [
        {
          text: "Sample layout",
          url: "/samples/components",
        },
        {
          text: "Language switcher",
          url: "/lang-switcher",
        },
        {
          text: "Test form",
          url: "/samples/forms/guided-form",
        },
      ],
    },
    ui: {
      summary: "UI Components",
      links: [
        {
          text: "Parallax section",
          url: "/",
        },
      ],
    },
  };
  // const rootStore = useRootStore();
  // const accountStore = useAccountStore();

  const navActive = ref(false);

  const toggleMenu = (event: any) => {
    navActive.value = !navActive.value;
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .navigation {
    &__wrapper {
      // position: relative;
      display: grid;

      & > * {
        grid-row: 1;
        grid-column: 1;
      }
    }
  }
  .menu {
    &__wrapper {
      border: 1px solid $color-grey-9;
      aspect-ratio: 1;
      background-color: $color-grey-8;
      border: 1px solid $color-grey-10;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
    }

    &__items {
      background-color: $color-grey-8;
      border: 1px solid $color-grey-10;
      box-shadow: 5px 5px 10px 0px $color-grey-8;
      border-radius: 6px;
      border: 1px solid $color-grey-6;
      position: absolute;
      right: 30px;
      top: 30px;
      z-index: -1;
      padding: 12px;
      color: $color-grey-4;
      opacity: 0;
      transition: opacity ease-in-out 200ms;
      min-width: 200px;
      &.open {
        opacity: 1;
        z-index: 2;
      }
      &_link {
        color: $color-grey-10;
        text-decoration: none;
        line-height: 14px;
        margin-left: 6px;
      }
    }

    &__button {
      aspect-ratio: 1;
      background: $color-grey-1 url("/assets/images/icons/burger-menu.svg") 0 0 no-repeat;
      background-size: contain;
      width: 24px;
      outline: none;
      border: 1px solid transparent;
      z-index: 3;
      cursor: pointer;
      &:hover,
      &:focus {
        background-color: $color-grey-2;
        border-color: $color-grey-3;
        outline: 1px solid #fff;
        border-radius: 4px;
      }

      &.open {
        background-image: url("/assets/images/icons/close.svg");
      }
    }
  }
</style>
