<template>
  <focus-trap v-model:active="navActive" :clickOutsideDeactivates="true">
    <nav class="navigation__wrapper" tabindex="-1">
      <div class="menu__wrapper">
        <IconButtonClose v-if="navActive" type="button" @click="toggleMenu()" size="large" button-text="Close" style-class-passthrough="menu__button-icon" />
        <IconButtonBurger v-else type="button" @click="toggleMenu()" size="large" button-text="Login" />
      </div>
      <div v-show="navActive" :class="['menu__items', { open: navActive }]">
        <p class="text-header-medium navigation-title">{{ t("components.header-navigation.title") }}</p>
        <div class="nav-details-wrapper">
          <template v-for="(item, key, index) in navItems">
            <details class="nav-details" :class="[{ hide: item.hidden }]" ref="detailsRefs" @click="handleSummary(index)">
              <summary class="nav-summary">
                <p class="nav-summary-title nav-summary-action" v-if="item.hasChildren"><Icon name="radix-icons:chevron-down" class="nav-details-icon mr-8" />{{ item.summary }}</p>
                <p class="nav-summary-title" v-else>
                  <NuxtLink class="nav-summary-action" :to="item.url"><Icon name="radix-icons:caret-right" class="nav-details-icon mr-8" />{{ item.summary }}</NuxtLink>
                </p>
              </summary>
              <div v-if="item.hasChildren">
                <ul>
                  <template v-for="link in item.links">
                    <li :class="[{ hide: link.hidden }]">
                      <NuxtLink class="menu__items_link" :to="link.url"><Icon name="radix-icons:caret-right" class="icon" />{{ link.text }}</NuxtLink>
                    </li>
                  </template>
                </ul>
              </div>
            </details>
          </template>
        </div>
      </div>
    </nav>
  </focus-trap>
</template>

<script setup lang="ts">
  import { storeToRefs } from "pinia";
  import { FocusTrap } from "focus-trap-vue";

  const { t } = useI18n();

  const { authenticated } = storeToRefs(useAccountStore());

  const { navItems } = useNavItems(authenticated.value);

  const navActive = ref(false);
  const activeDetailsIndex = ref<number | null>(null);

  const toggleMenu = () => {
    navActive.value = !navActive.value;
    activeDetailsIndex.value = null;
  };

  const detailsRefs = ref<HTMLElement[]>([]);
  const handleSummary = async (clickedIndex: number) => {
    detailsRefs.value.forEach((element, index) => {
      if (clickedIndex !== index) {
        element.removeAttribute("open");
      }
    });
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .navigation {
    &__wrapper {
      display: grid;
      position: relative;

      & > * {
        grid-row: 1;
        grid-column: 1;
      }
    }

    &-title {
      padding: 18px 28px;
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
      background-color: var(--color-grey-8);
      border: 1px solid var(--color-orange-5);
      // box-shadow: 2px 2px 10px 0px var(--color-orange-5);
      border-radius: 6px;
      outline: 1px solid $color-grey-6;
      position: absolute;
      right: -6px;
      top: -6px;
      z-index: -1;
      padding: 0;
      color: $color-grey-4;
      opacity: 0;
      overflow: hidden;
      transition: opacity ease-in-out 200ms;
      min-width: 250px;

      @media all and (min-width: 768px) {
        right: -10px;
        top: -10px;
      }
      &.open {
        opacity: 1;
        z-index: 11;
      }
      &_link {
        border-radius: 1px;
        color: var(--color-grey-5);
        text-decoration: none;
        line-height: 20px;
        margin-left: 0px;
        padding-right: 8px;

        display: flex;
        align-items: center;
        justify-content: left;
        gap: 8px;

        .icon {
          aspect-ratio: 1;
          width: 22px;
        }

        &:hover {
          color: var(--white);
          cursor: pointer;
          background-color: var(--color-orange-4);
        }
        &:focus {
          @include a11y-focus;
        }
      }

      .nav-details {
        &:not([open]) {
          .nav-details-icon {
            transform: scale(1, 1);
          }
        }

        &-wrapper {
          margin-top: 4px;
        }
        .nav-details-icon {
          transition: all ease-in-out 350ms;
          transform: scale(1, -1);
        }
      }

      .nav-summary {
        color: var(--color-grey-5);
        font-weight: 700;
      }

      .nav-summary-title {
        background-color: transparent;
        padding: 0;
        & * {
          color: var(--color-grey-5);
        }
      }

      .nav-summary-action {
        border-bottom: 2px solid var(--color-orange-5);
        display: block;
        text-decoration: none;
        padding: 6px;

        &:hover {
          color: var(--white);
          cursor: pointer;
          background-color: var(--color-orange-5);
          text-decoration: none;
        }
        &:focus {
          @include a11y-focus;
        }
      }
    }
  }
</style>
