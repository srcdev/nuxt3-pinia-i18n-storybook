<template>
  <InputButtonCore type="button" :data-test-id="dataTestId" variant="icon-only" :size="size" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough" :button-text-visually-hidden="true">
    <template #left>
      <Icon name="material-symbols:account-circle" class="icon-account-btn" />
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

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .btn {
    &-icon {
      .icon-account-btn {
        color: $color-white;
        border-radius: 50%;
        box-shadow: 0px 0px 1px 1px transparent;
        transition: all ease-in-out 200ms;

        width: 36px;
        height: 36px;

        &:hover,
        &:focus-visible {
          box-shadow: 0px 0px 1px 1px $color-white;
        }
      }
    }
  }
</style>
