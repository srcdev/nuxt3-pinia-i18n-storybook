// import { setActivePinia, createPinia } from "pinia";
import { mountSuspended } from "nuxt-vitest/utils";
// import { mockReturnValue } from "vitest-environment-nuxt/utils";
import { beforeEach, describe, it, expect, vi } from "vitest";
import Header from "./Header.vue";
import { useAccountStore } from "@/stores/store.account";
import { useRootStore } from "@/stores/store.root";

// import { useI18n } from "vue-i18n";
// vi.mock("vue-i18n");
// useI18n.mockReturnValue({
//   t: (tKey: string) => tKey,
// });

describe("Header", () => {
  // beforeEach(() => {
  //   setActivePinia(createPinia());
  // });

  const accountStore = useAccountStore();
  const rootStore = useRootStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Component i18n html", async () => {
    const component = await mountSuspended(Header);
    const textCheck = component.find("h1");
    expect(textCheck.html()).toMatchInlineSnapshot('"<h1 data-v-b96573a8=\\"\\" class=\\"text-header-large text-color-orange\\">header.text</h1>"');
  });

  it("Shared i18n text", async () => {
    const component = await mountSuspended(Header);
    const textCheck = component.find("[data-test-id='shared-text-test']");
    expect(textCheck.text()).toEqual("shared.title");
  });

  it("Store value entry", async () => {
    const component = await mountSuspended(Header);
    const textCheck = component.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("someString value");
  });

  it("Store value updated", async () => {
    const component = await mountSuspended(Header);

    rootStore.someString = "Some new value";
    expect(rootStore.someString).toBe("Some new value");

    await nextTick();

    const textCheck = component.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("Some new value");
  });

  it("Store value patched", async () => {
    const component = await mountSuspended(Header);

    rootStore.$patch({ someString: "Another new value" });
    expect(rootStore.someString).toBe("Another new value");

    await nextTick();

    const textCheck = component.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("Another new value");
  });

  it("should render default props within nuxt suspense", async () => {
    const component = await mountSuspended(Header, {
      props: {
        someProp: "value1",
      },
    });
    const textCheck = component.find("[data-test-id='props-test']");
    expect(textCheck.text()).toEqual("value1");
  });

  it("should render store signed out within nuxt suspense", async () => {
    const component = await mountSuspended(Header);

    accountStore.signedIn = false;
    expect((accountStore.signedIn = false)).toBeFalsy();

    await nextTick();

    const storeCheck = component.find("[data-test-id='account-state-test']");
    expect(storeCheck.text()).toEqual("header.signedOut");
  });

  it("should render store signed in within nuxt suspense", async () => {
    const component = await mountSuspended(Header);

    accountStore.signedIn = true;
    expect((accountStore.signedIn = true)).toBeTruthy();

    await nextTick();

    const storeCheck = component.find("[data-test-id='account-state-test']");
    expect(storeCheck.text()).toEqual("header.signedIn");
  });
});
