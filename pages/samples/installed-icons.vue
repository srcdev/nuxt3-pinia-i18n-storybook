<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <div>
              <h1 class="text-header-large mt-12">{{ $t("pages.samples.installed-icons.pageTitle") }}</h1>
              <p class="text-header-medium mt-8">{{ $t("pages.samples.installed-icons.pageInfo") }}</p>
              <p>See https://icones.js.org/collection/material-symbols</p>

              <p class="text-header-medium mt-8">{{ $t("pages.samples.installed-icons.section.arrows.title") }}</p>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:caret-up" class="caret-up" /></span>
                </div>
                <div class="icon-name">
                  <span class="text-normal">{{ $t("pages.samples.installed-icons.section.arrows.caret-up") }}</span>
                </div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:caret-right" class="caret-right" /></span>
                </div>
                <div class="icon-name">
                  <span class="text-normal">{{ $t("pages.samples.installed-icons.section.arrows.caret-right") }}</span>
                </div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:caret-down" class="caret-down" /></span>
                </div>
                <div class="icon-name">
                  <span class="text-normal">{{ $t("pages.samples.installed-icons.section.arrows.caret-down") }}</span>
                </div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:caret-left" class="caret-left" /></span>
                </div>
                <div class="icon-name">
                  <span class="text-normal">{{ $t("pages.samples.installed-icons.section.arrows.caret-left") }}</span>
                </div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:chevron-up" class="chevron-up" /></span>
                </div>
                <div class="icon-name">
                  <span class="text-normal">{{ $t("pages.samples.installed-icons.section.arrows.chevron-up") }}</span>
                </div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:chevron-right" class="chevron-right" /></span>
                </div>
                <div class="icon-name">
                  <span class="text-normal">{{ $t("pages.samples.installed-icons.section.arrows.chevron-right") }}</span>
                </div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:chevron-down" class="chevron-down" /></span>
                </div>
                <div class="icon-name">
                  <span class="text-normal">{{ $t("pages.samples.installed-icons.section.arrows.chevron-down") }}</span>
                </div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:chevron-left" class="chevron-left" /></span>
                </div>
                <div class="icon-name">
                  <span class="text-normal">{{ $t("pages.samples.installed-icons.section.arrows.chevron-left") }}</span>
                </div>
              </div>

              <p class="text-header-medium mt-8">Social</p>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="ri:twitter-x-fill" class="icon" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Twitter</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="ri:facebook-fill" class="icon" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Facebook/Meta</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="ri:linkedin-fill" class="icon" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">LinkedIn</span></div>
              </div>

              <p class="text-header-medium mt-8">Account</p>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:logout" class="icon-logout" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Logout</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:logout-rounded" class="icon-logout-rounded" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Logout Rounded</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:logout-sharp" class="icon-logout-sharp" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Logout Sharp</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:account-circle" class="icon-account-circle" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Account Circle</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:account-circle-full" class="icon-account-circle-full" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Account Circle Full</span></div>
              </div>

              <p class="text-header-medium mt-8">Copy</p>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:copy-all" class="icon-copy-all" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Copy</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:copy-all-outline" class="icon-copy-all-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Copy (Outline)</span></div>
              </div>

              <p class="text-header-medium mt-8">Forms and warnings</p>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:eye-none" class="icon-eye-none" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Eye closed</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:eye-open" class="icon-eye-open" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Eye open</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:circle-alert" class="icon-circle-alert" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Circle Alert</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:circle-alert-fill" class="icon-circle-alert-fill" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Circle Alert Fill</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:triangle-alert" class="icon-triangle-alert" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Triangle Alert</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:triangle-alert-fill" class="icon-triangle-alert-fill" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Triangle Alert Fill</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:info" class="icon-info" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Info</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:info-fill" class="icon-info-fill" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Info Fill</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:box" class="icon-box" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Box (Checkbox)</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:check-box" class="icon-check-box" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Check Box</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:check-box-fill" class="icon-check-box-fill" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Check Box Fill</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:circle" class="icon-circle" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Circle</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:circle-check" class="icon-circle-check" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Circle Check</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="akar-icons:circle-check-fill" class="icon-circle-check-fill" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Circle Check Fill</span></div>
              </div>

              <p class="text-header-medium mt-8">{{ $t("pages.samples.installed-icons.section.navigation.title") }}</p>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="radix-icons:home" class="icon-home" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Home</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="solar:hamburger-menu-bold" class="burger-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Burger Outline</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="solar:hamburger-menu-bold-duotone" class="burger-duotone" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Burger Duotone</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="solar:hamburger-menu-outline" class="burger-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Burger Outline</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="solar:hamburger-menu-linear" class="burger-linear" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Burger Linear</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="solar:hamburger-menu-bold-duotone" class="burger-duotone" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Burger Duotone</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:warning-outline" class="warning-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Warning Outline</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:warning-rounded" class="warning-rounded" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Warning Rounded</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:warning-outline-rounded" class="warning-outline-rounded" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Warning Outline Rounded</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:check-circle" class="check-circle" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Check Circle</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:check-circle-outline" class="check-circle-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Check Circle Outline</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:check-circle-outline-rounded" class="check-circle-outline-rounded" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Check Circle Outline Rounded</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:info-outline" class="info-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Info Outline</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:cancel-outline" class="cancel-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Cancel Outline</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:cancel" class="cancel" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Cancel Solid</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:close" class="close" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Close Solid</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:checklist" class="check-small" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Checklist</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:check-small" class="check-small-1" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Check Small 1</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:fitbit-check-small" class="check-small-2" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Check Small 2</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:check-box-outline-blank" class="check-box-outline-blank" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Checkbox Blank</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:check-box-outline" class="check-box-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Checkbox Checked</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:arrow-forward-ios" class="arrow-next" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Arrow Next</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:arrow-back-ios" class="arrow-back" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Arrow Back</span></div>
              </div>

              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:close-fullscreen" class="close-fullscreen" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Close Fullscreen</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:delete-outline" class="delete-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Delete Outline</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:settings-outline" class="settings-outline" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Settings Outline</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:settings" class="settings" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Settings Solid</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:zoom-in" class="zoom-in" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Zoom In</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:zoom-out" class="zoom-out" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Zoom Out</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:zoom-in-map" class="zoom-in-map" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Zoom In Map</span></div>
              </div>
              <div class="icon-table">
                <div class="icon-display">
                  <span class="icon"><Icon name="material-symbols:zoom-out-map" class="zoom-out-map" /></span>
                </div>
                <div class="icon-name"><span class="text-normal">Zoom Out Map</span></div>
              </div>
            </div>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  definePageMeta({
    layout: false
  });

  useHead({
    title: t("pages.samples.server-routes.head.title"),
    meta: [{ name: "description", content: t("pages.samples.server-routes.head.description") }],
    bodyAttrs: {
      class: ""
    }
  });
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";

  .icon-table {
    display: grid;
    grid-template-columns: 30px 1fr;
    grid-template-rows: auto;
    grid-auto-rows: auto;
    gap: 12px 12px;
    grid-template-areas: "icon-display icon-name";

    .icon-name {
      grid-area: icon-name;
      display: flex;
      align-content: center;
      line-height: 3rem;
    }
    .icon-display {
      grid-area: icon-display;
      line-height: 3rem;
      width: 30px;
      display: flex;
      align-content: center;
    }

    // dt {
    //   width: 100px;
    // }
    // dd {
    //   flex-grow: 1;
    //   width: calc(100% - 100px);
    // }
  }
</style>
