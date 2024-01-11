<template>
  <figure v-if="toastConfig.showToast" class="notification top right" :class="[toastConfig.variant]">
    <div class="notification__body">
      <div class="notification__description">
        <div class="icon__wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M5 12l5 5l10 -10"></path>
          </svg>
        </div>
        Report is saved!
      </div>
      <button class="notification__button">Edit report</button>
    </div>
    <div class="notification__progress"></div>
  </figure>
</template>
<script setup lang="ts">
  import type { IToastConfig } from "@/types/types.displayToast";

  const toastConfig = defineModel<IToastConfig>();
  const displayDuration = toastConfig.value.duration + "ms";
  const progressDuration = Math.floor(toastConfig.value.duration * 0.9) + "ms";

  // const displayToast = computed(() => {
  //   setTimeout(() => {
  //     return false;
  //   }, 5000);
  // });

  watch(
    () => toastConfig.value,
    () => {
      if (toastConfig.value.showToast) {
        setTimeout(() => {
          toastConfig.value.showToast = false;
        }, 5000);
      }
    },
    { deep: true }
  );
</script>

<style lang="scss" scoped>
  @import "@/assets/styles/imports.scss";

  @keyframes fade-in {
    5% {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    95% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes progress {
    to {
      transform: scaleX(1);
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: Poppins, sans-serif;
  }

  body {
    background-color: #f3f1f9;
    display: grid;
    place-items: center;
    font-size: 16px;
  }

  .notification {
    position: absolute;
    // bottom: 32px;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 6px;
    background-color: #9ce6a8;
    color: white;
    // max-width: 320px;
    // width: 100%;
    // transform: translateY(30px);
    opacity: 0;
    visibility: hidden;
    animation: fade-in v-bind(displayDuration) linear;
    border-radius: 12px;
    z-index: 4;

    &.full-width {
      left: 24px;
      right: 24px;
    }

    &.left {
      left: 24px;
    }

    &.right {
      right: 24px;
    }

    &.top {
      top: 24px;
      transform: translateY(-30px);
    }
    &.bottom {
      bottom: 24px;
      transform: translateY(30px);
    }

    &.success {
      background-color: $color-green-4;
      border-color: $color-green-2;
    }
    &.error {
      background-color: $color-red-3;
      border-color: $color-red-2;
    }
  }

  .notification__description {
    display: flex;
    gap: 4px;
    align-items: center;
    font-size: 1rem;
    flex-grow: 2;
  }

  .notification__icon {
    height: 26px;
    width: 26px;
    margin-right: 4px;
  }

  .notification__body {
    display: flex;
    flex-direction: row;
    padding: 12px;
  }

  .notification__button {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0;
    border: none;
    background: none;
    font-size: 1.1rem;
    white-space: nowrap;
    margin-left: 20px;
    flex-grow: 1;
    color: var(white);
  }

  .notification__button:hover {
    text-decoration: underline;
  }

  .notification__progress {
    position: absolute;
    right: 8px;
    bottom: 4px;
    width: calc(100% - 16px);
    height: 3px;
    transform: scaleX(0);
    transform-origin: right;
    background: linear-gradient(to right, #9ce6a8, #9ce6a8);
    border-radius: inherit;
    animation: progress v-bind(progressDuration) 0.3s linear;
  }

  .icon__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #9ce6a8;
    margin-right: 8px;
    padding: 6px;
  }

  .icon__wrapper svg {
    stroke: var(#9ce6a8);
    stroke-width: 3px;
  }
</style>
