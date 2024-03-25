<template>
  <DisplayPromptCore variant="warning" :dismissible="dismissible" icon-color="white" :style-class-passthrough="styleClassPassthrough">
    <template #icon>
      <Icon name="akar-icons:triangle-alert" class="icon" />
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template v-if="hasContent" #content>
      <slot name="content"></slot>
    </template>
  </DisplayPromptCore>
</template>

<script setup lang="ts">
  const { dismissible } = defineProps({
    dismissible: {
      type: Boolean,
      default: false
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });

  const slots = useSlots();
  const hasContent = ref(slots.content !== undefined);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  $bg-color: $color-orange-5;
  $text-color: $color-white;

  .display-prompt {
    &.warning {
      background-color: $bg-color;
    }

    &.secondary {
      background-color: $bg-color;
    }

    &-icon {
      .icon {
        color: $text-color;
      }
    }

    &-content {
      color: $text-color;
    }
  }
</style>
