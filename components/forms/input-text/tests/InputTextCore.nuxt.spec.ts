import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
// import type { ICopyTextConfig } from "@/types/types.copyTextToClipboard";
import ComponentUnderTest from "../InputTextCore.vue";
// import { useAccountStore } from "@/stores/store.account";
// import { useRootStore } from "@/stores/store.root";
import type { IOptionsConfig, IFieldsInitialState } from "@/types/types.forms";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Setup formData
const formId = "test-input";
const fieldsInitialState = <IFieldsInitialState>{
  username: "",
  password: "",
  mobile: "",
  url: "",
  email: "",
  places: [],
  terms: false,
};

const { formData, getErrorCount, updateCustomErrors, resetForm, formIsValid } = useFormControl(formId, fieldsInitialState);

const initialPropsData = {
  type: "text",
  id: "test-id",
  name: "test-name",
  validation: "username",
  required: false,
  isPending: false,
  i18nKey: "pages.samples.sample-form.fields.username",
  modelValue: formData,
};

let wrapper: VueWrapper<InstanceType<typeof ComponentUnderTest>>;
const wrapperFactory = (propsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

  return mountSuspended(ComponentUnderTest, {
    props: mockPropsData,
  });
};

describe("InputTextCore", () => {
  // const accountStore = useAccountStore();
  // const rootStore = useRootStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it.skip("Summary Slot text is displayed", async () => {
    wrapper = await wrapperFactory();
    // const elementUnderTest = wrapper.find("[data-test-id='copyTextToClipboard-summary']");
    // expect(elementUnderTest.text()).toBe(summarySlotContent);
    // expect(elementUnderTest.findComponent({ ref: "summaryContent" }).text()).toBe(summarySlotContent);
  });
});
