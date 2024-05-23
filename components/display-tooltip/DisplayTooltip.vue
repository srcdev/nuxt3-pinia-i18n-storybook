<template>
  <span class="display-tooltip hide" :class="[styleClassPassthrough]">
    <IconButtonInfo @click.prevent :aria-describedby="tooltipId" button-text="Info" size="normal" style-class-passthrough="display-tooltip-btn" />
    <span class="display-tooltip-text" role="tooltip" :id="tooltipId" inert>{{ text }}</span>
  </span>
</template>

<script setup lang="ts">
  const props = defineProps({
    tooltipId: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const showToolTip = ref(false);
  const toggleToolTip = () => {
    showToolTip.value != showToolTip.value;
    console.log("toggleToolTip(): ", showToolTip.value);
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .display-tooltip {
    $self: &;
    display: inline-block;
    position: relative;

    &-text {
      background-color: var(--color-grey-1) 2;
      color: white;
      display: block;
      border-radius: 3px;
      font-size: 1.4rem;
      position: absolute;
      transition: all 250ms linear;
      top: 8px;
      left: 7px;
      text-wrap: nowrap;
      transform: translate3d(0, 0px, 0px);
      opacity: 0;
      overflow: hidden;
      padding: 0;
      height: 0;
      width: 0;
    }
    &-btn {
      &:hover,
      &:focus-visible {
        & + #{ $self }-text {
          transform: translate3d(0, -36px, 0px);
          opacity: 1;
          overflow: initial;
          padding: 6px 10px;
          height: initial;
          width: initial;
        }
      }
    }
  }
</style>
