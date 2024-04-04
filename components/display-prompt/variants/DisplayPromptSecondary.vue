<template>
  <DisplayPromptCore variant="secondary" :dismissible="dismissible" icon-color="white" :style-class-passthrough="styleClassPassthrough">
    <template #icon>
      <Icon name="akar-icons:info" class="icon" />
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

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .display-prompt.secondary {
    --bg-color: var(--color-grey-3);
    --text-color: var(--color-white);
  }

  .display-prompt {
    &.secondary {
      background-color: var(--bg-color);
    }

    &-icon {
      .icon {
        color: var(--text-color);
      }
    }

    &-content {
      color: var(--text-color);
    }
  }
</style>
