<template>
  <div class="form-field-error-message expander" :class="[{ 'expander-open': fieldHasError }]">
    <div class="expander-inner">
      <div class="form-field-error-message-message" :class="['text-normal', 'wght-600']" :data-test-id="`${id}-error-message`">
        <Icon name="akar-icons:triangle-alert" class="icon icon-triangle-alert" />
        {{ errorMessage }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      required: true
    },
    fieldHasError: {
      type: Boolean,
      default: false
    }
  });
</script>

<style scoped>
  .form-field-error-message {
    color: var(--color-red-2);

    .form-field-error-message-message {
      padding-block: 8px;
    }

    .icon {
      display: inline-block;
      color: var(--color-red-2);
      margin-right: 10px;
    }
  }
</style>
