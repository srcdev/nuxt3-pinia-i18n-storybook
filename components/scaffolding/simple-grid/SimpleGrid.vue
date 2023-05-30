<template>
  <div class="simple-grid-wrapper">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  minTileWidth: {
    type: String,
    default: "312px",
  },
  tileGap: {
    type: String,
    default: "26px",
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/imports.scss";

.simple-grid {
  &-wrapper {
    @include minWidth($tabletSmall) {
      display: grid;
      gap: v-bind(tileGap);
      grid-template-columns: repeat(auto-fit, minmax(v-bind(minTileWidth), 1fr));
      grid-auto-rows: 1fr;
    }
  }
}
</style>
