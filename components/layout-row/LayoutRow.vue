<template>
  <div class="content-grid" :class="displayRowTheme">
    <div :class="[width]">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    width: {
      type: String,
      default: "",
      validator: (val) => ["full-width", "breakout"].includes(val as string)
    },
    applyGutters: {
      type: Boolean,
      default: false
    },
    displayRowTheme: {
      type: String,
      default: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green", "theme-black", "theme-dark", "theme-header", "theme-orange", "theme-orange-lighter", "theme-orange-darker"].includes(val as string)
    },
    displayRowInnerTheme: {
      type: String,
      default: "theme-default",
      validator: (val) => ["theme-default", "theme-white", "theme-grey", "theme-blue", "theme-green", "theme-black", "theme-dark", "theme-orange", "theme-orange-lighter", "theme-orange-darker"].includes(val as string)
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    }
  });
</script>

<style>
  .content-grid {
    --padding-inline: 1rem;
    --content-max-width: 1200px;
    --breakout-max-width: 100%;

    --breakout-size: calc((var(--breakout-max-width) - var(--content-max-width)) / 2);

    display: grid;
    grid-template-columns:
      [full-width-start] minmax(var(--padding-inline), 1fr)
      [breakout-start] minmax(0, var(--breakout-size))
      [content-start] min(100% - (var(--padding-inline) * 2), var(--content-max-width))
      [content-end]
      minmax(0, var(--breakout-size)) [breakout-end]
      minmax(var(--padding-inline), 1fr) [full-width-end];
  }

  .content-grid > :not(.breakout, .full-width),
  .full-width > :not(.breakout, .full-width) {
    grid-column: content;
  }

  .content-grid > .breakout {
    grid-column: breakout;
  }

  .content-grid > .full-width {
    grid-column: full-width;

    display: grid;
    grid-template-columns: inherit;
  }

  img.full-width {
    width: 100%;
    max-height: 45vh;
    object-fit: cover;
  }

  :root {
    --color-scheme: dark;

    --font-family: system-ui;

    --fs-300: clamp(0.94rem, calc(0.92rem + 0.08vw), 0.98rem);
    --fs-400: clamp(1.13rem, calc(1.06rem + 0.33vw), 1.31rem);
    --fs-500: clamp(1.35rem, calc(1.21rem + 0.69vw), 1.75rem);
    --fs-600: clamp(1.62rem, calc(1.37rem + 1.24vw), 2.33rem);
    --fs-700: clamp(1.94rem, calc(1.54rem + 2.03vw), 3.11rem);
    --fs-800: clamp(2.33rem, calc(1.7rem + 3.15vw), 4.14rem);
    --fs-900: clamp(2.8rem, calc(1.85rem + 4.74vw), 5.52rem);

    --clr-primary-300: hsl(219, 76%, 55%);
    --clr-primary-400: hsl(219, 76%, 40%);
    --clr-primary-500: hsl(219, 76%, 25%);
    --clr-secondary-300: hsl(269, 75%, 55%);
    --clr-secondary-400: hsl(269, 75%, 40%);
    --clr-secondary-500: hsl(269, 75%, 25%);
    --clr-accent-200: hsl(358, 85%, 80%);
    --clr-accent-300: hsl(358, 72%, 65%);
    --clr-accent-400: hsl(358, 72%, 50%);
    --clr-accent-500: hsl(358, 72%, 35%);
  }

  .bg-primary {
    background: var(--clr-primary-500);
  }

  .bg-secondary {
    background: var(--clr-secondary-500);
  }
</style>
