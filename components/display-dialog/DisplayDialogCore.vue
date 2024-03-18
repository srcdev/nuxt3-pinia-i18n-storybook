<template>
  <dialog class="display-dialog-wrapper" :class="[styleClassPassthrough]" :align-content="`${positionY}-${positionX}`" :open="displayDialog" ref="dialogRef">
    <focus-trap v-model:active="displayDialog" :clickOutsideDeactivates="true">
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
    // visible: {
    //   type: Boolean,
    //   default: true
    // }
  });

  // const visible = toRef(() => props.visible);
  const displayDialog = defineModel<boolean>();
  const closeDialog = () => {
    console.log("closeDialog()");
    displayDialog.value = false;
  };

  const slots = useSlots();
  const hasDialogContent = computed(() => slots.dialogContent !== undefined);

  // document.querySelector("body")?.style.overflow = "hidden";

  // watch(
  //   () => displayDialog,
  //   (currentValue) => {
  //     const body = document.querySelector("body");

  //     // if (process.client) {
  //     if (currentValue) {
  //       console.log("currentValue IF:", currentValue);
  //       // body?.style.overflow = "hidden";
  //     } else {
  //       // body?.style.overflow = "auto";
  //       console.log("currentValue ELSE:", currentValue);
  //     }
  //   }
  //   // }
  // );
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
      height: 50dvh;
      width: 50vw;
      margin: 12px;
      padding: 12px;
    }

    &-top-bar {
    }
  }
</style>
