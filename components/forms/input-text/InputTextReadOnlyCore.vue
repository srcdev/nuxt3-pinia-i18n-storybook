<template>
  <input :type="type" :readonly="true" :class="['input-text', 'text-normal', variant]" v-model="modelValue" />
</template>

<script setup lang="ts">
  const props = defineProps({
    type: {
      // type: String as PropType<"text" | "password" | "tel" | "number" | "email" | "url">, // This breaks props setup in unit tests
      type: String,
      default: "text",
      validator(value: string) {
        return ["text", "password", "tel", "number", "email", "url"].includes(value);
      }
    },
    variant: {
      type: String as PropType<string>,
      default: "ghost",
      validator(value: string) {
        return ["ghost"].includes(value);
      }
    }
  });

  const modelValue = defineModel<string>();
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .input {
    &-text {
      border: 1px solid $color-white;
      outline: 1px solid $color-black;
      border-radius: 2px;
      box-shadow: none;
      transition: all linear 200ms;
      padding-left: 4px;
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;
      text-wrap: nowrap;

      &[readonly] {
        background-color: $color-blue-2;
      }

      &.ghost {
        border: 0;
        outline: 0;
        &[readonly] {
          background-color: transparent;
        }
      }

      &-primary {
        background-color: $color-white;
        // color: $color-grey-1;

        @media (prefers-color-scheme: dark) {
          background-color: $color-grey-4;
          // color: $color-grey-4;
        }
      }
    }
  }
</style>
