<template>
  <div class="display-prompt" :class="[variant, appliedClasses, { dismissed: hide }]" data-test-id="display-prompt">
    <div class="display-prompt-icon" data-test-id="prompt-icon">
      <slot name="icon"></slot>
    </div>
    <div class="display-prompt-content">
      <p class="display-prompt-content-text nbrly-txt-semibold" data-test-id="display-prompt-title">
        <slot name="title"></slot>
      </p>
      <p v-if="hasContent" class="display-prompt-content-text" data-test-id="display-prompt-content">
        <slot name="content"></slot>
      </p>
    </div>
    <div v-if="dismissible" class="display-prompt-action" data-test-id="display-prompt-action" @click.prevent="dismissPrompt()">
      <button class="display-prompt-action-btn" data-test-id="display-prompt-close-btn">
        <Icon name="material-symbols:close" class="close" />
      </button>
    </div>
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
    applyClasses: {
      type: String,
      default: ""
    }
  });

  const slots = useSlots();
  const hasContent = ref(slots.content !== undefined);
  const hide = ref(false);
  const appliedClasses = ref(props.applyClasses);
  const dismissPrompt = () => {
    appliedClasses.value = "";
    hide.value = true;
  };
</script>

<style lang="scss">
  @import "@/assets/styles/imports.scss";

  @mixin prompIcons() {
    color: $color-white;
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

    transition: all linear 200ms;

    &.dismissed {
      opacity: 0;
      height: 0;
      overflow: hidden;
    }

    &.info {
      background-color: $color-blue-2;
    }

    &.success {
      background-color: $color-green-3;
    }

    &.warning {
      background-color: $color-orange-5;
    }

    &.error {
      background-color: $color-red-2;
    }

    &.secondary {
      background-color: $color-grey-3;

      #{ $self }-content {
        color: $color-grey-12;
      }

      #{ $self }-icon {
        :slotted(.icon) {
          color: $color-grey-12;
        }
      }
    }

    &-icon {
      display: inline-block;

      :slotted(.icon) {
        @include prompIcons();
      }
    }

    &-content {
      flex-grow: 1;
      color: $color-white;
      font-size: 14px;
      font-style: normal;
      line-height: 24px;

      &-text {
        margin: 0;
        padding: 0;
      }
    }
    &-action {
      &-btn {
        background-color: transparent;
        border: none;
        outline: 0;
        padding: 0;
        margin: 0;

        &:hover {
          cursor: pointer;
        }
        .icon {
          @include prompIcons();
        }
      }
    }
  }
</style>
