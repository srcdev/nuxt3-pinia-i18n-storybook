<template>
  <InputButtonCore :type="type" :use-effect="useEffect" :effect="effect" :data-test-id="dataTestId" variant="confirm" :size="size" :weight="weight" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough">
    <template #left>
      <Icon name="material-symbols:check-circle-outline" />
    </template>
  </InputButtonCore>
</template>

<script setup lang="ts">
  const props = defineProps({
    type: {
      type: String as PropType<"button" | "reset" | "submit">,
      default: "submit",
      validator(value: string) {
        return ["button", "cancel", "reset", "submit"].includes(value);
      }
    },
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
    useEffect: {
      type: Boolean,
      default: false
    },
    effect: {
      type: String as PropType<string>,
      default: "fancy",
      validator(value: string) {
        return ["fancy", "pulse"].includes(value);
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

  @keyframes pulse {
    0% {
      outline: 1px solid var(--color-green-5);
    }
    50% {
      outline: 2px solid var(--color-green-5);
    }
    100% {
      outline: 12px solid transparent;
    }
  }

  .btn {
    &-confirm {
      background-color: var(--color-green-1);
      border: 1px solid var(--color-white);
      color: var(--color-green-5);
      outline: 1px solid var(--color-green-5);

      &:hover,
      &:focus-visible {
        background-color: var(--color-green-1)-70;
        border-color: var(--color-green-5);
        color: var(--color-green-5);
      }

      &:hover,
      &:focus-visible {
        &.pulse {
          animation: pulse 1s infinite;
        }
      }
    }
  }
</style>
