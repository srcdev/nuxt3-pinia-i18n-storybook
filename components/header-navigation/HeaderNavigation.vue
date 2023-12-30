<template>
  <nav class="navigation__wrapper">
    <div class="menu__wrapper">
      <button type="button" :class="['menu__button', { open: navActive }]" @click="toggleMenu($event)">
        <Icon :name="navActive ? 'material-symbols:close' : 'solar:hamburger-menu-linear'" class="menu__button-icon" />
      </button>
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
        {
          text: "Data Fetching",
          url: "/samples/server-routes",
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
        {
          text: "Installed icons",
          url: "/samples/installed-icons",
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
      aspect-ratio: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__items {
      background-color: $color-grey-8;
      border: 1px solid $color-grey-10;
      box-shadow: 5px 5px 10px 0px $color-grey-8;
      border-radius: 6px;
      border: 1px solid $color-grey-6;
      position: absolute;
      right: 12px;
      top: 12px;
      z-index: -1;
      padding: 12px;
      color: $color-grey-4;
      opacity: 0;
      transition: opacity ease-in-out 200ms;
      min-width: 200px;

      @media all and (min-width: 768px) {
        right: 30px;
        top: 30px;
      }
      &.open {
        opacity: 1;
        z-index: 2;
      }
      &_link {
        display: block;
        color: $color-grey-5;
        text-decoration: none;
        line-height: 14px;
        margin-left: 6px;
        &:hover,
        &:focus {
          cursor: pointer;
          text-decoration: underline;
        }
      }

      details {
        summary {
          color: $color-grey-5;
          font-weight: 700;
          &:hover,
          &:focus {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }

    &__button {
      aspect-ratio: 1;
      width: 30px;

      background-color: $color-grey-5;
      border: 1px solid $color-grey-10; // --border-color-dark-grey
      border-radius: 6px;

      outline: none;
      padding: 2px;
      z-index: 3;
      cursor: pointer;
      // &:hover,
      // &:focus {
      //   border-color: $color-grey-3;
      // }

      &-icon {
        border: 1px solid $color-grey-10;
        border-radius: 3px;
      }
    }
  }
</style>
