<template>
  <div>
    <h1>Store array actions</h1>
    <section>
      <h2>Display array <strong>sbArray</strong></h2>
      <div>
        <template v-for="item in arrayToDisplay">
          <div>
            <p><strong>Name:</strong> {{ item.name }} | <strong>Description:</strong> {{ item.description }}</p>
          </div>
        </template>
      </div>
    </section>
    <section>
      <h2>Store actions</h2>
      <div>
        <h3>Add to array. &raquo; <button type="submit" @click.prevent="addToStore()">Add item</button></h3>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, type PropType } from "vue";
import { useRootStore } from "../stores/store.root"; // Only need to import here due to lack of imports support within Storybook.
import { ISbItemObj } from "../types/types.rootStore";

const { sbArrayItem } = defineProps({
  sbArrayItem: {
    type: Object as PropType<ISbItemObj>,
    default: {},
  }
});

const rootStore = useRootStore();
const arrayToDisplay = reactive<ISbItemObj[]>(rootStore.sbArray);

const addToStore = () => {
  rootStore.addToArray(sbArrayItem);
}
</script>

<style lang="scss">
@import "../assets/styles/imports.scss";
</style>
