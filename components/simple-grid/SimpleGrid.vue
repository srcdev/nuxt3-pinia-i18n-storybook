<template>
  <div class="simple-grid-wrapper" :class="[colRepeatType, styleClassPassthrough]">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    minTileWidth: {
      type: String,
      default: "312px",
    },
    colRepeatType: {
      type: String,
      default: null,
      validator: (val) => ["auto-fit", "auto-fill"].includes(val as string),
    },
    styleClassPassthrough: {
      type: String,
      default: "",
    },
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .simple-grid {
    $self: &;
    &-wrapper {
      display: grid;
      gap: 12px;
      &.auto-fit {
        grid-template-columns: repeat(auto-fit, minmax(v-bind(minTileWidth), 1fr));
      }
      &.auto-fill {
        grid-template-columns: repeat(auto-fill, minmax(v-bind(minTileWidth), 1fr));
      }
      @include mqMinTablet {
        gap: 12px;
        grid-auto-rows: 1fr;
      }

      :deep(#{ $self }-item) {
        transition: all ease-in-out 300ms;

        &.scroll-reveal {
          opacity: 0;
          transform: translateY(75px);
        }
      }
    }
  }
</style>
