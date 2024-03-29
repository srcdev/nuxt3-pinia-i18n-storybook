<template>
  <button :type="type" :data-test-id="dataTestId" class="btn" :class="[`btn-${variant}`, styleClassPassthrough]">
    <template v-if="hasLeftContent">
      <span class="btn-icon" :class="[size, { left: variant !== 'icon-only' }]">
        <slot name="left"></slot>
      </span>
    </template>
    <span class="btn-text" :class="[size, weight, { 'sr-only': buttonTextVisuallyHidden }]">{{ buttonText }}</span>
    <template v-if="hasRightContent">
      <span class="btn-icon" :class="[size, { right: variant !== 'icon-only' }]">
        <slot name="right"></slot>
      </span>
    </template>
  </button>
</template>

<script setup lang="ts">
  const props = defineProps({
    type: {
      type: String as PropType<"submit" | "button" | "reset">,
      default: "submit",
      validator(value: string) {
        return ["button", "cancel", "reset", "submit"].includes(value);
      }
    },
    variant: {
      type: String as PropType<string>,
      default: "primary",
      validator(value: string) {
        return ["primary", "secondary", "tertiary", "text", "link", "icon-only", "ghost", "cancel", "confirm", "warning", "navigate-btn"].includes(value);
      }
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonTextVisuallyHidden: {
      type: Boolean,
      default: false
    },
    dataTestId: {
      type: String,
      default: ""
    },
    styleClassPassthrough: {
      type: String,
      default: ""
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
      default: "wght-500",
      validator(value: string) {
        return ["wght-100", "wght-200", "wght-300", "wght-400", "wght-500", "wght-600", "wght-700", "wght-800", "wght-900"].includes(value);
      }
    }
  });

  const type = toRef(() => props.type);

  const slots = useSlots();
  const hasLeftContent = computed(() => slots.left !== undefined);
  const hasRightContent = computed(() => slots.right !== undefined);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .btn {
    align-items: center;
    border: 1px solid transparent;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    line-height: initial;
    outline: 1px solid transparent;
    padding: 0;
    transition: all ease-in-out 200ms;

    &:hover {
      cursor: pointer;
    }
    &-icon {
      .icon {
        aspect-ratio: 1;
        display: inline-block;
      }
      // Sizes
      &.small .icon {
        height: 18px;
        width: 18px;
      }
      &.normal .icon {
        height: 20px;
        width: 20px;
      }
      &.medium .icon {
        height: 22px;
        width: 22px;
      }

      &.large .icon {
        height: 24px;
        width: 24px;
      }

      &.left {
        margin-left: 6px;
      }

      &.right {
        margin-right: 6px;
      }
    }

    &-text {
      display: inline-block;
      font-weight: 500;
      line-height: 1.4cap;

      // Sizes
      &.small {
        font-size: 1.2rem;
        padding: 6px 12px;
      }
      &.normal {
        font-size: 1.4rem;
        padding: 6px 16px;
      }
      &.medium {
        font-size: 1.6rem;
        padding: 8px 18px;
      }

      &.large {
        font-size: 1.8rem;
        padding: 10px 20px;
      }
    }

    &-ghost,
    &-icon-only {
      background-color: transparent;
      border: 1px solid transparent;
      color: $color-grey-8;
      outline: 1px solid transparent;

      &:hover,
      &:focus {
        background-color: transparent;
        border-color: transparent;
        color: $color-grey-8;
      }
    }

    &-navigate-btn {
      background-color: #00000095;
      border: 1px solid $color-grey-5;
      color: $color-grey-5;
      outline: 1px solid $color-grey-3;
      padding: 12px;
      border-radius: 50%;
      aspect-ratio: 1;

      &:hover,
      &:focus {
        background-color: $color-grey-5;
        border-color: $color-grey-8;
        color: $color-grey-8;
      }

      .btn-icon.left {
        margin-left: 0;

        .icon {
          font-size: 24px;
        }
      }
    }
  }
</style>
