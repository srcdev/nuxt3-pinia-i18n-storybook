<template>
  <InputButtonCore type="button" :data-test-id="dataTestId" variant="icon-only" :size="size" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough" :button-text-visually-hidden="true">
    <template #left>
      <Icon name="material-symbols:cancel-outline" class="btn-cancel-outline" :class="iconColor" />
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
    },
    iconColor: {
      type: String as PropType<string>,
      default: "dark-grey",
      validator(value: string) {
        return ["dark-grey", "white"].includes(value);
      }
    }
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .btn-icon-only {
    .btn-cancel-outline {
      border-radius: 50%;
      box-shadow: 0px 0px 1px 1px transparent;
      transition: all ease-in-out 200ms;

      &.dark-grey {
        color: var(--color-grey-8);
      }

      &.white {
        color: var(--color-white);
      }
    }

    &:hover,
    &:focus-visible {
      .btn-cancel-outline {
        &.dark-grey {
          box-shadow: 0px 0px 1px 1px var(--color-grey-8);
          border: 1px solid var(--color-grey-8);
          outline: 1px solid var(--color-grey-8);
        }

        &.white {
          box-shadow: 0px 0px 1px 1px var(--color-white);
          border: 1px solid var(--color-white);
          outline: 1px solid var(--color-white);
        }
      }
    }
  }
</style>
