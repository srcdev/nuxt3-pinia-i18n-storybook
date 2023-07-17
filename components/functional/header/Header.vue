<template>
  <header class="header" :class="[headerTheme]">
    <h1 class="text-header-large text-color-orange">{{ $t("header.text") }} key (<code class="text-header-large">t("header.text")</code>)</h1>
    <p data-test-id="shared-text-test">{{ $t("shared.title") }} key (<code>t("shared.title")</code>)</p>
    <p data-test-id="store-test">{{ rootStore.someString }} key (<code>rootStore.someString</code>)</p>
    <p data-test-id="props-test">{{ someProp }} (<code>props.someProp</code>)</p>
  </header>
</template>

<script setup lang="ts">
import { useRootStore } from "@/stores/store.root"; // Only need to import here due to lack of imports support within Storybook.
// import { useI18n } from "vue-i18n";

const props = defineProps({
  someProp: {
    type: String,
    value: "value1",
    validator(value: string) {
      return ["value1", "value2"].includes(value);
    },
  },
  headerTheme: {
    type: String,
    value: "default",
    validator(value: string) {
      return ["default", "dark"].includes(value);
    },
  },
});

// const { t } = useI18n();

const rootStore = useRootStore();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/imports.scss";

.header-default {
  --bgColour: #121212;
}

.header-dark {
  --bgColour: #d2d2d2;
}

.header {
  background-color: var(--bgColour);
  padding: 16px;

  @include mqMinTablet {
    padding: 40px;
  }

  @include mqDesktopContentMax {
    padding: 32px;
  }
}
</style>
