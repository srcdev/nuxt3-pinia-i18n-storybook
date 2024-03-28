<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false">
          <template #default>
            <div>
              <h1 class="text-header-large">Feature Cols</h1>
              <p class="text-normal">Feature columns can have 2 0r 3 columns</p>
            </div>
          </template>
        </DisplayRow>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <h1 class="text-header-medium">2 Columns</h1>
            <DisplayFeatureCols
              :content="{
                image: {
                  alt: 'Marrakech',
                  aspectRatio: 1.5,
                  url: '/assets/images/marrakech.jpg'
                }
              }"
            >
              <template #col1>
                <div>
                  <h2 class="text-header-small">Column 1</h2>
                  <p class="text-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur faucibus erat, eget auctor lorem tristique at. Suspendisse neque tellus, venenatis sit amet erat eget, varius mattis magna. Pellentesque ut turpis rhoncus,
                    commodo ex id, egestas felis.
                  </p>
                </div>
              </template>
            </DisplayFeatureCols>
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
    title: "Display Feature Cols",
    meta: [{ name: "description", content: "Display Feature Cols" }],
    bodyAttrs: {
      class: ""
    }
  });
</script>
