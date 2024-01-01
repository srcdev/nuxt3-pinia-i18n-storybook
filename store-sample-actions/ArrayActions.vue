<template>
  <div>
    <h1 class="text-header-medium">Store array actions (Add/Remove object)</h1>
    <p class="text-normal">Passed as a prop in this example as follows.</p>
    <code class="text-normal pt-10 pb-10"> &lt;ArrayActions :sb-array-item="{ name: 'Name D', description: 'Description D', }" &gt;&lt;/ArrayActions&gt; </code>
    <section>
      <h2>Store actions</h2>
      <div>
        <h3>{{ $t("store-sample-actions.array-actions.button-text-add") }} &raquo; <FormInputButton :button-text="buttonText" @click.prevent="addToStore()"></FormInputButton></h3>
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

  const { sbArrayItem } = defineProps({
    sbArrayItem: {
      type: Object as PropType<ISbItemObj>,
      default: {},
    },
  });
  const { t } = useI18n();
  const buttonText = ref(t("store-sample-actions.array-actions.button-text-add"));

  const rootStore = useRootStore();
  const { sbArray } = storeToRefs(rootStore);

  const addToStore = async () => {
    const itemAdded = rootStore.addToArray(sbArrayItem);
    emit("arrayUpdated", {
      itemAdded: itemAdded,
    });
    buttonText.value = itemAdded ? t("store-sample-actions.array-actions.button-text-remove") : t("store-sample-actions.array-actions.button-text-add");
  };
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";
</style>
