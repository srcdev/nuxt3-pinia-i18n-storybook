<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <div class="pt-32">
              <h1 class="text-header-large">{{ t("pages.samples.sample-buttons.pageTitle") }}</h1>
            </div>
          </template>
        </PageRow>
        <PageRow :use-available-width="false" :apply-gutters="false" page-row-inner-theme="theme-white">
          <template #pageRowContent>
            <form>
              <FlexGroup align-content="top-left" gap="12px" :full-width="true" style-class-passthrough="mt-20 mb-20">
                <template #default>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <p class="text-normal mb-12"><code>&lt;InputButton variant="primary"&gt;</code></p>
                      <InputButton type="submit" variant="primary" button-text="Primary Small" size="small" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="primary" button-text="Primary Normal" size="normal" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="primary" button-text="Primary Medium" size="medium" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="primary" button-text="Primary Large" size="large" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="primary" button-text="Primary Large 100" size="large" weight="wght-100" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="primary" button-text="Primary Large 900" size="large" weight="wght-900" style-class-passthrough="mb-12" />
                    </template>
                  </FlexGroupItem>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <p class="text-normal mb-12"><code>&lt;InputButton variant="secondary"&gt;</code></p>
                      <InputButton type="submit" variant="secondary" button-text="Secondary Small" size="small" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="secondary" button-text="Secondary Normal" size="normal" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="secondary" button-text="Secondary Medium" size="medium" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="secondary" button-text="Secondary Large" size="large" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="secondary" button-text="Secondary Large 100" size="large" weight="wght-100" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="secondary" button-text="Secondary Large 900" size="large" weight="wght-900" style-class-passthrough="mb-12" />
                    </template>
                  </FlexGroupItem>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <p class="text-normal mb-12"><code>&lt;InputButton variant="tertiary"&gt;</code></p>
                      <InputButton type="submit" variant="tertiary" button-text="Tertiary Small" size="small" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="tertiary" button-text="Tertiary Normal" size="normal" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="tertiary" button-text="Tertiary Medium" size="medium" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="tertiary" button-text="Tertiary Large" size="large" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="tertiary" button-text="Tertiary Large 100" size="large" weight="wght-100" style-class-passthrough="mb-12" />
                      <InputButton type="submit" variant="tertiary" button-text="Tertiary Large 900" size="large" weight="wght-900" style-class-passthrough="mb-12" />
                    </template>
                  </FlexGroupItem>
                </template>
              </FlexGroup>

              <FlexGroup align-content="top-left" gap="12px" :full-width="true" style-class-passthrough="mt-20 mb-20">
                <template #default>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <p class="text-normal mb-12"><code>&lt;InputButtonCancel&gt;</code></p>
                      <InputButtonCancel type="submit" button-text="Cancel Small" size="small" style-class-passthrough="mb-12" />
                      <InputButtonCancel type="submit" button-text="Cancel Normal" size="normal" style-class-passthrough="mb-12" />
                      <InputButtonCancel type="submit" button-text="Cancel Medium" size="medium" style-class-passthrough="mb-12" />
                      <InputButtonCancel type="submit" button-text="Cancel Large" size="large" style-class-passthrough="mb-12" />
                    </template>
                  </FlexGroupItem>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <p class="text-normal mb-12"><code>&lt;InputButtonConfirm&gt;</code></p>
                      <InputButtonConfirm type="submit" button-text="Confirm Small" size="small" style-class-passthrough="mb-12" />
                      <InputButtonConfirm type="submit" button-text="Confirm Normal" size="normal" style-class-passthrough="mb-12" />
                      <InputButtonConfirm type="submit" button-text="Confirm Medium" size="medium" style-class-passthrough="mb-12" />
                      <InputButtonConfirm type="submit" button-text="Confirm Large" size="large" style-class-passthrough="mb-12" />
                    </template>
                  </FlexGroupItem>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <p class="text-normal mb-12"><code>&lt;InputButtonWarning&gt;</code></p>
                      <InputButtonWarning type="submit" button-text="Warning Small" size="small" style-class-passthrough="mb-12" />
                      <InputButtonWarning type="submit" button-text="Warning Normal" size="normal" style-class-passthrough="mb-12" />
                      <InputButtonWarning type="submit" button-text="Warning Medium" size="medium" style-class-passthrough="mb-12" />
                      <InputButtonWarning type="submit" button-text="Warning Large" size="large" style-class-passthrough="mb-12" />
                    </template>
                  </FlexGroupItem>
                </template>
              </FlexGroup>

              <FlexGroup align-content="top-left" gap="12px" :full-width="true" style-class-passthrough="mt-20 mb-20">
                <template #default>
                  <FlexGroupItem :flex-grow="false">
                    <template #default>
                      <p class="text-normal wght-700 mb-12">Icon Only Buttons</p>
                      <p class="text-normal mb-12"><code>&lt;IconButtonCancel&gt;</code></p>
                      <IconButtonCancel button-text="Cancel Small" size="small" style-class-passthrough="mb-12" />
                      <IconButtonCancel button-text="Cancel Small" size="normal" style-class-passthrough="mb-12" />
                      <IconButtonCancel button-text="Cancel Small" size="medium" style-class-passthrough="mb-12" />
                      <IconButtonCancel button-text="Cancel Small" size="large" style-class-passthrough="mb-12" />
                    </template>
                  </FlexGroupItem>
                </template>
              </FlexGroup>
            </form>
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
    title: t("pages.samples.sample-buttons.head.title"),
    meta: [{ name: "description", content: t("pages.samples.sample-buttons.head.description") }],
    bodyAttrs: {
      class: "",
    },
  });
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .form {
    &-narrow {
      max-width: 600px;
    }
  }
</style>
