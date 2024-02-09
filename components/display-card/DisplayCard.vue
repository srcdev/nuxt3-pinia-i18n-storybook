<template>
  <div :class="['display-card', styleClassPassthrough]">
    <slot name="header" v-if="hasHeader"></slot>
    <div class="display-card-inner" :class="[`direction-${direction}`]">
      <div class="display-card-content">
        <slot name="cardContent"></slot>
      </div>
      <div class="display-card-image" :align-content="content.image.alignContent">
        <img :src="content.image.url" class="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed, useSlots, type PropType } from "vue";

  export interface ICardContent {
    image: {
      url: string;
      alignContent: string;
    };
  }

  const {} = defineProps({
    direction: {
      type: String as PropType<String>,
      default: "column",
      validator: (val: string) => ["column", "column-reverse", "row", "row-reverse"].includes(val)
    },
    gap: {
      type: String as PropType<String>,
      default: "0"
    },
    content: {
      type: Object as PropType<ICardContent>,
      default: () => ({})
    },
    styleClassPassthrough: {
      type: String as PropType<String>,
      default: ""
    }
  });

  const slots = useSlots();
  const hasHeader = computed(() => slots.header !== undefined);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .display {
    &-card {
      $self: &;
      border-radius: 4px;
      box-shadow: 0 0 0 1px $color-black;

      &-inner {
        display: flex;
        flex-flow: column;
        gap: v-bind(gap);
        padding: 6px;

        &.direction {
          &-column {
            flex-flow: column;
          }
          &-column-reverse {
            flex-flow: column-reverse;
          }
          &-row {
            flex-flow: column;

            @media only screen and (min-width: $tabletSmall) {
              flex-flow: row;
            }
          }
          &-row-reverse {
            flex-flow: column-reverse;

            @media only screen and (min-width: $tabletSmall) {
              flex-flow: row-reverse;
            }
          }
        }
      }

      &-image {
        aspect-ratio: 406 / 270;
        background-size: 35%;
        overflow: hidden;
        padding: 3px;
        .image {
          border-left: 1px solid #265b96;
          box-shadow: 2px 2px 10px 2px #acacac;
          width: 100%;
        }
      }
    }
  }
</style>
