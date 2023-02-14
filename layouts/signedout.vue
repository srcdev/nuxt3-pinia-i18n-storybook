<template>
  <div class="page-wrapper">
    <header>
      <h1>This is signed out layout header section</h1>
    </header>
    <div class="content-wrapper">
      <slot name="layout-content"></slot>
    </div>
    <footer>
      <h1>This is signed out layout footer section</h1>
    </footer>
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/imports.scss";

.page {
  &-wrapper {
    background-color: white;
  }
}

.content {
  &-wrapper {
    padding: 12px;
  }
}
</style>
