<template>
  <div class="display-prompt" :class="[variant, styleClassPassthrough, { dismissed: hide }]" data-test-id="display-prompt">
    <div class="display-prompt-icon" data-test-id="prompt-icon">
      <slot name="icon"></slot>
    </div>
    <div class="display-prompt-content">
      <p class="display-prompt-content-text wght-700" data-test-id="display-prompt-title">
        <slot name="title"></slot>
      </p>
      <p v-if="hasContent" class="display-prompt-content-text" data-test-id="display-prompt-content">
        <slot name="content"></slot>
      </p>
    </div>
    <IconButtonCancel v-if="dismissible" :icon-color="iconColor" @click.prevent="dismissPrompt()" data-test-id="display-prompt-action" button-text="Cancel Small" size="large" style-class-passthrough="display-prompt-action" />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    dismissible: {
      type: Boolean,
      default: false
    },
    variant: {
      type: String,
      default: "error",
      validator(value: string) {
        return ["error", "info", "success", "warning", "secondary"].includes(value);
      }
    },
    styleClassPassthrough: {
      type: String,
      default: ""
    },
    iconColor: {
      type: String as PropType<string>,
      default: "dark-grey",
      validator(value: string) {
        return ["dark-grey", "white"].includes(value);
      }
    }
  });

  const slots = useSlots();
  const hasContent = ref(slots.content !== undefined);
  const hide = ref(false);
  const styleClassPassthrough = ref(props.styleClassPassthrough);
  const dismissPrompt = () => {
    styleClassPassthrough.value = "";
    hide.value = true;
  };
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  @mixin promptIcons() {
    display: inline-block;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    margin: 3px;
  }

  .display-prompt {
    $self: &;
    align-items: center;
    border-radius: 10px;
    display: flex;
    gap: 16px;
    justify-content: space-between;
    padding: 10px 15px;
    overflow: hidden;

    transition: all linear 200ms;

    &.dismissed {
      opacity: 0;
      height: 0;
      padding-block: 0;
    }

    &-icon {
      display: inline-block;

      .icon {
        @include promptIcons();
        overflow: hidden;
      }
    }

    &-content {
      flex-grow: 1;
      font-size: 14px;
      font-style: normal;
      line-height: 24px;

      &-text {
        margin: 0;
        padding: 0;
      }
    }
    &-action {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
    }
  }
</style>
