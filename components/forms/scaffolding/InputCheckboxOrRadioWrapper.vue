<template>
  <div class="form-field-wrapper decorated" :class="[{ error: fieldHasError }]">
    <div class="form-field-inner">
      <slot v-if="hasTitle" name="inputTitle"></slot>
      <DisplayFlexGroup flex-flow="row-reverse" align-content="center-left" gap="12px" :full-width="false">
        <template #default>
          <DisplayFlexGroupItem style-class-passthrough="form-field-label-wrapper">
            <template #default>
              <label :for="id" class="form-field-label header-small" :class="[{ error: fieldHasError }]">
                <slot name="inputField"></slot>
                {{ t(`${i18nKey}.label`) }}
              </label>
            </template>
          </DisplayFlexGroupItem>
        </template>
      </DisplayFlexGroup>

      <InputErrorMessage :id="id" :field-has-error="fieldHasError" :error-message="errorMessage" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";
  import { useI18n } from "vue-i18n";

  const props = defineProps({
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: null
    },
    i18nKey: {
      type: String,
      required: true
    },
    validation: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      value: false
    }
  });

  const { t } = useI18n();
  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });

  const slots = useSlots();
  const hasTitle = computed(() => slots.inputTitle !== undefined);

  const modelValue = defineModel() as Ref<IFormData>;
  const { errorMessage, setDefaultError, fieldHasError } = useErrorMessage(name.value, modelValue);
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
        border-left: 3px solid var(--color-blue-1);
        border-bottom: 1px solid var(--color-blue-1);
        margin-bottom: 12px;

        background: rgb(5, 112, 193);
        background: linear-gradient(13deg, rgba(5, 112, 193, 0.21054359243697474) 0%, rgba(251, 251, 251, 0) 41%);

        transition: all ease-in-out 200ms;

        &.error {
          border-left: 3px solid var(--color-red-2);
          border-bottom: 1px solid var(--color-red-2);

          background: rgb(210, 28, 41);
          background: linear-gradient(13deg, rgba(210, 28, 41, 0.21054359243697474) 0%, rgba(251, 251, 251, 0) 41%);
        }
      }
    }

    &-inner {
      margin-left: 6px;
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
      gap: 12px;
      padding: 10px 0;

      @media only screen and (min-width: $tabletMed) {
        padding: 12px 0;
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
