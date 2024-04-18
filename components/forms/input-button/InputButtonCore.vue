<template>
  <button :type="type" :data-test-id="dataTestId" class="btn" :class="[`btn-${variant}`, effectClass, styleClassPassthrough]">
    <span v-if="useEffect && effect == 'fancy'" class="fancy"></span>
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
  const effectClass = computed(() => {
    if (props.useEffect) {
      return props.effect === "fancy" ? "" : props.effect;
    } else {
      return "";
    }
  });

  const slots = useSlots();
  const hasLeftContent = computed(() => slots.left !== undefined);
  const hasRightContent = computed(() => slots.right !== undefined);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  @keyframes loop {
    to {
      offset-distance: 100%;
    }
  }

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
    position: relative;

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
        height: 32px;
        width: 32px;
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
      color: var(--color-grey-8);
      outline: 1px solid transparent;

      &:hover,
      &:focus {
        background-color: transparent;
        border-color: transparent;
        color: var(--color-grey-8);
      }
    }

    &-navigate-btn {
      background-color: #00000095;
      border: 1px solid var(--color-grey-5);
      color: var(--color-grey-5);
      outline: 1px solid var(--color-grey-3);
      padding: 12px;
      border-radius: 50%;
      aspect-ratio: 1;

      &:hover,
      &:focus {
        background-color: var(--color-grey-5);
        border-color: var(--color-grey-8);
        color: var(--color-grey-8);
      }

      .btn-icon.left {
        margin-left: 0;

        .icon {
          font-size: 24px;
        }
      }
    }

    &:hover,
    &:focus {
      .fancy {
        inset: -2px;
        border-radius: 9px;
        border: 4px solid transparent;
        mask: linear-gradient(transparent, transparent), linear-gradient(blue, red);
        mask-clip: padding-box, border-box;
        mask-composite: intersect;
        position: absolute;
        left: -7px;
        top: -7px;
        right: -7px;
        bottom: -7px;

        &:after {
          content: "";
          position: absolute;
          width: 60px;
          // height: 90px;
          offset-anchor: 100% 30px;

          // width: 60px;
          aspect-ratio: 1.5;

          background: rgb(57, 1, 251);
          background: linear-gradient(220deg, rgba(57, 1, 251, 1) 0%, rgba(5, 112, 193, 1) 28%, rgba(161, 5, 5, 1) 65%, rgba(181, 193, 5, 0) 100%);

          // background: radial-gradient(circle at right, hsl(209, 95%, 50%), transparent 50%), radial-gradient(circle at right, rgb(232, 8, 8) 50%, transparent);

          offset-path: rect(0 100% 100% 0 round 30px);
          animation: loop calc(2.5s) infinite linear;
        }
      }
    }
  }
</style>
