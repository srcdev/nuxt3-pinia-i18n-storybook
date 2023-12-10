<template>
  <div>
    <h1 class="text-header-large" data-test-id="locale-switcher-header">Multi Step Form - Step 1</h1>
  </div>
</template>

<script setup lang="ts">
  import { type PropType } from "vue";
  import { useI18n } from "vue-i18n";
  const { t } = useI18n();

  /*
   * defineProps
   */

  // import from external file
  interface ISomeObject {
    name: string;
    description: string;
  }

  const props = defineProps({
    someText: {
      type: String,
      value: "value1",
      validator(value: string) {
        return ["value1", "value2"].includes(value);
      },
    },
    someBoolean: {
      type: Boolean,
      value: true,
    },
    someObject: {
      type: Object as PropType<ISomeObject>,
      // default: {}, // emmpty
      default: {
        // or populated
        name: "string",
        description: "string",
      },
    },
  });

  /*
   * Only do something client side
   */
  // if (import.meta.client) {
  //   console.log("Client only");
  // }

  /*
   * defineEmits
   */
  const emit = defineEmits(["emitName"]);

  const someMethod = (data: any) => {
    emit("emitName", data);
  };
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
</style>
