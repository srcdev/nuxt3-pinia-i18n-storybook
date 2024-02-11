<template>
  <div class="display-grid-wrapper" :class="[colRepeatType, styleClassPassthrough, { 'align-heights': alignHeights }]">
    <slot v-if="hasSlotComponent" name="content"></slot>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    minTileWidth: {
      type: Number,
      default: 312
    },
    colRepeatType: {
      type: String,
      default: null,
      validator: (val) => ["auto-fit", "auto-fill"].includes(val as string)
    },
    alignHeights: {
      type: Boolean,
      default: false
    },
    fixedWidth: {
      type: Boolean,
      default: false
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const slots = useSlots();
  const hasSlotComponent = computed(() => slots.content !== undefined);
  const maxTileWidth = props.fixedWidth ? props.minTileWidth + "px" : "1fr";
  const minTileWidth = props.minTileWidth + "px";
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .display-grid {
    $self: &;
    &-wrapper {
      display: grid;
      grid-gap: 12px;
      &.auto-fit {
        grid-template-columns: v-bind(maxTileWidth);
        @include mqMinTablet {
          grid-template-columns: repeat(auto-fit, minmax(v-bind(minTileWidth), v-bind(maxTileWidth)));
        }
      }
      &.auto-fill {
        grid-template-columns: v-bind(maxTileWidth);
        @include mqMinTablet {
          grid-template-columns: repeat(auto-fill, minmax(v-bind(minTileWidth), v-bind(maxTileWidth)));
        }
      }

      &.align-heights {
        grid-auto-rows: 1fr;
      }
      @include mqMinTablet {
        // gap: 12px;
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
