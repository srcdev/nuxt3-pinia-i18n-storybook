<template>
  <DisplayPromptCore variant="error" :dismissible="dismissible" :style-class-passthrough="styleClassPassthrough">
    <template #icon>
      <Icon name="akar-icons:circle-alert" class="icon" />
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

  $bg-color: $color-red-2;
  $text-color: $color-white;

  .display-prompt {
    &.error {
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
    &-action {
      &-btn {
        .icon {
          color: $text-color;
        }
      }
    }
  }
</style>
