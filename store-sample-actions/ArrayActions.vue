<template>
  <div>
    <h1>Store array actions (Add/Remove object)</h1>
    <section>
      <h2>Store actions</h2>
      <div>
        <h3>
          Add to array. &raquo; <button type="submit" @click.prevent="addToStore()">{{ buttonText }}</button>
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
import { ref, watch, type PropType } from "vue";
import { useI18n } from 'vue-i18n'
import { storeToRefs } from "pinia";
import { useRootStore } from "../stores/store.root"; // Only need to import here due to lack of imports support within Storybook.
import { ISbItemObj } from "../types/types.rootStore";

const emit = defineEmits(["arrayUpdated"]);

const { sbArrayItem } = defineProps({
  sbArrayItem: {
    type: Object as PropType<ISbItemObj>,
    default: {},
  }
});
const { t } = useI18n()
const buttonText = ref(t("store-sample-actions.array-actions.button-text-add"))

const rootStore = useRootStore();
const { sbArray } = storeToRefs(rootStore);

const addToStore = () => {
  rootStore.addToArray(sbArrayItem);
}

watch(
  () => sbArray,
  () => {
    emit("arrayUpdated");
    let indexPayload = sbArray.value.findIndex((obj: ISbItemObj) => obj.name === sbArrayItem.name);
    buttonText.value = (indexPayload === -1) ? t("store-sample-actions.array-actions.button-text-add") : t("store-sample-actions.array-actions.button-text-remove");
  }
);
</script>

<style lang="scss">
@import "../assets/styles/imports.scss";
</style>
