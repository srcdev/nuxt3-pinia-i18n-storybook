<template>
  <p :class="['text-normal', 'form-field-error-message', 'wght-600', { show: fieldHasError }]" :data-test-id="`${id}-error-message`">
    <Icon name="akar-icons:triangle-alert" class="icon icon-triangle-alert" />
    {{ errorMessage }}
  </p>
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

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .form-field {
    &-error-message {
      display: flex;
      align-items: center;
      color: $color-red-2;

      opacity: 0;
      height: 0;
      overflow: hidden;
      transition: all linear 200ms;

      transform: translateY(-1rem);

      .icon {
        display: inline-block;
        color: $color-red-2;
        margin-right: 10px;
      }

      &.show {
        opacity: 1;
        height: 3.4rem;
        overflow: hidden;

        transform: translateY(0);
        color: $color-red-5;
      }

      &.hide {
        color: $color-red-5;
      }
    }
  }
</style>
