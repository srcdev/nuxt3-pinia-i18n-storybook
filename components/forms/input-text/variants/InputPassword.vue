<template>
  <InputTextWithWrapper :id :name :type="propType" validation="password" :required="true" v-model="modelValue" :i18n-key>
    <template #rightAddOn>
      <IconButtonEyeClosed v-if="displayPassword" @click.prevent="toggleDisplayPassword()" button-text="Display password" size="normal" style-class-passthrough="rightAddOn" />
      <IconButtonEyeOpen v-else @click.prevent="toggleDisplayPassword()" button-text="Hide password" size="normal" style-class-passthrough="rightAddOn" />
    </template>
  </InputTextWithWrapper>
</template>
<script setup lang="ts">
  import type { IFormData } from "@/types/types.forms";

  const props = defineProps({
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
    validation: {
      type: String,
      default: ""
    }
  });

  const modelValue = defineModel() as Ref<IFormData>;

  const displayPassword = ref(false);
  // const propType = computed(() => (displayPassword.value ? "text" : "password"));
  const propType = ref("password");

  watch(
    () => propType.value,
    () => {
      console.log(`InputPassword > watch type > (${propType.value})`);
    }
  );

  const name = computed(() => {
    return props.name !== null ? props.name : props.id;
  });

  const toggleDisplayPassword = () => {
    displayPassword.value = !displayPassword.value;
    propType.value = displayPassword.value ? "text" : "password";
  };
</script>

<style scoped>
  .btn.rightAddOn {
    padding-inline: 6px;
  }
</style>
