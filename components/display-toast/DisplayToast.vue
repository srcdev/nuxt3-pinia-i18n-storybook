<template>
  <div v-if="toastConfig?.showToast" class="display-notification" :class="[styleClassPassthrough, toastConfig?.variant]">
    <div class="display-notification-body">
      <div class="display-notification-description">
        <div class="description-icon icon__wrapper" :class="[toastConfig?.variant]">
          <Icon name="akar-icons:circle-check-fill" class="icon-circle-check-fill" />
        </div>
        <div class="description-text text-normal pl-12 pr-12 wght-700">{{ toastConfig.toastDisplayText }}</div>
        <div class="description-close">
          <button class="description-close-btn">
            <Icon name="material-symbols:close" class="close" :class="[toastConfig?.variant]" />
          </button>
        </div>
      </div>
    </div>
    <div class="display-notification-progress"></div>
  </div>
</template>
<script setup lang="ts">
  import type { IToastConfig } from "@/types/types.displayToast";
  const props = defineProps({
    styleClassPassthrough: {
      type: String,
      default: "",
    },
  });

  const toastConfig = defineModel<undefined | IToastConfig>();
  const displayDuration = toastConfig.value?.duration + "ms";
  const progressDuration = Math.floor(toastConfig.value!.duration * 0.9) + "ms";

  watch(
    () => toastConfig.value,
    () => {
      if (toastConfig.value?.showToast) {
        setTimeout(() => {
          toastConfig.value!.showToast = false;
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

  .display-notification {
    position: fixed;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 6px;
    background-color: #9ce6a8;
    color: white;
    margin: 0;
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

    &-body {
      display: flex;
      flex-direction: row;
      padding: 6px 12px 10px 12px;
    }

    &-description {
      display: flex;
      gap: 4px;
      align-items: center;
      justify-content: space-between;
      font-size: 1rem;
      flex-grow: 2;

      .description {
        &-icon {
          transform: translateY(2px);

          &.success {
            background-color: $color-green-4;
            border-color: $color-green-2;
          }
          &.error {
            background-color: $color-red-3;
            border-color: $color-red-2;
          }
        }

        &-text {
          flex-grow: 1;
          text-align: right;
        }
        &-close {
          &-btn {
            background-color: transparent;
            border: none;
            outline: 0;
            margin: 0;
            padding: 0;
            line-height: initial;

            svg {
              border-radius: 50%;
              border-width: 1px;
              border-style: solid;
              color: $color-white;
              &.success {
                background-color: $color-green-2;
                border-color: $color-green-2;
              }
              &.error {
                background-color: $color-red-2;
                border-color: $color-red-2;
              }
            }
          }
        }
      }
    }

    &-icon {
      height: 26px;
      width: 26px;
      margin-right: 4px;
    }

    &-progress {
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

    &-wrapper {
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
  }
</style>
