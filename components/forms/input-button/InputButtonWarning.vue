<template>
  <InputButtonCore :type="type" :data-test-id="dataTestId" variant="warning" :size="size" :weight="weight" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough">
    <template #left>
      <Icon name="material-symbols:warning-outline" />
    </template>
  </InputButtonCore>
</template>

<script setup lang="ts">
  const props = defineProps({
    type: {
      type: String as PropType<string>,
      default: "submit",
      validator(value: string) {
        return ["button", "cancel", "reset", "submit"].includes(value);
      },
    },
    size: {
      type: String as PropType<string>,
      default: "normal",
      validator(value: string) {
        return ["small", "normal", "medium", "large"].includes(value);
      },
    },
    weight: {
      type: String as PropType<string>,
      default: "wght-500",
      validator(value: string) {
        return ["wght-100", "wght-200", "wght-300", "wght-400", "wght-500", "wght-600", "wght-700", "wght-800", "wght-900"].includes(value);
      },
    },
    buttonText: {
      type: String,
      required: true,
    },
    dataTestId: {
      type: String,
      default: "",
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
  });
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
