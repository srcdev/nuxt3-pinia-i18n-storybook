<template>
  <div class="flex-group" :class="[classes, `flow-${flexFlow}`, { 'inline-flex': flexType === 'inline-flex' }, { 'fit-width': fitWidth }, { 'fit-height': fitHeight }, { 'viewport-height': viewportHeight }]" :align-items="alignItems" :justify-content="justifyContent">
    <slot name="flexGroup"></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
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
  alignItems: {
    type: String,
    default: "top",
    validator: (val: string) => ["center", "top", "bottom"].includes(val),
  },
  justifyContent: {
    type: String,
    default: "left",
    validator: (val: string) => ["center", "left", "right", "space-around", "space-between"].includes(val),
  },
  gap: {
    type: String,
    default: "0",
  },
  classes: {
    type: String,
    default: "",
  },
  fitWidth: {
    type: Boolean,
    default: false,
  },
  fitHeight: {
    type: Boolean,
    default: false,
  },
  viewportHeight: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";

.flex-group {
  // @include mqMinTablet {
  display: flex;
  flex-flow: row;
  gap: v-bind(gap);
  overflow: hidden;

  &.inline-flex {
    display: inline-flex;
  }

  &.fit-height {
    min-height: 100%;
    align-items: stretch;
  }

  &.viewport-height {
    min-height: 100vh;
  }

  &.fit-width {
    width: 100%;
  }

  &.flow {
    &-column {
      flex-flow: column;
    }
    &-column-reverse {
      flex-flow: column-reverse;
    }
    &-row {
      display: block;
      @include mqMinTablet {
        display: flex;
        flex-flow: row;
      }
    }
    &-row-reverse {
      flex-flow: row-reverse;
    }
  }

  // &.align-items {
  //   &-center {
  //     align-items: center;
  //   }

  //   &-top {
  //     align-items: start;
  //   }

  //   &-bottom {
  //     align-items: end;
  //   }
  // }

  // &.justify-content {
  //   &-center {
  //     justify-content: center;
  //   }

  //   &-left {
  //     justify-content: start;
  //   }

  //   &-right {
  //     justify-content: end;
  //   }

  //   &-space-around {
  //     justify-content: space-around;
  //   }

  //   &-space-between {
  //     justify-content: space-between;
  //   }
  // }

  // }
}
</style>
