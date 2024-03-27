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
    }
  });

  const displayDialog = defineModel<boolean>();
  const closeDialog = () => {
    displayDialog.value = false;
    if (document.querySelector("body") !== null) {
      document.querySelector("body").style.overflow = "initial";
    }
  };

  const slots = useSlots();
  const hasDialogContent = computed(() => slots.dialogContent !== undefined);

  onMounted(() => {
    if (document.querySelector("body") !== null) {
      document.querySelector("body").style.overflow = "hidden";
    }
  });
</script>

<style scoped lang="scss">
  @import "@/assets/styles/imports.scss";

  dialog::backdrop {
    backdrop-filter: blur(10px);
    background-color: yellowgreen;
  }
  .display-dialog {
    &-wrapper {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(5px);
      background-color: transparent;
      border: none;
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
