<template>
  <div>
    <h1 class="text-header-medium">Store array actions (Add/Remove object)</h1>
    <p class="text-normal">Passed as a prop in this example as follows.</p>
    <pre class="text-normal pt-10 pb-10">
      {
        name: 'Name D',
        description: 'Description D',
      }</pre
    >
    <section class="mt-12 mb-12">
      <h2>Store actions</h2>
      <div>
        <h3>{{ $t("components.array-actions.button-text-add") }} &raquo; <InputButton type="submit" variant="primary" :button-text="buttonText" @click.prevent="addToStore()" /></h3>
      </div>
    </section>
    <section>
      <h2 class="text-header-medium">Display array <strong>sbArray</strong></h2>
      <div>
        <template v-for="item in sbArray">
          <div>
            <p class="text-normal"><strong>Name:</strong> {{ item.name }} | <strong>Description:</strong> {{ item.description }}</p>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref, type PropType } from "vue";
  import { useI18n } from "vue-i18n";
  import { storeToRefs } from "pinia";
  import { useRootStore } from "@/stores/store.root"; // Only need to import here due to lack of imports support within Storybook.
  import type { ISbItemObj } from "@/types/types.rootStore";

  const emit = defineEmits(["arrayUpdated"]);

  const props = defineProps({
    sbArrayItem: {
      type: Object as PropType<ISbItemObj>,
      default: {
        name: "default",
        description: "Default description",
      },
    },
  });
  const { t } = useI18n();

  const rootStore = useRootStore();
  const { sbArray } = storeToRefs(rootStore);

  const buttonText = computed(() => {
    return sbArray.value.findIndex((obj: ISbItemObj) => obj.name === props.sbArrayItem.name) > -1 ? t("components.array-actions.button-text-remove") : t("components.array-actions.button-text-add");
  });

  const addToStore = async () => {
    await rootStore.addToArray(props.sbArrayItem);
  };
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";
</style>
