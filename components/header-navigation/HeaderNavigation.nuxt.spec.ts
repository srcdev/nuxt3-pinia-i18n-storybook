import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import HeaderNavigation from "./HeaderNavigation.vue";

let wrapper;
const wrapperFactory = () => {
  return mountSuspended(HeaderNavigation);
};

describe("HeaderNavigation", () => {
  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("should render burger nav button", async () => {
    wrapper = await wrapperFactory();
    const button = wrapper.find("[data-test-id='burger-nav']");
    expect(button.classes()).toContain("closed");
  });

  it.skip("clicking burger nav when closed triggers open action", async () => {
    wrapper = await wrapperFactory();
    const button = wrapper.find("[data-test-id='burger-nav']");
    button.trigger("click");
    await nextTick();
    expect(button.classes()).toContain("open");
  });
});
