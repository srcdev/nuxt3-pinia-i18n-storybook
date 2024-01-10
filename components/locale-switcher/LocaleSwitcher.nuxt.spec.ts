import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect, vi } from "vitest";
import _sut from "./LocaleSwitcher.vue";

import { useI18nStore } from "@/stores/store.i18n";

// mock setLocale??
const useI18n = vi.fn(() => {
  return {
    setLocale: vi.fn(),
  };
});

let initialPropsData = {};

let wrapper;
const wrapperFactory = (propsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

  return mountSuspended(_sut, {
    props: mockPropsData,
  });
};

describe("_sut", () => {
  const i18nStore = useI18nStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Component i18n html", async () => {
    wrapper = await wrapperFactory();

    const textCheck = wrapper.find("h1");
    expect(textCheck.html()).toMatchInlineSnapshot('"<h1 data-v-c99ff694="" class="text-header-large" data-test-id="locale-switcher-header">Language switcher</h1>"');
  });

  it("Shared i18n text", async () => {
    wrapper = await wrapperFactory();

    const textCheck = wrapper.find("[data-test-id='locale-switcher-header']");
    expect(textCheck.text()).toEqual("Language switcher");
  });

  it("Lang switch button to be 'Bristolian'", async () => {
    wrapper = await wrapperFactory();

    const textCheck = wrapper.find("[data-test-id='locale-switch-btn']");
    expect(textCheck.text()).toEqual("English - Bristolian");
  });

  it("Default locale should be 'en'", async () => {
    wrapper = await wrapperFactory();
    expect(i18nStore.locale).toBe("en");
  });

  it("locale switch button calls store action: (using 'mockUpdateLocale')", async () => {
    i18nStore.locale = "en";
    const mockUpdateLocale = vi.spyOn(i18nStore, "updateLocale");
    wrapper = await wrapperFactory();
    await wrapper.get('[data-test-id="locale-switch-btn"]').trigger("click");
    expect(mockUpdateLocale).toHaveBeenCalledWith("bristolian");
  });

  it.skip("locale switch button calls store action: (using setLocale)", async () => {
    i18nStore.locale = "en";

    const setLocale = vi.fn();
    vi.stubGlobal("setLocale", setLocale);

    wrapper = await wrapperFactory();
    await wrapper.get('[data-test-id="locale-switch-btn"]').trigger("click");

    expect(setLocale).toHaveBeenCalledWith("bristolian");
  });
});
