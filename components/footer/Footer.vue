<template>
  <footer class="footer">
    <DisplayRow :use-available-width="false" :apply-gutters="true" display-row-theme="theme-orange-darker" display-row-inner-theme="theme-orange-darker" style-class-passthrough="pb-12 pt-12">
      <template #default>
        <div class="footer-title">
          <p class="text-normal wght-700 text-color-white">Footer title bar</p>
        </div>
      </template>
    </DisplayRow>

    <DisplayRow :use-available-width="false" :apply-gutters="true" display-row-theme="theme-orange-lighter" display-row-inner-theme="theme-orange-lighter">
      <template #default>
        <div class="footer-block-1">
          <div class="footer-links section-1">
            <p class="text-normal wght-700 text-color-white">Section 1 links</p>
            <ul class="footer-links-list">
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Some link 1</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Some other link to home</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Home link section 1</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Test link 2</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Example link 5</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-links section-2">
            <p class="text-normal wght-700 text-color-white">Section 2 links</p>
            <ul class="footer-links-list">
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Some link 1</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Some other link to home</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Home link section 1</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-links section-3">
            <p class="text-normal wght-700 text-color-white">Section 3 links</p>
            <ul class="footer-links-list">
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Some link 1</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Some other link to home</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Home link section 1</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Some link 1</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Test link 2</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Some link 1</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link text-color-white">Example link 5</NuxtLink></li>
            </ul>
          </div>
        </div>
      </template>
    </DisplayRow>

    <DisplayRow :use-available-width="false" :apply-gutters="true" display-row-theme="theme-orange-lighter" display-row-inner-theme="theme-orange-lighter" style-class-passthrough="pb-12 pt-12">
      <template #default>
        <div class="footer-block-2">
          <div class="footer-links section-2">
            <ul class="footer-links-list links-social">
              <li class="footer-links-item">
                <UtilsIconLinkTwitter />
              </li>
              <li class="footer-links-item">
                <UtilsIconLinkLinkedIn />
              </li>
              <li class="footer-links-item">
                <UtilsIconLinkFacebook />
              </li>
            </ul>
          </div>
        </div>
      </template>
    </DisplayRow>

    <DisplayRow :use-available-width="false" :apply-gutters="true" display-row-theme="theme-orange" display-row-inner-theme="theme-orange" style-class-passthrough="pb-12 pt-12">
      <template #default>
        <div class="footer-block-3">
          <div class="footer-links section-1">
            <ul class="footer-links-list">
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link wght-700 text-color-white">Terms of use</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link wght-700 text-color-white">Privacy policy</NuxtLink></li>
              <li class="footer-links-item"><NuxtLink to="/" class="text-normal footer-links-link wght-700 text-color-white">Cookie policy</NuxtLink></li>
            </ul>
          </div>

          <div class="footer-links section-2">
            <ul class="footer-links-list links-social">
              <li class="footer-links-item">
                <UtilsIconLinkTwitter />
              </li>
              <li class="footer-links-item">
                <UtilsIconLinkLinkedIn />
              </li>
              <li class="footer-links-item">
                <UtilsIconLinkFacebook />
              </li>
            </ul>
          </div>
          <div class="footer-links section-3">
            <p class="text-normal wght-700 text-color-white pb-12 pt-12" v-html="$t('components.footer.copyright', { year: currentYear })"></p>
          </div>
        </div>
      </template>
    </DisplayRow>
  </footer>
</template>

<script setup lang="ts">
  // import { useRootStore } from "@/stores/store.root";

  // import { useI18n } from "vue-i18n";

  const props = defineProps({
    someProp: {
      type: String,
      value: "value1",
      validator(value: string) {
        return ["value1", "value2"].includes(value);
      }
    },
    footerTheme: {
      type: String,
      value: "theme-grey",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green"].includes(val as string)
    }
  });

  const footerLinks = [
    {
      text: "components.footer.links.home.text",
      url: "components.footer.links.home.url"
    },
    {
      text: "components.footer.links.components.text",
      url: "components.footer.links.components.url"
    },
    {
      text: "components.footer.links.lang-switcher.text",
      url: "components.footer.links.lang-switcher.url"
    },
    {
      text: "components.footer.links.server-routes.text",
      url: "components.footer.links.server-routes.url"
    },
    {
      text: "components.footer.links.test-form.text",
      url: "components.footer.links.test-form.url"
    }
  ];
  // const { t } = useI18n();
  // const rootStore = useRootStore();
  const currentYear = new Date().getFullYear();
  // const footerTitleAsConst = t("footer.title");
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .footer {
    &-inner {
      align-items: left;
      display: flex;
      flex-direction: column;
    }

    &-block {
      &-1 {
        @media only screen and (min-width: $tabletMed) {
          display: flex;

          .footer-links {
            width: 226px;
          }
        }
      }

      &-2 {
        display: flex;
        justify-content: right;
        @media only screen and (min-width: $tabletMed) {
          justify-content: left;
          gap: 16px;
        }
        @media only screen and (min-width: $desktop) {
          justify-content: right;
        }
      }

      &-3 {
        @media only screen and (min-width: $tabletMed) {
          display: grid;
          grid-gap: 12px;
          grid-template-columns: repeat(2, [col] 50%);
          grid-template-rows: repeat(2, [row] 50%);

          padding: 12px 0 30px 0;

          .section {
            &-1 {
              grid-column: col 1;
              grid-row: row 2;

              .footer-links-list {
                display: flex;
                gap: 16px;
              }
            }
            &-2 {
              grid-column: col 1 / span 2;
              grid-row: row 1 / span 2;
            }
            &-3 {
              grid-column: col 2;
              grid-row: row 2;
              text-align: right;
            }
          }
        }

        @media only screen and (min-width: $desktop) {
          grid-gap: 0;
          grid-template-columns: repeat(3, [col] 33%);
          grid-template-rows: initial;
          padding: 12px 0 12px 0;

          .section {
            &-1 {
              grid-column: col 1;
              grid-row: initial;
            }
            &-2 {
              grid-column: col 2;
              grid-row: initial;
              align-content: center;

              .footer-links-list {
                display: flex;
                gap: 16px;
                justify-content: center;
              }
            }
            &-3 {
              grid-column: col 3;
              grid-row: initial;
              text-align: right;
            }
          }
        }
      }
    }

    &-links {
      &-list {
        list-style-type: none;
        margin: 0;
        padding: 0;

        &.links {
          &-social {
            display: flex;
            align-items: center;
            justify-content: left;
            gap: 12px;

            li {
              font-size: initial;
            }
          }
        }
      }

      &-link {
        display: block;
        padding: 0.6rem 0;
        text-decoration: none;
      }
    }
  }
</style>
