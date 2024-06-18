<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <h1 class="text-header-medium">Display filters</h1>

            <div class="manage-needs-section">
              <div class="manage-needs-label"><h2>This is manage needs label</h2></div>
              <div class="manage-needs-selected-campaign">
                <div class="p-12">Campaign details here</div>
              </div>
              <div class="manage-needs-select-opportunity">
                <div class="p-12">Opportunity name here</div>
                <div class="p-12">Activity category select here</div>
              </div>
            </div>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false
  });

  useHead({
    title: "Display Filters",
    meta: [{ name: "description", content: "Display Filters" }],
    bodyAttrs: {
      class: ""
    }
  });
</script>

<style>
  :root {
    --grid-gap: 16px;
    --min-col-size: 100%;
  }

  .manage-needs-section {
    border: 1px solid #f00;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 16px;

    & > div {
      border: 1px solid #000;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 50%);
      /* grid-template-columns: repeat(2, calc((100% - var(--grid-gap)) / 2)); */
      /* grid-template-columns: repeat(2, minmax(min(var(--min-col-size), 100%), 1fr)); */

      background-color: antiquewhite;

      .manage-needs-label {
        grid-column: 2;
        grid-row: 1;
      }

      .manage-needs-selected-campaign {
        grid-column: 2;
        grid-row: 2;
      }

      .manage-needs-select-opportunity {
        grid-column: 1 / span 2;
        grid-row: 3;

        display: grid;
        grid-template-columns: auto 1fr;

        & > div {
          border: 1px solid #00f;
        }
      }
    }
    @media (min-width: 1064px) {
      grid-template-columns: auto 1fr;
      background-color: lightgreen;

      .manage-needs-label {
        grid-column: 1 / span 2;
        grid-row: 1;
      }

      .manage-needs-selected-campaign {
        grid-column: 1;
        grid-row: 2 / span 2;
      }

      .manage-needs-select-opportunity {
        grid-column: 2;
        grid-row: 2 / span 2;
      }
    }
  }
</style>
