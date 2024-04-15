<template>
  <DisplayDialogCore :styleClassPassthrough="styleClassPassthrough" :lockViewport="true">
    <template #dialogContent>
      <slot name="promptContent"></slot>
    </template>
    <template #actionButtons>
      <slot name="actionButtonLeft"></slot>
      <slot name="actionButtonRight"></slot>
    </template>
  </DisplayDialogCore>
</template>

<script setup lang="ts">
  const props = defineProps({
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });
</script>

<style lang="scss">
  .display-dialog {
    &.content-width {
      .inner {
        width: initial;

        .button-row {
          display: flex;
          gap: 12px;
          justify-content: flex-end;
        }
      }
    }
  }
</style>
