<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default" header-theme="header-default" footer-theme="theme-default">
      <template #layout-content>
        <PageRow :fit-content="true" :apply-gutters="true" page-row-theme="theme-default" page-row-inner-theme="theme-default">
          <template #pageRowContent>
            <div>
              <h1 class="text-header-large">Home</h1>
            </div>
          </template>
        </PageRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false,
  });

  useHead({
    title: "Home page",
    meta: [{ name: "description", content: "Desciption meta tag content" }],
    bodyAttrs: {
      class: "",
    },
  });
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";
  .spotlight {
    &-inner {
      background-color: $white;
      padding: 12px;
    }
  }

  .sample-list {
    list-style-type: none;
    padding: 0;

    &.flex {
      li + li {
        margin: 12px 0 0 0;
      }
      @include mqMinTablet {
        display: flex;
        li + li {
          margin: 0 0 0 12px;
        }
      }
    }

    li {
    }
  }
</style>
