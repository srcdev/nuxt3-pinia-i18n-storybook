<template>
  <InputButtonCore type="button" :data-test-id="dataTestId" variant="navigate-btn" :size="size" :weight="weight" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough" :button-text-visually-hidden="true">
    <template #left>
      <Icon name="material-symbols:arrow-back-ios" class="icon-back" />
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
  @import "@/assets/styles/imports.scss";

  .icon-back {
    color: var(--color-white);

    &:hover {
      color: var(--color-grey-1);
    }
  }

  :deep(.btn-icon) {
    transform: translateX(5px);
  }
</style>
