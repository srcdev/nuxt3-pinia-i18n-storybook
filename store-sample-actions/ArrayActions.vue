<template>
  <div>
    <h1>Store array actions (Add/Remove object)</h1>
    <section>
      <h2>Store actions</h2>
      <div>
        <h3>
          {{ $t("store-sample-actions.array-actions.button-text-add") }} &raquo; <button type="submit" @click.prevent="addToStore()">{{ buttonText }}</button>
        </h3>
      </div>
    </section>
    <section>
      <h2>Display array <strong>sbArray</strong></h2>
      <div>
        <template v-for="item in sbArray">
          <div>
            <p><strong>Name:</strong> {{ item.name }} | <strong>Description:</strong> {{ item.description }}</p>
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
import { ISbItemObj } from "@/types/types.rootStore";

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
  buttonText.value = itemAdded ? t("store-sample-actions.array-actions.button-text-add") : t("store-sample-actions.array-actions.button-text-remove");
};
</script>

<style lang="scss">
@import "@/assets/styles/imports.scss";
</style>
