<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" footer-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <div>
              <h1 class="text-header-large">1: {{ $t("pages.samples.forms-guided-form.pageTitle") }}</h1>
              <p>{{ $t("pages.samples.forms-guided-form.pageInfo", { step: guidedFormData.step, steps: steps }) }}</p>
            </div>
          </template>
        </DisplayRow>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <component :is="componentName"></component>
          </template>
        </DisplayRow>
        <DisplayRow :use-available-width="false" :apply-gutters="false" display-row-inner-theme="theme-default" style-class-passthrough="pt-20 pb-20">
          <template #default>
            <DisplayFlexGroup gap="12px" align-content="center-right">
              <template #default>
                <DisplayFlexGroupItem>
                  <template #default>
                    <InputButton type="button" variant="primary" @click.prevent="goToStep(-1)" button-text="Previous" :readonly="guidedFormData.step === 1" />
                  </template>
                </DisplayFlexGroupItem>
                <DisplayFlexGroupItem>
                  <template #default>
                    <InputButton type="button" variant="primary" @click.prevent="goToStep(1)" button-text="Next" :readonly="guidedFormData.step === steps" />
                  </template>
                </DisplayFlexGroupItem>
              </template>
            </DisplayFlexGroup>
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
    title: t("pages.samples.forms-guided-form.head.title"),
    meta: [{ name: "description", content: t("pages.samples.forms-guided-form.head.description") }],
    bodyAttrs: {
      class: ""
    }
  });

  interface GuidedForm {
    step: number;
    steps: string[];
  }

  const guidedFormData = ref<GuidedForm>({
    step: 1,
    steps: ["MultiStepFormStep1", "MultiStepFormStep2", "MultiStepFormStep3"]
  });

  const steps = guidedFormData.value.steps.length;

  const componentName = computed(() => {
    switch (guidedFormData.value.step) {
      case 1:
        return resolveComponent("MultiStepFormStep1");
      case 2:
        return resolveComponent("MultiStepFormStep2");
      case 3:
        return resolveComponent("MultiStepFormStep3");
      default:
        return null;
    }
  });

  const goToStep = (index: number) => {
    if (index === -1) {
      guidedFormData.value.step = guidedFormData.value.step > 1 ? guidedFormData.value.step - 1 : 1;
    } else if (index === 1) {
      guidedFormData.value.step = guidedFormData.value.step < steps ? guidedFormData.value.step + 1 : steps;
    }
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
