<template>
  <button :type="type" class="btn btn-primary">{{ buttonText }}</button>
</template>

<script setup lang="ts">
  const props = defineProps({
    type: {
      type: String,
      default: "button",
      validator(value: string) {
        return ["button", "cancel", "reset", "submit"].includes(value);
      },
    },
    buttonText: {
      type: String,
      required: true,
    },
    isPending: {
      type: Boolean,
      value: false,
    },
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .btn {
    border: 1px solid $color-white;
    outline: 1px solid $color-black;
    color: $color-black;
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
