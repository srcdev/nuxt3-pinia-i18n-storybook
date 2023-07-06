import { mountSuspended } from "nuxt-vitest/utils";
import { describe, it, expect } from "vitest";
import Header from "./Header.vue";

describe("Header", () => {
  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Component i18n", async () => {
    const component = await mountSuspended(Header);
    const headerText = component.find("h1");
    expect(headerText.html()).toMatchInlineSnapshot('"<h1 class=\\"text-color-orange\\">Header text from i18n dynamic imports key(<code>t(\\"header.text\\")</code>)</h1>"');
  });

  it("Shared i18n entry", async () => {
    const component = await mountSuspended(Header);
    const sharedTextTest = component.find("[data-test-id='shared-text-test']");
    expect(sharedTextTest.text()).toEqual('Sample shared title entry key(t("shared.title"))');
  });
});
