<template>
  <div class="simple-grid-item">
    <slot name="content"></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/assets/styles/imports.scss";

.simple-grid-item {
  outline: 1px solid $color-grey-3;
}
</style>
