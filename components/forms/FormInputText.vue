<template>
  <div>
    <label :for="id" class="label">Label: {{ placeholder }}</label>
    <br />
    <input :type="type" :placeholder="placeholder" :id="id" class="input" v-model="modelValue" />
  </div>
</template>

<script setup lang="ts">
  // import { type PropType } from "vue";
  const props = defineProps({
    type: {
      // type: String as PropType<String>,
      type: String,
      default: "text",
      validator(value: string) {
        return ["text", "password", "tel", "number", "email", "url"].includes(value);
      },
    },
    id: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      default: "",
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
    // font-size: 1.4rem;
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

  .label {
    display: block;
    border: 1px solid red;
    // font-size: clamp(1.2rem, 4vw, 1.4rem);
    // padding: 6px;
  }
</style>
