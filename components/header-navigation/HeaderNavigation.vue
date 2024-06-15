<template>
  <focus-trap v-model:active="navActive" :clickOutsideDeactivates="true">
    <nav role="navigation" aria-label="Main menu" class="navigation__wrapper" tabindex="-1">
      <div class="menu__wrapper">
        <IconButtonClose v-if="navActive" aria-expanded="true" aria-controls="main-menu" type="button" @click="toggleMenu()" size="large" button-text="Close" style-class-passthrough="menu__button-icon" />
        <IconButtonBurger v-else type="button" aria-expanded="false" aria-controls="main-menu" @click="toggleMenu()" size="large" button-text="Login" data-test-id="burger-nav" />
      </div>
      <div v-show="navActive" id="main-menu" :class="['menu__items', { open: navActive }]">
        <p class="text-header-medium navigation-title">{{ t("components.header-navigation.title") }}</p>

        <ClientOnly>
          <template v-if="navitemsLoaded">
            <div class="nav-details-wrapper">
              <template v-for="(item, key, index) in navItems">
                <div :class="['nav-details', { hide: item.hidden }]">
                  <button @click.stop.prevent="toggleExpandItems(index)" ref="triggerRefs" class="nav-details-trigger text-normal" :id="`main-nav-${key}-trigger`" aria-expanded="false" :aria-controls="`main-nav-${key}-content`">
                    <span class="nav-summary-title nav-summary-action" v-if="item.hasChildren"><Icon name="radix-icons:chevron-down" class="nav-details-icon mr-8" />{{ item.summary }}</span>
                    <span class="nav-summary-title" v-else>
                      <NuxtLink class="nav-summary-action" :to="item.url"><Icon name="radix-icons:caret-right" class="nav-details-icon mr-8" />{{ item.summary }}</NuxtLink>
                    </span>
                  </button>
                  <div ref="contentRefs" class="nav-details-content expander" :aria-labelledby="`main-nav-${key}-trigger`" :id="`main-nav-${key}-content`" role="region" aria-hidden="true" v-if="item.hasChildren">
                    <ul class="expander-inner">
                      <template v-for="link in item.links">
                        <li :class="[{ hide: link.hidden }]">
                          <NuxtLink class="menu__items_link" :to="link.url"><Icon name="radix-icons:caret-right" class="icon" />{{ link.text }}</NuxtLink>
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
              </template>
            </div>
          </template>
        </ClientOnly>
      </div>
    </nav>
  </focus-trap>
</template>

<script setup lang="ts">
  import { FocusTrap } from "focus-trap-vue";

  const { t } = useI18n();

  const navActive = ref(false);
  const activeDetailsIndex = ref<number | null>(null);

  const toggleMenu = () => {
    navActive.value = !navActive.value;
    activeDetailsIndex.value = null;
    collapseAll();
  };

  const triggerRefs = ref<HTMLElement[]>([]);
  const contentRefs = ref<HTMLElement[]>([]);

  const collapseAll = () => {
    triggerRefs.value.forEach((element) => {
      element.setAttribute("aria-expanded", "false");
    });
    contentRefs.value.forEach((element) => {
      element.setAttribute("aria-hidden", "true");
    });
  };

  const toggleExpandItems = (clickedIndex: number) => {
    const currentKey = triggerRefs.value[clickedIndex].getAttribute("aria-controls");

    contentRefs.value.forEach((element, index) => {
      const contentKey = element.id;
      if (currentKey === contentKey) {
        const currentState = element.getAttribute("aria-hidden");
        const newState = currentState !== "true";
        triggerRefs.value[clickedIndex].setAttribute("aria-expanded", String(newState));
        contentRefs.value[index].setAttribute("aria-hidden", String(newState));
      } else {
        triggerRefs.value[clickedIndex].setAttribute("aria-expanded", "false");
        contentRefs.value[index].setAttribute("aria-hidden", "true");
      }
    });
  };

  const { isSignedIn } = useIsSignedIn();
  const { navItems, navitemsLoaded } = useNavItems(isSignedIn.value);
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
      outline: 1px solid var(--color-grey-6);
      position: absolute;
      right: -6px;
      top: -6px;
      z-index: -1;
      padding: 0;
      color: var(--color-grey-4);
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
        border: 1px solid transparent;

        border-radius: 1px;
        color: var(--color-grey-5);
        text-decoration: none;
        line-height: 20px;
        margin: 2px;
        padding-right: 8px;

        display: flex;
        align-items: center;
        justify-content: left;
        gap: 8px;

        padding-block: 0.8rem;

        .icon {
          aspect-ratio: 1;
          width: 22px;
        }

        &:hover {
          color: var(--color-grey-5);
          cursor: pointer;
          background-color: var(--color-grey-1);
          border: 1px solid var(--color-orange-5);
        }
        &:focus-visible {
          @include a11y-focus;
        }
      }

      .nav-details {
        &-trigger {
          background-color: var(--color-grey-8);
          border: none;
          color: var(--color-grey-5);
          display: block;
          padding: 0;
          text-align: left;
          width: 100%;
          cursor: pointer;
          transition: all ease-in-out 350ms;

          &:hover {
            color: var(--white);
            cursor: pointer;
            background-color: var(--color-orange-5);
            text-decoration: none;
          }
          &:focus-visible {
            @include a11y-focus;
          }

          &[aria-expanded="true"] {
            .nav-details-icon {
              transform: scale(1, 1);
            }
          }
        }

        // &-content {
        //   display: grid;
        //   grid-template-rows: 0fr;
        //   transition: all ease-in-out 500ms;

        //   > ul {
        //     overflow: hidden;
        //   }
        //   &[aria-hidden="false"] {
        //     grid-template-rows: 1fr;
        //   }
        // }

        // &:not([open]) {
        //   .nav-details-icon {
        //     transform: scale(1, 1);
        //   }
        // }

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
        list-style-type: none;
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
        &:focus-visible {
          @include a11y-focus;
        }
      }
    }
  }
</style>
