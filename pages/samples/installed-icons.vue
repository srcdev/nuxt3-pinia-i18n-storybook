<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :fit-content="true" :apply-gutters="true">
          <template #pageRowContent>
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
                  <span class="icon"><Icon name="material-symbols:arrow-back-ios-new" class="arrow-back" /></span>
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
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  definePageMeta({
    layout: false,
  });

  useHead({
    title: t("pages.samples.server-routes.head.title"),
    meta: [{ name: "description", content: t("pages.samples.server-routes.head.description") }],
    bodyAttrs: {
      class: "",
    },
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
