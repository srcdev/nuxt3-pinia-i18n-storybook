import { flushPromises, mount, shallowMount, VueWrapper } from "@vue/test-utils";
import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import ComponentUnderTest from "../InputTextCore.vue";
import { useI18nStore } from "@/stores/store.i18n";

// Setup formData
const formId = "test-input";
const fieldsInitialState = {
  username: "",
};
const { formData } = useFormControl(formId, fieldsInitialState);

const propsData = {
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
const wrapperFactory = async (propsData: any) => {
  return mount(ComponentUnderTest, {
    props: propsData,
  });
};

describe("InputTextCore", () => {
  const i18nStore = useI18nStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("is not required by default", async () => {
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    expect(elementUnderTest.attributes("required")).toBe(undefined);
  });

  it("is required when required: true", async () => {
    propsData.required = true;
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    console.log(elementUnderTest.html());
    expect(elementUnderTest.attributes("required")).toBe("");
  });

  it("Has correct attribute values", async () => {
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    expect(elementUnderTest.attributes("id")).toEqual("username");
    expect(elementUnderTest.attributes("name")).toEqual("username");
  });

  it("Has i18n values", async () => {
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    expect(elementUnderTest.attributes("placeholder")).toEqual("eg. YourUserName");
  });

  // TODO: Move these validity tests into their own files.
  it("Validity states - Empty is invalid", async () => {
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    elementUnderTest.setValue("");
    expect(elementUnderTest.element.validity.valid).toBe(false);
  });

  it("Validity states - 1 to 7 chars are invlid", async () => {
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    elementUnderTest.setValue("M");
    expect(elementUnderTest.element.validity.valid).toBe(false);
    elementUnderTest.setValue("My");
    expect(elementUnderTest.element.validity.valid).toBe(false);
    elementUnderTest.setValue("MyU");
    expect(elementUnderTest.element.validity.valid).toBe(false);
    elementUnderTest.setValue("MyUs");
    expect(elementUnderTest.element.validity.valid).toBe(false);
    elementUnderTest.setValue("MyUse");
    expect(elementUnderTest.element.validity.valid).toBe(false);
    elementUnderTest.setValue("MyUser");
    expect(elementUnderTest.element.validity.valid).toBe(false);
    elementUnderTest.setValue("MyUserN");
    expect(elementUnderTest.element.validity.valid).toBe(false);
  });

  it("Validity states - no spaces allowed", async () => {
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    elementUnderTest.setValue("MyUserNameMyUser ame");
    expect(elementUnderTest.element.validity.valid).toBe(false);
  });

  it("Validity states - 8 to 20 chars are valid", async () => {
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    elementUnderTest.setValue("MyUserNa");
    expect(elementUnderTest.element.validity.valid).toBe(true);
    elementUnderTest.setValue("MyUserNameMyUserName");
    expect(elementUnderTest.element.validity.valid).toBe(true);
  });

  it("Test modelValue updates", async () => {
    wrapper = await wrapperFactory(propsData);
    const elementUnderTest = wrapper.find("input");
    elementUnderTest.setValue("MyUserNameMyUserName");
    expect(wrapper.vm.modelValue.data[propsData.name]).toEqual("MyUserNameMyUserName");
  });
});
