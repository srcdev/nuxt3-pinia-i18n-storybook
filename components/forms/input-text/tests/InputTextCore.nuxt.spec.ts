import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import ComponentUnderTest from "../InputTextCore.vue";

// Setup formData
const formId = "test-input";
const fieldsInitialState = {
  username: "",
};

const { formData } = useFormControl(formId, fieldsInitialState);

const initialPropsData = {
  type: "text",
  id: "username",
  name: "username",
  validation: "username",
  required: false,
  isPending: false,
  i18nKey: "pages.samples.sample-form.fields.username",
  modelValue: formData.value,
  "onUpdate:modelValue": (event: string) => wrapper.setProps({ modelValue: event }),
};

let wrapper: VueWrapper<InstanceType<typeof ComponentUnderTest>>;
const wrapperFactory = async (propsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

  return mountSuspended(ComponentUnderTest, {
    props: mockPropsData, // TODO: Don't know why this type error at the moment
  });
};

describe("InputTextCore", () => {
  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("is not required by default", async () => {
    wrapper = await wrapperFactory();
    const elementUnderTest = wrapper.find("input");
    expect(elementUnderTest.attributes("required")).toBe(undefined);
  });

  // skipped props set up currently working when passing via object
  it.skip("is required when required: true", async () => {
    const props = {
      required: true,
    };
    wrapper = await wrapperFactory(props);
    const elementUnderTest = wrapper.find("input");
    expect(elementUnderTest.attributes("required")).toBeTruthy();
  });

  it("Has correct attribute values", async () => {
    wrapper = await wrapperFactory();
    const elementUnderTest = wrapper.find("input");
    expect(elementUnderTest.attributes("id")).toEqual("username");
    expect(elementUnderTest.attributes("name")).toEqual("username");
  });

  it("Test modelValue updates", async () => {
    wrapper = await wrapperFactory();
    const elementUnderTest = wrapper.find("input");
    elementUnderTest.setValue("me@myemail.address.com");
    expect(wrapper.vm.modelValue.data[initialPropsData.name]).toEqual("me@myemail.address.com");
  });
});
