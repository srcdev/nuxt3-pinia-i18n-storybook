<template>
  <InputButtonCore type="button" :data-test-id="dataTestId" variant="icon-only" :size="size" :weight="weight" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough" :button-text-visually-hidden="true">
    <template #left>
      <Icon name="radix-icons:eye-none" />
    </template>
  </InputButtonCore>
</template>

<script setup lang="ts">
  const props = defineProps({
    size: {
      type: String as PropType<string>,
      default: "normal",
      validator(value: string) {
        return ["small", "normal", "medium", "large"].includes(value);
      }
    },
    weight: {
      type: String as PropType<string>,
      default: "wght-400",
      validator(value: string) {
        return ["wght-100", "wght-200", "wght-300", "wght-400", "wght-500", "wght-600", "wght-700", "wght-800", "wght-900"].includes(value);
      }
    },
    buttonText: {
      type: String,
      required: true
    },
    dataTestId: {
      type: String,
      default: ""
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });
</script>

<style lang="scss" scoped>
  // @import "@/assets/styles/imports.scss";
</style>
