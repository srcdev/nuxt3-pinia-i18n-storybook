<template>
  <DisplayPromptCore variant="error" :dismissible="dismissible" :apply-classes="applyClasses">
    <template #icon>
      <Icon name="akar-icons:circle-alert" class="icon" />
    </template>
    <template #title>
      <slot name="title"></slot>
    </template>
    <template v-if="hasContent" #content>
      <slot name="content"></slot>
    </template>
  </DisplayPromptCore>
</template>

<script setup lang="ts">
  const { dismissible } = defineProps({
    dismissible: {
      type: Boolean,
      default: false
    },
    applyClasses: {
      type: String,
      default: ""
    }
  });

  const slots = useSlots();
  const hasContent = ref(slots.content !== undefined);
</script>
