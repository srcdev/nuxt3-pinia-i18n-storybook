<template>
  <footer class="footer">
    <div class="footer-inner">
      <ul class="footer-links-list">
        <li class="footer-links-item">
          <NuxtLink to="/" class="footer-links-link">Home</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
@import "@/assets/styles/imports.scss";

.footer {
  // $self: &;

  &-inner {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  &-links {
    &-list {
      display: flex;
      list-style-type: none;
    }
    // &-item {
    // }
    &-link {
      display: block;
      padding: 0.6rem;
    }
  }
}
</style>
