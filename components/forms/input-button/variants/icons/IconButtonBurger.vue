<template>
  <InputButtonCore type="button" :data-test-id="dataTestId" variant="icon-only" :size="size" :weight="weight" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough" :button-text-visually-hidden="true">
    <template #left>
      <Icon name="solar:hamburger-menu-linear" class="icon-hamburger-menu-linear" />
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
      default: "wght-500",
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

  .btn {
    &-icon-only {
      .icon {
        color: var(--color-white);
        padding: 2px;
        transition: all ease-in-out 200ms;
        height: 32px;
        width: 32px;

        &:hover {
          padding: 0;
        }
      }

      background-color: rgba(0, 0, 0, 0.1);
      border: 1px solid var(--color-white);
      outline: 1px solid transparent;
      transition: all ease-in-out 200ms;

      &:hover,
      &:focus {
        .icon-hamburger-menu-linear {
          background-color: rgba(0, 0, 0, 0.2);
          color: var(--color-white);
          outline: 1px solid rgba(255, 255, 255, 0.2);
        }
      }
    }
  }
</style>
