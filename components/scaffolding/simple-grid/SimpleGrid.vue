<template>
  <div class="simple-grid-wrapper" :class="[colRepeatType]">
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
  colRepeatType: {
    type: String,
    default: null,
    validator: (val) => ["auto-fit", "auto-fill"].includes(val as string),
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/imports.scss";

.simple-grid {
  &-wrapper {
    @include mqMinTablet {
      display: grid;
      gap: v-bind(tileGap);
      grid-auto-rows: 1fr;

      &.auto-fit {
        grid-template-columns: repeat(auto-fit, minmax(v-bind(minTileWidth), 1fr));
      }
      &.auto-fill {
        grid-template-columns: repeat(auto-fill, minmax(v-bind(minTileWidth), 1fr));
      }
    }
  }
}
</style>
