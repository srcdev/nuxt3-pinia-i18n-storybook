<template>
  <div class="form-field-wrapper decorated" :class="[{ error: fieldHasError }]">
    <div class="form-field-inner">
      <slot v-if="hasTitle" name="inputTitle"></slot>
      <slot name="inputField"></slot>

      <p v-if="fieldHasError" :class="['text-normal', 'form-field-error-message', { show: fieldHasError }, { hide: !fieldHasError }]"><Icon name="akar-icons:triangle-alert" class="icon icon-triangle-alert" />{{ errorMessage }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";
  import { useI18n } from "vue-i18n";

  const props = defineProps({
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      default: null,
    },
    i18nKey: {
      type: String,
      required: true,
    },
    validation: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      value: false,
    },
  });

  const { t } = useI18n();
  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });

  const slots = useSlots();
  const hasTitle = computed(() => slots.inputTitle !== undefined);

  const modelValue = defineModel() as unknown as IFormData;
  const { errorMessage, setDefaultError, fieldHasError } = useErrorMessage(name.value, modelValue.value);
  setDefaultError(t(`${props.i18nKey}.error-message`));
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  @keyframes fadeIn {
    0% {
      opacity: 0;
      height: 0;
      overflow: hidden;
    }
    100% {
      height: 34px;
      opacity: 1;
    }
  }

  .form-field {
    &-wrapper {
      &.decorated {
        border-left: 3px solid $color-blue-1;
        border-bottom: 1px solid $color-blue-1;
        margin-bottom: 12px;

        background: rgb(5, 112, 193);
        background: linear-gradient(13deg, rgba(5, 112, 193, 0.21054359243697474) 0%, rgba(251, 251, 251, 0) 41%);

        transition: all ease-in-out 200ms;

        &.error {
          border-left: 3px solid $color-red-2;
          border-bottom: 1px solid $color-red-2;

          background: rgb(210, 28, 41);
          background: linear-gradient(13deg, rgba(210, 28, 41, 0.21054359243697474) 0%, rgba(251, 251, 251, 0) 41%);
        }
      }
    }

    &-inner {
      margin-left: 6px;
    }
    &-error-message {
      display: flex;
      align-items: center;
      color: $color-red-2;
      font-weight: bolder;
      .icon {
        display: inline-block;
        color: $color-red-2;
        margin-right: 10px;
      }

      &.show {
        animation: fadeIn ease-out 200ms;
        color: $color-red-5;
      }
    }
    &-info {
      display: flex;
      align-items: center;
      padding: 10px 0;

      @media only screen and (min-width: $tabletMed) {
        padding: 12px 0;
      }

      .icon {
        display: inline-block;
        margin-right: 10px;
      }
    }

    &-label {
      display: block;
      padding: 10px 0;

      @media only screen and (min-width: $tabletMed) {
        padding: 12px 0;
      }

      &-wrapper {
      }
    }

    &-input {
      &-wrapper {
        width: initial;

        // @media only screen and (min-width: $tabletMed) {
        //   width: 270px;
        // }
      }
    }
  }
</style>
