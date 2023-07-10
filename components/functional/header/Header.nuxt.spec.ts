import { mountSuspended } from "nuxt-vitest/utils";
import { describe, it, expect } from "vitest";
import Header from "./Header.vue";
import { useRootStore } from "@/stores/store.root"; // Only need to import here due to lack of imports support within Storybook.

describe("Header", () => {
  const rootStore = useRootStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Component i18n html", async () => {
    const component = await mountSuspended(Header);
    const headerText = component.find("h1");
    expect(headerText.html()).toMatchInlineSnapshot('"<h1 class=\\"text-color-orange\\">Header text from i18n dynamic imports key(<code>t(\\"header.text\\")</code>)</h1>"');
  });

  it("Shared i18n text", async () => {
    const component = await mountSuspended(Header);
    const sharedTextTest = component.find("[data-test-id='shared-text-test']");
    expect(sharedTextTest.text()).toEqual('Sample shared title entry key(t("shared.title"))');
  });

  it("Store value entry", async () => {
    const component = await mountSuspended(Header);
    const storeTextTest = component.find("[data-test-id='store-test']");
    expect(storeTextTest.text()).toEqual("someString value key(rootStore.someString)");
  });

  it("Store value updated", async () => {
    const component = await mountSuspended(Header);

    rootStore.someString = "Some new value";
    expect(rootStore.someString).toBe("Some new value");

    await nextTick();

    const storeTextTest = component.find("[data-test-id='store-test']");
    expect(storeTextTest.text()).toEqual("Some new value key(rootStore.someString)");
  });

  it("Store value patched", async () => {
    const component = await mountSuspended(Header);

    rootStore.$patch({ someString: "Another new value" });
    expect(rootStore.someString).toBe("Another new value");

    await nextTick();

    const storeTextTest = component.find("[data-test-id='store-test']");
    expect(storeTextTest.text()).toEqual("Another new value key(rootStore.someString)");
  });
});
