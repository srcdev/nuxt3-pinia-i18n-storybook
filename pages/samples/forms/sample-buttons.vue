<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <div class="pt-32">
              <h1 class="text-header-large">{{ t("pages.samples.sample-buttons.pageTitle") }}</h1>
            </div>
          </template>
        </DisplayRow>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-white">
          <template #default>
            <form>
              <div>
                <p class="text-normal mb-12"><code>&lt;InputButtonPrimary&gt;</code></p>
                <div placement="left-center" gap="12px" flex-wrap="wrap">
                  <div>
                    <InputButtonPrimary type="submit" button-text="Primary Small" size="small" weight="wght-400" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" button-text="Primary Normal" size="normal" weight="wght-400" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" button-text="Primary Medium" size="medium" weight="wght-400" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" button-text="Primary Large" size="large" weight="wght-400" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" button-text="Primary Large 100" size="large" weight="wght-100" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" button-text="Primary Large 900" size="large" weight="wght-900" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <div>
                <p class="text-normal mb-12"><code>&lt;InputButtonPrimary&gt;</code> + pulse effect</p>
                <div placement="left-center" gap="12px" flex-wrap="wrap">
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="pulse" button-text="Primary Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="pulse" button-text="Primary Normal" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="pulse" button-text="Primary Medium" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="pulse" button-text="Primary Large" size="large" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="pulse" button-text="Primary Large 100" size="large" weight="wght-100" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="pulse" button-text="Primary Large 900" size="large" weight="wght-900" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <div>
                <p class="text-normal mb-12"><code>&lt;InputButtonPrimary&gt;</code> + chase effect</p>
                <div placement="left-center" gap="12px" flex-wrap="wrap">
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="fancy" button-text="Primary Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="fancy" button-text="Primary Normal" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="fancy" button-text="Primary Medium" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="fancy" button-text="Primary Large" size="large" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="fancy" button-text="Primary Large 100" size="large" weight="wght-100" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonPrimary type="submit" :use-effect="true" effect="fancy" button-text="Primary Large 900" size="large" weight="wght-900" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <div>
                <p class="text-normal mb-12"><code>&lt;InputButtonSecondary&gt;</code></p>
                <div placement="left-center" gap="12px" flex-wrap="wrap">
                  <div>
                    <InputButtonSecondary type="submit" button-text="Secondary Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonSecondary type="submit" button-text="Secondary Normal" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonSecondary type="submit" button-text="Secondary Medium" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonSecondary type="submit" button-text="Secondary Large" size="large" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonSecondary type="submit" button-text="Secondary Large 100" size="large" weight="wght-100" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonSecondary type="submit" button-text="Secondary Large 900" size="large" weight="wght-900" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <div>
                <p class="text-normal mb-12"><code>&lt;InputButtonTertiary"&gt;</code></p>
                <div placement="left-center" gap="12px" flex-wrap="wrap">
                  <div>
                    <InputButtonTertiary type="submit" button-text="Tertiary Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonTertiary type="submit" button-text="Tertiary Normal" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonTertiary type="submit" button-text="Tertiary Medium" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonTertiary type="submit" button-text="Tertiary Large" size="large" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonTertiary type="submit" button-text="Tertiary Large 100" size="large" weight="wght-100" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonTertiary type="submit" button-text="Tertiary Large 900" size="large" weight="wght-900" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <div>
                <p class="text-normal mb-12"><code>&lt;InputButtonCancel&gt;</code></p>
                <div placement="left-center" gap="12px" flex-wrap="wrap">
                  <div>
                    <InputButtonCancel type="submit" button-text="Cancel Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonCancel type="submit" button-text="Cancel Normal" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonCancel type="submit" button-text="Cancel Medium" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonCancel type="submit" button-text="Cancel Large" size="large" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <div>
                <p class="text-normal mb-12"><code>&lt;InputButtonConfirm&gt;</code></p>
                <div placement="left-center" gap="12px" flex-wrap="wrap">
                  <div>
                    <InputButtonConfirm type="submit" button-text="Confirm Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonConfirm type="submit" button-text="Confirm Normal" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonConfirm type="submit" button-text="Confirm Medium" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonConfirm type="submit" button-text="Confirm Large" size="large" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <div>
                <p class="text-normal mb-12"><code>&lt;InputButtonWarning&gt;</code></p>
                <div placement="left-center" gap="12px" flex-wrap="wrap">
                  <div>
                    <InputButtonWarning type="submit" button-text="Warning Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonWarning type="submit" button-text="Warning Normal" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonWarning type="submit" button-text="Warning Medium" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <InputButtonWarning type="submit" button-text="Warning Large" size="large" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <div>
                <p class="text-normal wght-700 mb-12">Icon Only Buttons</p>
                <p class="text-normal mb-12"><code>&lt;IconButtonCancel&gt;</code> (CSS Separated)</p>
                <div placement="left-center" gap="12px">
                  <div>
                    <IconButtonCancel button-text="Cancel Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonCancel button-text="Cancel Normal" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonCancel button-text="Cancel Medium" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonCancel button-text="Cancel Large" size="large" style-class-passthrough="mb-12" />
                  </div>
                </div>

                <p class="text-normal mb-12"><code>&lt;IconButtonEyeOpen&gt;</code></p>
                <div placement="left-center" gap="12px">
                  <div>
                    <IconButtonEyeOpen button-text="Eye Open Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonEyeOpen button-text="Eye Open Small" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonEyeOpen button-text="Eye Open Small" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonEyeOpen button-text="Eye Open Small" size="large" style-class-passthrough="mb-12" />
                  </div>
                </div>

                <p class="text-normal mb-12"><code>&lt;IconButtonEyeClosed&gt;</code></p>
                <div placement="left-center" gap="12px">
                  <div>
                    <IconButtonEyeClosed button-text="Eye Closed Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonEyeClosed button-text="Eye Closed Small" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonEyeClosed button-text="Eye Closed Small" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonEyeClosed button-text="Eye Closed Small" size="large" style-class-passthrough="mb-12" />
                  </div>
                </div>

                <p class="text-normal mb-12"><code>&lt;IconButtonInfo&gt;</code></p>
                <div placement="left-center" gap="12px">
                  <div>
                    <IconButtonInfo button-text="Info Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonInfo button-text="Info Small" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonInfo button-text="Info Small" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonInfo button-text="Info Small" size="large" style-class-passthrough="mb-12" />
                  </div>
                </div>

                <p class="text-normal mb-12"><code>&lt;IconButtonLogout&gt;</code></p>
                <div placement="center-left" gap="12px" class="theme-grey pt-12 pb-12" style="display: flex">
                  <IconButtonLogout button-text="Logout Small" size="small" style-class-passthrough="" />
                  <IconButtonLogout button-text="Logout Small" size="normal" style-class-passthrough="" />
                  <IconButtonLogout button-text="Logout Small" size="medium" style-class-passthrough="" />
                  <IconButtonLogout button-text="Logout Small" size="large" style-class-passthrough="" />
                </div>

                <p class="text-normal mb-12"><code>&lt;IconButtonAccount&gt;</code> (CSS Separated)</p>
                <div placement="center-left" gap="12px" class="theme-grey pt-12 pb-12" style="display: flex">
                  <IconButtonAccount button-text="Account Small" size="small" style-class-passthrough="" />
                  <IconButtonAccount button-text="Account Small" size="normal" style-class-passthrough="" />
                  <IconButtonAccount button-text="Account Small" size="medium" style-class-passthrough="" />
                  <IconButtonAccount button-text="Account Small" size="large" style-class-passthrough="" />
                </div>

                <p class="text-normal mb-12"><code>&lt;IconButtonCopy&gt;</code></p>
                <div placement="left-center" gap="12px">
                  <div>
                    <IconButtonCopy button-text="Copy Small" size="small" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonCopy button-text="Copy Small" size="normal" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonCopy button-text="Copy Small" size="medium" style-class-passthrough="mb-12" />
                  </div>
                  <div>
                    <IconButtonCopy button-text="Copy Small" size="large" style-class-passthrough="mb-12" />
                  </div>
                </div>
              </div>

              <p class="text-normal mb-12"><code>&lt;IconButtonCopyOutline&gt;</code></p>
              <div placement="left-center" gap="12px">
                <div>
                  <IconButtonCopyOutline button-text="Copy Outline Small" size="small" style-class-passthrough="mb-12" />
                </div>
                <div>
                  <IconButtonCopyOutline button-text="Copy Outline Small" size="normal" style-class-passthrough="mb-12" />
                </div>
                <div>
                  <IconButtonCopyOutline button-text="Cop Outliney Small" size="medium" style-class-passthrough="mb-12" />
                </div>
                <div>
                  <IconButtonCopyOutline button-text="Copy Outline Small" size="large" style-class-passthrough="mb-12" />
                </div>
              </div>
            </form>
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
    title: t("pages.samples.sample-buttons.head.title"),
    meta: [{ name: "description", content: t("pages.samples.sample-buttons.head.description") }],
    bodyAttrs: {
      class: ""
    }
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
