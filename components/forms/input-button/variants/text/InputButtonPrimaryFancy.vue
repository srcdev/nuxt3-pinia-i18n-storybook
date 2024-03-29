<template>
  <InputButtonCore :type="type" class="fancy" :data-test-id="dataTestId" variant="primary" :size="size" :weight="weight" :button-text="buttonText" :style-class-passthrough="styleClassPassthrough" />
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

  @keyframes loop {
    to {
      offset-distance: 100%;
    }
  }

  .btn.fancy {
    inset: calc(2px * -1);
    border-radius: 6px;
    border: 2px solid transparent;
    mask: linear-gradient(transparent, transparent), linear-gradient(blue, rgb(22, 9, 214));
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
    position: relative;
    // inset: 0;

    :deep(.btn-text) {
      color: red;
    }

    &:after {
      content: "";
      position: absolute;
      width: 60px;
      aspect-ratio: 1 / 1;
      // border: 5px solid transparent;
      // background: radial-gradient(circle at right, #0570c1, transparent 50%), radial-gradient(circle at right, #39014e 50%, transparent);

      background: radial-gradient(circle at right, hsla(209, 95%, 50%, 0.75), transparent 50%), radial-gradient(circle at right, hsla(188, 94%, 47%, 0.5) 50%, transparent);

      offset-anchor: 100% 75%;

      offset-path: rect(0 100% 100% 0 round calc(60 * 1px));
      animation: loop calc(5s) infinite linear;
    }
  }

  .after,
  .before {
    content: "";
    height: 60px;
    aspect-ratio: 1 / 1;
    offset-anchor: calc(10 * 1%) 50%;
    background: radial-gradient(circle at right, hsla(209, 48%, 59%, 0.75), transparent 50%), radial-gradient(circle at right, hsl(var(--hue) var(--saturation) var(--lightness, 50%) / 1) 50%, transparent);
    opacity: 1;
    offset-path: rect(0 100% 100% 0 round calc(60 * 1px));
    position: absolute;
    display: inline-block;
    animation: loop calc(2000 * 1s) infinite linear;
  }

  .before {
    display: inline-block;
    animation-delay: calc(2000 * -0.5s);
  }
</style>
