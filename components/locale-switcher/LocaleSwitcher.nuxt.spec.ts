import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
// import { setActivePinia, createPinia } from "pinia";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect, vi } from "vitest";
import ComponentUnderTest from "./LocaleSwitcher.vue";

import { useI18nStore } from "@/stores/store.i18n";

let initialPropsData = {};

let wrapper: VueWrapper<InstanceType<typeof ComponentUnderTest>>;
const wrapperFactory = (propsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

  return mountSuspended(ComponentUnderTest, {
    props: mockPropsData,
  });
};

describe("ComponentUnderTest", () => {
  // beforeEach(() => {
  //   setActivePinia(createPinia());
  // });

  const i18nStore = useI18nStore();
  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Component i18n html", async () => {
    wrapper = await wrapperFactory();

    const testElement = wrapper.find("h1");
    expect(testElement.html()).toMatchInlineSnapshot('"<h1 data-v-c99ff694="" class="text-header-large" data-test-id="locale-switcher-header">Language switcher</h1>"');
  });

  it("Shared i18n text", async () => {
    wrapper = await wrapperFactory();

    const testElement = wrapper.find("[data-test-id='locale-switcher-header']");
    expect(testElement.text()).toEqual("Language switcher");
  });

  it("Lang switch button to be 'Bristolian'", async () => {
    wrapper = await wrapperFactory();

    const testElement = wrapper.find("[data-test-id^='locale-switch-btn']");
    expect(testElement.text()).toEqual("English - Bristolian");
  });

  it("Default locale should be 'en'", async () => {
    wrapper = await wrapperFactory();
    expect(i18nStore.locale).toBe("en");
  });

  it("locale switch button calls store action: (using 'updateLocale')", async () => {
    const updateLocale = vi.fn();
    vi.stubGlobal("updateLocale", updateLocale("bristolian"));

    wrapper = await wrapperFactory();
    await wrapper.get('[data-test-id^="locale-switch-btn"]').trigger("click");
    expect(updateLocale).toHaveBeenCalledWith("bristolian");
  });

  it("locale switch button calls store action: (using setI18n)", async () => {
    const setI18n = vi.fn();
    vi.stubGlobal("setI18n", setI18n("bristolian"));

    wrapper = await wrapperFactory();
    await wrapper.get("[data-test-id^='locale-switch-btn']").trigger("click");
    expect(setI18n).toHaveBeenCalledWith("bristolian");
  });

  it.skip("should display updated swap locale button after selection", async () => {
    i18nStore.$state.locale = "en";

    const setI18n = vi.fn();
    vi.stubGlobal("setI18n", setI18n("bristolian"));

    wrapper = await wrapperFactory();
    await wrapper.get("[data-test-id^='locale-switch-btn']").trigger("click");

    await wrapper.vm.$nextTick();

    // expect(testElement.text()).toEqual("English");
    // i18nStore.$state.locale = "bristolian";

    // const setI18n = vi.fn();
    // vi.stubGlobal("setI18n", setI18n("bristolian"));

    // wrapper = await wrapperFactory();
    // await wrapper.get("[data-test-id^='locale-switch-btn']").trigger("click");

    // await nextTick();
    // await wrapper.vm.$nextTick();
    // wrapper = await wrapperFactory();
    // const testElement = wrapper.find("[data-test-id^='locale-switch-btn']");
    // expect(testElement.text()).toEqual("English");

    // wrapper = await wrapperFactory();

    // const testElement = wrapper.find("[data-test-id^='locale-switch-btn']");
    // expect(testElement.text()).toEqual("English - Bristolian");
  });
});
