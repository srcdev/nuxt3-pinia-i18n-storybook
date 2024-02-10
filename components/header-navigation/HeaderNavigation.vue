<template>
  <focus-trap v-model:active="navActive" :clickOutsideDeactivates="true">
    <nav class="navigation__wrapper" tabindex="-1">
      <div class="menu__wrapper">
        <button type="button" :class="['menu__button', { open: navActive }, { closed: !navActive }]" data-test-id="burger-nav" @click="toggleMenu($event)">
          <span class="sr-only">{{ t("components.header-navigation.toggle-btn") }}</span>
          <Icon :name="navActive ? 'material-symbols:close' : 'solar:hamburger-menu-linear'" class="menu__button-icon" />
        </button>
      </div>
      <div :class="['menu__items', { open: navActive }]">
        <p class="text-header-medium navigation-title">{{ t("components.header-navigation.title") }}</p>
        <div class="nav-details-wrapper">
          <template v-for="(item, key, index) in navItems">
            <details class="nav-details" :class="[{ hide: item.hidden }]" ref="itemRefs">
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
                      <NuxtLink class="menu__items_link" :to="link.url"><Icon name="radix-icons:caret-right" class="ml-6 mr-6" />{{ link.text }}</NuxtLink>
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

  const navItems = {
    home: {
      summary: "Home",
      hasChildren: false,
      url: "/",
      hidden: false,
      links: []
    },
    account: {
      summary: "Account",
      hasChildren: true,
      url: "/",
      hidden: false,
      links: [
        {
          text: "Login",
          url: "/login",
          hidden: authenticated.value
        },
        {
          text: "Logout",
          url: "/logout",
          hidden: !authenticated.value
        },
        {
          text: "Profile",
          url: "/profile",
          hidden: false
        }
      ]
    },
    examples: {
      summary: "Examples",
      hasChildren: true,
      url: "",
      hidden: false,
      links: [
        {
          text: "Sample layout",
          url: "/samples/components",
          hidden: true
        },
        {
          text: "Language switcher",
          url: "/lang-switcher",
          hidden: false
        },
        {
          text: "Multi Step form",
          url: "/samples/forms/guided-form",
          hidden: false
        },
        {
          text: "Example form",
          url: "/samples/forms/sample-form",
          hidden: false
        },
        {
          text: "Example buttons",
          url: "/samples/forms/sample-buttons",
          hidden: false
        },
        {
          text: "Update Store Action",
          url: "/samples/update-store",
          hidden: false
        },
        {
          text: "Data Fetching",
          url: "/samples/server-routes",
          hidden: false
        },
        {
          text: "Routed Pages",
          url: "/companies/some-company-id/details",
          hidden: false
        }
      ]
    },
    ui: {
      summary: "UI Components",
      hasChildren: true,
      url: "",
      hidden: false,
      links: [
        {
          text: "Current Weather",
          url: "/weather",
          hidden: false
        },
        {
          text: "Feature Spotlights",
          url: "/components/display-spotlights",
          hidden: false
        },
        {
          text: "Expanding Spotlights",
          url: "/components/expanding-spotlights",
          hidden: false
        },
        {
          text: "Display QR Code",
          url: "/display-qr-code",
          hidden: true
        },
        {
          text: "Masonry Grid",
          url: "/components/masonry-grid",
          hidden: false
        },
        {
          text: "Simple Grid",
          url: "/components/simple-grid",
          hidden: false
        },
        {
          text: "Parallax section",
          url: "/",
          hidden: false
        },
        {
          text: "Installed icons",
          url: "/samples/installed-icons",
          hidden: false
        }
      ]
    }
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
      background-color: $color-grey-8;
      border: 1px solid $color-grey-10;
      box-shadow: 5px 5px 10px 0px $color-grey-8;
      border-radius: 6px;
      border: 1px solid $color-grey-6;
      position: absolute;
      right: -6px;
      top: -6px;
      z-index: -1;
      padding: 0;
      color: $color-grey-4;
      opacity: 0;
      transition: opacity ease-in-out 200ms;
      min-width: 250px;

      @media all and (min-width: 768px) {
        right: -10px;
        top: -10px;
      }
      &.open {
        opacity: 1;
        z-index: 2;
      }
      &_link {
        border-radius: 1px;
        display: block;
        color: $color-grey-5;
        text-decoration: none;
        line-height: 14px;
        margin-left: 0px;
        padding-right: 8px;
        &:hover {
          color: $white;
          cursor: pointer;
          background-color: $color-green-1;
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
        color: $color-grey-5;
        font-weight: 700;
      }

      .nav-summary-title {
        background-color: transparent;
        padding: 0;
        & * {
          color: $color-grey-5;
        }
      }

      .nav-summary-action {
        border-bottom: 2px solid $color-green-2;
        display: block;
        text-decoration: none;
        padding: 6px;

        &:hover {
          color: $white;
          cursor: pointer;
          background-color: $color-green-1;
          text-decoration: none;
        }
        &:focus {
          @include a11y-focus;
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
      // &:hover {
      // }
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
