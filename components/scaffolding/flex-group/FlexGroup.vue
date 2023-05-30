<template>
  <div class="flex-group" :class="[`flow-${flexFlow}`, `align-items-${alignContent}`, `justify-content-${justifyItems}`, { 'inline-flex': flexType === 'inline-flex' }]">
    <slot name="flexGroup"></slot>
  </div>
</template>

<script setup lang="ts">
const {} = defineProps({
  flexType: {
    type: String,
    default: "flex",
    validator: (val: string) => ["flex", "inline-flex"].includes(val),
  },
  flexFlow: {
    type: String,
    default: "row",
    validator: (val: string) => ["column", "column-reverse", "row", "row-reverse"].includes(val),
  },
  alignContent: {
    type: String,
    default: "top",
    validator: (val: string) => ["center", "top", "bottom"].includes(val),
  },
  justifyItems: {
    type: String,
    default: "left",
    validator: (val: string) => ["center", "left", "right", "space-around", "space-between"].includes(val),
  },
  placementX: {
    type: String,
    default: "top",
    validator: (val: string) => ["center", "top", "bottom"].includes(val),
  },
  placementY: {
    type: String,
    default: "left",
    validator: (val: string) => ["center", "left", "right"].includes(val),
  },
  gap: {
    type: String,
    default: "0",
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";

.flex-group {
  // @include minWidth($tabletSmall) {
  display: flex;
  flex-flow: column;
  gap: v-bind(gap);
  overflow: hidden;

  &.inline-flex {
    display: inline-flex;
  }

  &.flow {
    &-column {
      flex-flow: column;
    }
    &-column-reverse {
      flex-flow: column-reverse;
    }
    &-row {
      flex-flow: row;
    }
    &-row-reverse {
      flex-flow: row-reverse;
    }
  }

  &.align-items {
    &-center {
      align-items: center;
    }

    &-top {
      align-items: start;
    }

    &-bottom {
      align-items: end;
    }
  }

  &.justify-content {
    &-center {
      justify-content: center;
    }

    &-left {
      justify-content: start;
    }

    &-right {
      justify-content: end;
    }

    &-space-around {
      justify-content: space-around;
    }

    &-space-between {
      justify-content: space-between;
    }
  }
  // }
}
</style>
