<template>
  <div>
    <input :type="inputType" class="input" v-model="modelValue" />
  </div>
</template>

<script setup lang="ts">
  // import { type PropType } from "vue";
  const props = defineProps({
    inputType: {
      // type: String as PropType<String>,
      type: String,
      value: "text",
      validator(value: string) {
        return ["text", "number", "email", "url"].includes(value);
      },
    },
    isPending: {
      type: Boolean,
      value: false,
    },
  });

  const modelValue = defineModel();
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .input {
    border: 1px solid $color-white;
    outline: 1px solid $color-black;
    border-radius: 2px;
    box-shadow: none;
    font-size: 1.4rem;
    transition: all linear 200ms;

    &[readonly] {
      background-color: $color-blue-2;
    }

    &-primary {
      background-color: $color-white;
      // color: $color-grey-1;

      @media (prefers-color-scheme: dark) {
        background-color: $color-grey-4;
        // color: $color-grey-4;
      }
    }

    &:hover {
      border-color: $black;
    }
  }
</style>
