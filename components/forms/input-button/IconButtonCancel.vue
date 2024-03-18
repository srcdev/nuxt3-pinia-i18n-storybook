<template>
  <InputButtonCore type="button" :data-test-id="dataTestId" variant="icon-only" :size="size" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough" :button-text-visually-hidden="true">
    <template #left>
      <Icon name="material-symbols:cancel-outline" class="btn-cancel-outline" />
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
      .btn-cancel-outline {
        color: $color-grey-8;
        border-radius: 50%;
        box-shadow: 0px 0px 1px 1px transparent;
        transition: all ease-in-out 200ms;

        &:hover,
        &:focus {
          box-shadow: 0px 0px 1px 1px $color-grey-8;
        }
      }
    }
  }
</style>
