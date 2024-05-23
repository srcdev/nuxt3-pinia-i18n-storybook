<template>
  <DisplayDialogCore :styleClassPassthrough="styleClassPassthrough" :lockViewport="true">
    <template #dialogTitle>
      <slot name="dialogTitle">
        <p class="text-normal wght-700">Confirm</p>
      </slot>
    </template>
    <template #dialogContent>
      <slot name="dialogContent"></slot>
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
          display: grid;
          gap: 12px;
          grid-template-columns: 1fr 1fr;
        }
      }
    }
  }
</style>
