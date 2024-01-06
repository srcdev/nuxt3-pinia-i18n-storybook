<template>
  <div class="flex-group" :class="[applyClasses, `flow-${flexFlow}`, `flex-wrap`, { 'inline-flex': flexType === 'inline-flex' }, { 'fill-height': fillHeight }, { 'max-height': maxHeight }, { 'max-width': maxWidth }]" :align-content="alignContent">
    <slot name="default"></slot>
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
      validator: (val: string) => ["column", "column-reverse", "row", "row-reverse", "cols-to-row"].includes(val),
    },
    flexWrap: {
      type: String,
      default: "nowrap",
      validator: (val: string) => ["initial", "nowrap", "wrap", "wrap-reverse", "cols-to-row"].includes(val),
    },
    alignContent: {
      type: String,
      default: "top-left",
      validator: (val: string) =>
        [
          "top-center",
          "center-center",
          "bottom-center",
          "top-left",
          "center-left",
          "bottom-left",
          "top-right",
          "center-right",
          "bottom-right",
          "top-space-around",
          "center-space-around",
          "bottom-space-around",
          "top-space-between",
          "center-space-between",
          "bottom-space-between",
        ].includes(val),
    },
    gap: {
      type: String,
      default: "0",
    },
    maxWidth: {
      type: Boolean,
      default: false,
    },
    fillHeight: {
      type: Boolean,
      default: false,
    },
    maxHeight: {
      type: Boolean,
      default: false,
    },
    applyClasses: {
      type: String,
      default: "",
    },
  });
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .flex-group {
    // @include minWidth($tabletSmall) {
    display: flex;
    // flex-flow: row;
    gap: v-bind(gap);
    // overflow: hidden;

    // &.gallery {
    //   max-width: 600px;
    //   width: 100%;
    // }

    &.fill-height {
      min-height: 100%;
      align-items: stretch;
    }

    &.max-height {
      min-height: 100vh;
    }

    &.max-width {
      width: 100%;
    }

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
      &-cols-to-row {
        flex-flow: column;

        @media only screen and (min-width: $tabletMed) {
          flex-flow: row;

          .max-width .flex-group-item {
            text-align: center;
            width: 100%;
          }
        }
      }

      &-column,
      &-column-reverse,
      &-cols-to-row {
        &[align-content^="center"] {
          align-items: start;
        }

        :deep(.flex-group-item) {
          width: 100%;
          // background-color: red;
        }

        @media only screen and (min-width: $tabletMed) {
          :deep(.flex-group-item) {
            width: initial;
            background-color: blue;
          }
        }
      }
    }

    &.flex {
      &-wrap {
        flex-wrap: v-bind(flexWrap);
      }
    }
  }
</style>
