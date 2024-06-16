<template>
  <div class="form-field-wrapper decorated" :class="[{ error: fieldHasError }]">
    <div class="form-field-inner">
      <slot v-if="hasTitle" name="inputTitle"></slot>

      <div class="input-items" :class="[props.direction, displayType]">
        <template v-for="item in optionsData" :key="item.id">
          <slot :name="item.id"></slot>
        </template>
      </div>

      <InputErrorMessage :id="id" :field-has-error="fieldHasError" :error-message="errorMessage" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";
  import { useI18n } from "vue-i18n";

  const props = defineProps({
    optionsData: {
      type: Object,
      default: {}
    },
    direction: {
      type: String as PropType<String>,
      default: "rows",
      validator: (val: string) => ["rows", "columns"].includes(val)
    },
    balanceWidths: {
      type: Boolean as PropType<boolean>,
      value: true
    },
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

  const displayType = computed(() => {
    return props.balanceWidths ? "grid" : "flex";
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

  .input-items {
    &.grid {
      display: grid;

      &.columns {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }

      &.rows {
        grid-template-columns: 1fr;
      }
    }

    &.flex {
      display: flex;

      &.columns {
        flex-direction: row;
        justify-content: left;
        flex-wrap: wrap;
      }

      &.rows {
        flex-direction: column;
      }
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
      display: block;
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
