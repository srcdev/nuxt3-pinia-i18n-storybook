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

  const buttonType = computed(() => props.type);

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
        width: 18px;
      }
      &.normal .icon {
        width: 20px;
      }
      &.medium .icon {
        width: 22px;
      }

      &.large .icon {
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

    &-primary {
      background-color: $color-blue-1;
      border: 1px solid $color-blue-4;
      color: $color-blue-4;
      outline: 1px solid $color-blue-1;

      &:hover {
        background-color: $color-blue-1-30;
        border-color: $color-blue-1;
        color: $color-blue-1;
      }
    }

    &-secondary {
      background-color: $color-grey-7;
      border: 1px solid $color-grey-5;
      color: $color-grey-5;
      outline: 1px solid $color-grey-3;

      &:hover {
        background-color: $color-grey-7-30;
        border-color: $color-grey-3;
        color: $color-grey-3;
      }
    }

    &-tertiary {
      background-color: $color-grey-8;
      border: 1px solid $color-grey-5;
      color: $color-grey-5;
      outline: 1px solid $color-grey-3;

      &:hover {
        background-color: $color-grey-5;
        border-color: $color-grey-8;
        color: $color-grey-8;
      }
    }

    &-ghost,
    &-icon-only {
      background-color: transparent;
      border: 1px solid transparent;
      color: $color-grey-8;
      outline: 1px solid transparent;

      &:hover {
        background-color: transparent;
        border-color: transparent;
        color: $color-grey-8;
      }
    }

    &-cancel {
      background-color: $color-red-6;
      border: 1px solid $color-red-4;
      color: $color-red-4;
      outline: 1px solid $color-red-1;

      &:hover {
        background-color: $color-red-4;
        border-color: $color-red-1;
        color: $color-red-1;
      }
    }

    &-confirm {
      background-color: $color-green-1;
      border: 1px solid $color-white;
      color: $color-green-5;
      outline: 1px solid $color-green-5;

      &:hover {
        background-color: $color-green-1-70;
        border-color: $color-green-5;
        color: $color-green-5;
      }
    }

    &-warning {
      background-color: $color-orange-3;
      border: 1px solid $color-orange-1;
      color: $color-orange-1;
      outline: 1px solid $color-orange-4;

      &:hover {
        background-color: $color-orange-1;
        border-color: $color-orange-4;
        color: $color-orange-3;
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

      &:hover {
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
