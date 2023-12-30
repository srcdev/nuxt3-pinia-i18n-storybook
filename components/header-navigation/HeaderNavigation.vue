<template>
  <focus-trap v-model:active="navActive" :clickOutsideDeactivates="true">
    <nav class="navigation__wrapper" tabindex="-1">
      <div class="menu__wrapper">
        <button type="button" :class="['menu__button', { open: navActive }]" @click="toggleMenu($event)">
          <Icon :name="navActive ? 'material-symbols:close' : 'solar:hamburger-menu-linear'" class="menu__button-icon" />
        </button>
      </div>
      <div :class="['menu__items', { open: navActive }]">
        <p class="text-header-medium">{{ t("components.header-navigation.title") }}</p>
        <details class="nav-details" v-for="(item, key, index) in navItems" ref="itemRefs">
          <summary>
            <p><Icon name="radix-icons:chevron-down" class="nav-details-icon mr-8" />{{ item.summary }}</p>
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
  </focus-trap>
</template>

<script setup lang="ts">
  import { FocusTrap } from "focus-trap-vue";

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

  const navActive = ref(false);
  const activeDetailsIndex = ref<number | null>(null);

  const toggleMenu = (event: any) => {
    navActive.value = !navActive.value;
    activeDetailsIndex.value = null;
  };

  // Handle Top nav expander
  const itemRefs = ref<any>([]);
  // const handleSummary = (index: number) => {
  //   console.log(`handleSummary(${index}):`, itemRefs.value[index].attributes);
  //   activeDetailsIndex.value = index === activeDetailsIndex.value ? null : index;
  // };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .navigation {
    &__wrapper {
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
        &:hover {
          cursor: pointer;
          text-decoration: underline;
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
        .nav-details-icon {
          transition: all ease-in-out 350ms;
          transform: scale(1, -1);
        }

        summary {
          color: $color-grey-5;
          font-weight: 700;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
          &:focus {
            @include a11y-focus;
          }
        }
      }
    }

    &__button {
      $self: &;
      aspect-ratio: 1;
      width: 30px;

      background-color: $color-grey-5;
      border: 1px solid $color-grey-10; // --border-color-dark-grey
      border-radius: 6px;

      outline: none;
      padding: 2px;
      z-index: 3;
      cursor: pointer;
      &:hover {
      }
      &:focus {
        #{ $self }-icon {
          @include a11y-focus;
        }
      }

      &-icon {
        border: 1px solid $color-grey-10;
        border-radius: 3px;
      }
    }
  }
</style>
