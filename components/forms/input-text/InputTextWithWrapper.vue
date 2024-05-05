<template>
  <div class="form-field-wrapper decorated" :class="[{ error: fieldHasError }]">
    <div class="form-field-inner">
      <DisplayFlexGroup flex-flow="cols-to-row" align-content="center-left" :full-width="true">
        <template #default>
          <DisplayFlexGroupItem :flex-grow="true" style-class-passthrough="form-field-label-wrapper">
            <template #default>
              <label :for="id" class="form-field-label" :class="[{ error: fieldHasError }]">
                <span class="form-field-label-text header-small wght-700">{{ t(`${i18nKey}.label`) }}</span>
                <DisplayTooltip :tooltip-id="id" :text="t('components.forms.generic-text.hint', { hint: componentValidation.hint })" style-class-passthrough="ml-6" />
              </label>
            </template>
          </DisplayFlexGroupItem>
          <DisplayFlexGroupItem :flex-grow="false" style-class-passthrough="form-field-input-wrapper">
            <div class="input-border" align-content="center-center" :class="[{ error: fieldHasError }, { focus: isFocused }]">
              <template v-if="hasLeftAddOn">
                <slot name="leftAddOn"></slot>
              </template>
              <InputTextCore :type :id :validation :required v-model:modelValue="modelValue" v-model:isFocused="isFocused" :i18n-key="i18nKey" />
              <template v-if="hasRightAddOn">
                <slot name="rightAddOn"></slot>
              </template>
            </div>
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
  import { validationConfig } from "@/components/forms/config/index";
  import { storeToRefs } from "pinia";
  import { useI18nStore } from "~/stores/store.i18n";

  const props = defineProps({
    type: {
      // type: String as PropType<"text" | "password" | "tel" | "number" | "email" | "url">, // This breaks props setup in unit tests
      type: String,
      // default: "text",
      validator(value: string) {
        return ["text", "password", "tel", "number", "email", "url"].includes(value);
      }
    },
    id: {
      type: String,
      required: true
    },
    i18nKey: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    validation: {
      type: String,
      default: ""
    }
  });

  const { t } = useI18n();
  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });

  // const type = toRef(() => props.type);

  // const propType = ref(props.type);
  const propType = computed(() => props.type);
  // const propType = toRef(() => props.type);
  // const propType = toRef(props, "type");

  console.log(`InputTextWithWrapper > propType: ${propType.value}`);

  // watch(
  //   () => type.value,
  //   () => {
  //     console.log(`InputTextWithWrapper > watch type > (${type.value})`);
  //   }
  // );

  watch(
    () => propType.value,
    () => {
      console.log(`InputTextWithWrapper > watch propType > (${propType.value})`);
    }
  );

  watch(
    () => props.type,
    () => {
      console.log(`InputTextWithWrapper > watch props.type > (${props.type})`);
    }
  );

  const slots = defineSlots();
  const hasLeftAddOn = slots.leftAddOn !== undefined;
  const hasRightAddOn = slots.rightAddOn !== undefined;
  const isFocused = ref(false);

  const { validatorLocale } = storeToRefs(useI18nStore());
  const componentValidation = validationConfig[validatorLocale.value][props.validation];

  const modelValue = defineModel() as Ref<IFormData>;
  const { errorMessage, setDefaultError, fieldHasError } = useErrorMessage(name.value, modelValue);
  setDefaultError(t(`${props.i18nKey}.error-message`));
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  @keyframes fadeIn {
    0% {
      opacity: 0;
      height: 0;
      overflow: hidden;
    }
    100% {
      height: 3.4rem;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    0% {
      height: 3.4rem;
      opacity: 1;
      overflow: hidden;
    }
    100% {
      opacity: 0;
      height: 0;
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

    &-label {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 10px 0;

      @media only screen and (min-width: $tabletMed) {
        padding: 0;
      }

      &-text {
        display: inline-block;
      }
    }

    &-input {
      &-wrapper {
        align-self: center;
        width: 100%;
        @media only screen and (min-width: $tabletMed) {
          max-width: 300px;
        }
      }
    }
  }
</style>
