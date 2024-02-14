import { VueWrapper, mount } from "@vue/test-utils";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect, vi } from "vitest";
import ComponentUnderTest from "../DisplayPromptCore.vue";

const initialPropsData = {
  dismissible: true,
  variant: "error",
  applyClasses: "customClassName"
};

const slotIcon = `<span class="fa fa-ban"></span>`;
const slotTitle = "Title slot text";
const slotContent = "Content slot text";
const initialSlots = {
  icon: () => slotIcon,
  title: () => slotTitle,
  content: () => slotContent
};

let wrapper: VueWrapper<InstanceType<typeof ComponentUnderTest>>;
const wrapperFactory = (propsData = {}, slotsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;
  const mockSlotsData = Object.keys(slotsData).length > 0 ? slotsData : initialSlots;

  return mountSuspended(ComponentUnderTest, {
    slots: mockSlotsData,
    props: mockPropsData
  });
};

describe("DisplayPromptCore", () => {
  it("Mounts", () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("has title text ", async () => {
    wrapper = await wrapperFactory();
    const testElem = wrapper.find("[data-test-id='display-prompt-title']");
    expect(testElem.text()).toBe(slotTitle);
  });

  it("has content text ", async () => {
    wrapper = await wrapperFactory();
    const testElem = wrapper.find("[data-test-id='display-prompt-content']");
    expect(testElem.text()).toBe(slotContent);
  });

  it("has action if dismissible true", async () => {
    const dismissPrompt = vi.fn();
    vi.stubGlobal("dismissPrompt", dismissPrompt());

    wrapper = await wrapperFactory();
    const testElem = wrapper.find("[data-test-id='display-prompt-action']");
    const closeBtn = testElem.find("[data-test-id='display-prompt-close-btn']");
    closeBtn.trigger("click");
    expect(dismissPrompt).toHaveBeenCalledOnce();

    await nextTick();
    expect(wrapper.classes()).toContain("dismissed");
  });

  it("has no action if dismissible false", async () => {
    initialPropsData.dismissible = false;
    wrapper = await wrapperFactory(initialPropsData);
    expect(wrapper.html()).toMatchInlineSnapshot(
      '"<div class="display-prompt error customClassName" data-test-id="display-prompt"><div class="display-prompt-icon" data-test-id="prompt-icon"><span class="fa fa-ban"></span></div><div class="display-prompt-content"><p class="display-prompt-content-text nbrly-txt-semibold" data-test-id="display-prompt-title">Title slot text</p><p class="display-prompt-content-text" data-test-id="display-prompt-content">Content slot text</p></div><!--v-if--></div>"'
    );

    // const testElem = wrapper.find("[data-test-id='display-prompt-action']");
    // console.log(">>>>>>>  testElem");
    // console.log(testElem.html());
    // console.log(">>>>>>>  testElem");
    // expect(testElem.html()).toBeUndefined();
  });

  it("has applied classes from props", async () => {
    wrapper = await wrapperFactory();
    const test1Elem = wrapper.find("[data-test-id='display-prompt']");
    expect(test1Elem.classes()).toContain("customClassName");
  });

  // Variants
  it("has correct 'error' class and icon", async () => {
    initialPropsData.variant = "error";
    wrapper = await wrapperFactory(initialPropsData);
    const test1Elem = wrapper.find("[data-test-id='display-prompt']");
    expect(test1Elem.classes()).toContain("error");
    expect(test1Elem.html()).toContain('<span class="fa fa-ban"></span>');
  });

  it("has correct 'info' class and icon", async () => {
    initialPropsData.variant = "info";
    initialSlots.icon = () => '<span class="fa fa-square-info"></span>';
    wrapper = await wrapperFactory(initialPropsData, initialSlots);
    const test1Elem = wrapper.find("[data-test-id='display-prompt']");
    expect(test1Elem.classes()).toContain("info");
    expect(test1Elem.html()).toContain('<span class="fa fa-square-info"></span>');
  });

  it("has correct 'secondary' class and icon", async () => {
    initialPropsData.variant = "secondary";
    initialSlots.icon = () => '<span class="fa fa-square-info"></span>';
    wrapper = await wrapperFactory(initialPropsData, initialSlots);
    const test1Elem = wrapper.find("[data-test-id='display-prompt']");
    expect(test1Elem.classes()).toContain("secondary");
    expect(test1Elem.html()).toContain('<span class="fa fa-square-info"></span>');
  });

  it("has correct 'success' class and icon", async () => {
    initialPropsData.variant = "success";
    initialSlots.icon = () => '<span class="fa fa-square-info"></span>';
    wrapper = await wrapperFactory(initialPropsData, initialSlots);
    const test1Elem = wrapper.find("[data-test-id='display-prompt']");
    expect(test1Elem.classes()).toContain("success");
    expect(test1Elem.html()).toContain('<span class="fa fa-square-info"></span>');
  });

  it("has correct 'warning' class and icon", async () => {
    initialPropsData.variant = "warning";
    initialSlots.icon = () => '<span class="fa fa-square-info"></span>';
    wrapper = await wrapperFactory(initialPropsData, initialSlots);
    const test1Elem = wrapper.find("[data-test-id='display-prompt']");
    expect(test1Elem.classes()).toContain("warning");
    expect(test1Elem.html()).toContain('<span class="fa fa-square-info"></span>');
  });
});
