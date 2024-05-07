<template>
  <div class="display-accordian">
    <template v-for="(item, key, index) in data">
      <div class="accordion-panel">
        <button class="accordion-trigger" :id="`accordian-${key}-trigger`" aria-expanded="false" :aria-controls="`accordian-${key}-content`" ref="triggerRefs" @click.stop.prevent="handleSummary(key)">{{ key }} - {{ item.title }}</button>
        <div class="accordion-content" :aria-labelledby="`accordian-${key}-trigger`" :id="`accordian-${key}-content`" role="region" aria-hidden="true" ref="contentRefs">
          <div>
            <p class="pt-32 pb-32">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  interface IAccordianData {
    title: string;
    content: string;
  }

  const props = defineProps({
    data: {
      type: Array as PropType<IAccordianData[]>,
      default: () => []
    }
  });

  const triggerRefs = ref<HTMLElement[]>([]);
  const contentRefs = ref<HTMLElement[]>([]);

  const handleSummary = (clickedIndex: number) => {
    triggerRefs.value.forEach((element, index) => {
      if (clickedIndex === index) {
        const currentState = element.getAttribute("aria-expanded");
        const newState = currentState !== "true";
        triggerRefs.value[index].setAttribute("aria-expanded", String(newState));
        contentRefs.value[index].setAttribute("aria-hidden", String(currentState));
      } else {
        triggerRefs.value[index].setAttribute("aria-expanded", "false");
        contentRefs.value[index].setAttribute("aria-hidden", "true");
      }
    });
  };
</script>

<style lang="css" scoped>
  .display-accordian {
    max-width: 600px;
    margin: 0 auto;
  }

  .accordion-panel {
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 1rem;
  }

  .accordion-trigger {
    display: block;
    width: 100%;
    padding: 1rem;
    background-color: #f9f9f9;
    border: none;
    text-align: left;
    cursor: pointer;
  }

  .accordion-content {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows ease-in-out 500ms;

    > div {
      overflow: hidden;
      /* transform: translateY(-1rem);
      transition: all ease-in-out 500ms;

      > p {
        padding-block: 0;
        transition: all ease-in-out 500ms;
      } */
    }
  }

  .accordion-content[aria-hidden="false"] {
    grid-template-rows: 1fr;

    /* > div {
      transform: translateY(0);
      > p {
        padding-block: 32px;
      }
    } */
  }
</style>
