<template>
  <UtilsIconLink :to="linkDestimation" :linkText="linkText">
    <template #iconOnly>
      <Icon name="material-symbols:account-circle" class="icon-account-btn" />
    </template>
  </UtilsIconLink>
</template>

<script setup lang="ts">
  const props = defineProps({
    linkText: {
      type: String,
      required: true
    }
  });

  const router = useRouter();

  const linkDestimation = ref("/login?from=" + router.currentRoute.value.fullPath);
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  .icon-link {
    .icon-account-btn {
      color: var(--color-white);
      border-radius: 50%;
      box-shadow: 0px 0px 1px 1px transparent;
      transition: all ease-in-out 200ms;

      width: 36px;
      height: 36px;

      &:hover,
      &:focus-visible {
        box-shadow: 0px 0px 1px 1px var(--color-white);
      }
    }
  }
</style>
