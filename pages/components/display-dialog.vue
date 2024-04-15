<template>
  <div>
    <NuxtLayout name="default" page-theme="theme-default">
      <template #layout-content>
        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <h1 class="text-header-large">Display Dialog</h1>
            <p class="text-normal wght-700">Various dialogs and modals</p>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20 pt-20">
          <template #default>
            <h2 class="text-header-medium mb-12">DisplayPrompt</h2>
            <p><InputButtonTertiary @click="controlDialogs('logout', !dialogsConfig['logout'].open)" type="button" button-text="Show Dialog Prompt" size="medium" style-class-passthrough="mb-12" /><br />Click to display dialog</p>

            <DisplayDialogPrompt v-if="dialogsConfig['logout'].open" v-model="dialogsConfig['logout'].open" style-class-passthrough="content-width">
              <template #dialogContent>
                <p class="text-normal wght-700">Confirm logout?</p>
              </template>
              <template #actionButtonLeft>
                <InputButtonCancel type="submit" button-text="Cancel" size="medium" style-class-passthrough="mb-12" />
              </template>
              <template #actionButtonRight>
                <InputButtonConfirm type="submit" button-text="Confirm" size="medium" style-class-passthrough="mb-12" />
              </template>
            </DisplayDialogPrompt>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Dialog 1</h2>
            <p><InputButtonTertiary @click="toggleDialog(!displayDialog)" type="button" button-text="Show Dialog" size="medium" style-class-passthrough="mb-12" /><br />Click to display dialog</p>
            <DisplayDialogCore v-if="displayDialog" v-model="displayDialog">
              <template #dialogContent>
                <h2 class="text-header-medium mb-12">Success Prompts</h2>
                <DisplayPromptSuccess :dismissible="true" style-class-passthrough="mt-20 mb-20">
                  <template #title>Error Prompt Title with content (Dismissable)</template>
                  <template #content>This is prompt content, it can contain html or plain text.</template>
                </DisplayPromptSuccess>

                <div>
                  <p class="text-normal mb-12"><code>&lt;InputButtonConfirm&gt;</code></p>
                  <div placement="left-center" gap="12px" flex-wrap="wrap">
                    <div>
                      <InputButtonConfirm type="submit" button-text="Confirm Small" size="small" style-class-passthrough="mb-12" />
                    </div>
                    <div>
                      <InputButtonConfirm type="submit" button-text="Confirm Normal" size="normal" style-class-passthrough="mb-12" />
                    </div>
                    <div>
                      <InputButtonConfirm type="submit" button-text="Confirm Medium" size="medium" style-class-passthrough="mb-12" />
                    </div>
                    <div>
                      <InputButtonConfirm type="submit" button-text="Confirm Large" size="large" style-class-passthrough="mb-12" />
                    </div>
                  </div>
                </div>

                <div>
                  <p class="text-normal mb-12"><code>&lt;InputButtonWarning&gt;</code></p>
                  <div placement="left-center" gap="12px" flex-wrap="wrap">
                    <div>
                      <InputButtonWarning type="submit" button-text="Warning Small" size="small" style-class-passthrough="mb-12" />
                    </div>
                    <div>
                      <InputButtonWarning type="submit" button-text="Warning Normal" size="normal" style-class-passthrough="mb-12" />
                    </div>
                    <div>
                      <InputButtonWarning type="submit" button-text="Warning Medium" size="medium" style-class-passthrough="mb-12" />
                    </div>
                    <div>
                      <InputButtonWarning type="submit" button-text="Warning Large" size="large" style-class-passthrough="mb-12" />
                    </div>
                  </div>
                </div>
              </template>
            </DisplayDialogCore>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Error Prompts</h2>
            <DisplayPromptError :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptError>

            <DisplayPromptError :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title Only (Dismissable)</template>
            </DisplayPromptError>

            <DisplayPromptError :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptError>

            <DisplayPromptError :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptError>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Warning Prompts</h2>
            <DisplayPromptWarning :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptWarning>

            <DisplayPromptWarning :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Warning Prompt Title Only (Dismissable)</template>
            </DisplayPromptWarning>

            <DisplayPromptWarning :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Warning Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptWarning>

            <DisplayPromptWarning :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Warning Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptWarning>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Info Prompts</h2>
            <DisplayPromptInfo :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptInfo>

            <DisplayPromptInfo :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Info Prompt Title Only (Dismissable)</template>
            </DisplayPromptInfo>

            <DisplayPromptInfo :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Info Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptInfo>

            <DisplayPromptInfo :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Info Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptInfo>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Success Prompts</h2>
            <DisplayPromptSuccess :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptSuccess>

            <DisplayPromptSuccess :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Success Prompt Title Only (Dismissable)</template>
            </DisplayPromptSuccess>

            <DisplayPromptSuccess :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Success Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptSuccess>

            <DisplayPromptSuccess :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Success Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptSuccess>
          </template>
        </DisplayRow>

        <DisplayRow :use-available-width="false" :apply-gutters="false" style-class-passthrough="pb-20">
          <template #default>
            <h2 class="text-header-medium mb-12">Secondary Prompts</h2>
            <DisplayPromptSecondary :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Error Prompt Title with content (Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptSecondary>

            <DisplayPromptSecondary :dismissible="true" style-class-passthrough="mt-20 mb-20">
              <template #title>Secondary Prompt Title Only (Dismissable)</template>
            </DisplayPromptSecondary>

            <DisplayPromptSecondary :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Secondary Prompt Title with content (Not Dismissable)</template>
              <template #content>This is prompt content, it can contain html or plain text.</template>
            </DisplayPromptSecondary>

            <DisplayPromptSecondary :dismissible="false" style-class-passthrough="mt-20 mb-20">
              <template #title>Secondary Prompt Title Only (Not Dismissable)</template>
            </DisplayPromptSecondary>
          </template>
        </DisplayRow>
      </template>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: false
  });

  useHead({
    title: "Display Dialog",
    meta: [{ name: "description", content: "Display Dialog" }],
    bodyAttrs: {
      class: ""
    }
  });

  const displayDialog = ref(false);
  const toggleDialog = (state: boolean) => {
    displayDialog.value = state;
  };

  const dialogsConfig = ref({
    logout: {
      open: false
    }
  });

  const controlDialogs = (name: string, state: boolean) => {
    console.log("controlDialogs > name > ", name, state);
    (dialogsConfig.value as Record<string, { open: boolean }>)[name].open = state;
  };

  // Cookie value string as number problem
  const id = useCookie("id");

  id.value = "1234.5";
  // this will be 1234.5 when read

  const id2 = useCookie("id2", {
    decode(value) {
      return value;
    }
  });
  id2.value = "1234.5";
  // this will be '1234.5' when read
</script>
