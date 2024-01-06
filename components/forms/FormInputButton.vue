<template>
  <button v-bind="$attrs" :type="type" class="btn btn-primary">{{ buttonText }}</button>
</template>

<script setup lang="ts">
  import { type PropType } from "vue";
  // import { useI18n } from "vue-i18n";
  // const { t } = useI18n();

  /*
   * defineProps
   */
  const props = defineProps({
    type: {
      type: String as PropType<String>,
      value: "button",
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

  /*
   * defineEmits
   */
  const emit = defineEmits(["emitName"]);

  // const someMethod = (data: any) => {
  //   emit("emitName", data);
  // };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  .btn {
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
