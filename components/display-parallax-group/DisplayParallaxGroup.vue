<template>
  <section class="parallax">
    <div class="parallax-base">
      <div class="parallax-backdrop"></div>
    </div>

    <div class="parallax-foreground">
      <template v-if="hasSlotComponent">
        <slot name="content"></slot>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  const { bgImage } = defineProps({
    bgImage: {
      type: String,
      default: null
    },
    styleClassPassthrough: {
      type: String as PropType<String>,
      default: ""
    }
  });

  const slots = useSlots();
  const hasSlotComponent = computed(() => slots.content !== undefined);

  const backgroundImage = computed(() => `url("${bgImage}")`);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  $backgroundImage: v-bind(backgroundImage);

  .parallax {
    aspect-ratio: 6/3;
    position: relative;
    &-base {
      clip: rect(0, auto, auto, 0);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-backdrop {
      position: fixed;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: translateZ(0);
      will-change: transform;

      background-image: $backgroundImage;
      background-position: center;
      background-repeat: no-repeat;
      // background-attachment: fixed;
      background-size: cover;
    }
    &-foreground {
      height: 100%;
      position: relative;
    }
  }
</style>
