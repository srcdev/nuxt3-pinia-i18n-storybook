<template>
  <NuxtLink :to="to" :class="['icon-link', styleClassPassthrough]">
    <template v-if="hasIconOnly">
      <span class="icon-only">
        <slot name="iconOnly"></slot>
      </span>
    </template>

    <template v-if="hasIconLeft">
      <span class="icon-left">
        <slot name="iconLeft"></slot>
      </span>
    </template>

    <span :class="[{ 'sr-only': hasIconOnly }]">{{ linkText }}</span>

    <template v-if="hasIconRight">
      <span class="icon-right">
        <slot name="iconRight"></slot>
      </span>
    </template>
  </NuxtLink>
</template>
<script setup lang="ts">
  const props = defineProps({
    to: {
      type: String,
      required: true
    },
    external: {
      type: Boolean,
      default: false
    },
    linkText: {
      type: String,
      required: true
    },
    titleText: {
      type: String,
      default: ""
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const slots = useSlots();
  const hasIconOnly = ref(slots.iconOnly !== undefined);
  const hasIconLeft = ref(slots.iconLeft !== undefined);
  const hasIconRight = ref(slots.iconRight !== undefined);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .icon-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    font-size: initial;
    padding: 0;
    margin: 0;
  }
</style>
