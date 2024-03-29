<template>
  <dialog class="display-dialog-wrapper" :class="[styleClassPassthrough]" :align-content="`${positionY}-${positionX}`" :open="displayDialog" ref="dialogRef">
    <focus-trap v-model:active="displayDialog" :clickOutsideDeactivates="true" @deactivate="closeDialog()">
      <div class="display-dialog-inner">
        <div class="display-dialog-top-bar" align-content="center-right">
          <IconButtonCancel @click.prevent="closeDialog()" button-text="Cancel Small" size="large" style-class-passthrough="mb-12" />
        </div>
        <p>WIP:</p>
        <slot v-if="hasDialogContent" name="dialogContent"></slot>
      </div>
    </focus-trap>
  </dialog>
</template>

<script setup lang="ts">
  import { FocusTrap } from "focus-trap-vue";
  const props = defineProps({
    styleClassPassthrough: {
      type: String,
      default: ""
    },
    variant: {
      type: String,
      default: "dialog",
      validator: (val) => ["dialog", "modal"].includes(val as string)
    },
    positionX: {
      type: String,
      default: "center",
      validator: (val) => ["left", "center", "right"].includes(val as string)
    },
    positionY: {
      type: String,
      default: "center",
      validator: (val) => ["top", "center", "bottom"].includes(val as string)
    },
    lockViewport: {
      type: Boolean,
      default: true
    }
  });

  const displayDialog = defineModel<boolean>();
  const bodyTag = ref<HTMLBodyElement | null>(null);
  const lockViewport = toRef<boolean>(props.lockViewport);

  const closeDialog = () => {
    displayDialog.value = false;

    if (lockViewport.value && bodyTag.value !== null) {
      bodyTag.value.classList.remove("lock");
    }
  };

  const slots = useSlots();
  const hasDialogContent = computed(() => slots.dialogContent !== undefined);

  onMounted(() => {
    bodyTag.value = document.querySelector("body");
    if (lockViewport.value && bodyTag.value !== null) {
      bodyTag.value.classList.add("lock");
    }
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  .display-dialog {
    &-wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(5px);
      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid $color-grey-1;
      z-index: 13;

      display: none;

      &[open] {
        display: flex;
      }
    }

    &-inner {
      background-color: $white;
      width: 100vw;
      margin: 12px;
      padding: 12px;

      @media only screen and (min-width: 768px) {
        width: 720px;
      }

      // @media only screen and (min-width: 1024px) {
      //   height: 100dvh;
      //   width: 100vw;
      // }
    }

    // &-top-bar {
    // }
  }
</style>
