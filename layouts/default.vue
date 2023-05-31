<template>
  <FlexGroup flex-flow="column" align-items="center" justify-content="space-between" :viewport-height="true" :fit-width="true">
    <template #flexGroup>
      <FlexGroupItem :fit-width="true">
        <template #flexItem>
          <Header></Header>
        </template>
      </FlexGroupItem>
      <FlexGroupItem :flex-grow="true" :fit-width="true">
        <template #flexItem>
          <slot name="layout-content"></slot>
        </template>
      </FlexGroupItem>
      <FlexGroupItem :fit-width="true">
        <template #flexItem>
          <Footer></Footer>
        </template>
      </FlexGroupItem>
    </template>
  </FlexGroup>
</template>

<script setup lang="ts"></script>

<style lang="scss">
// @import "@/assets/styles/imports.scss";
</style>
