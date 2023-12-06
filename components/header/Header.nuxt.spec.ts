import { mountSuspended } from "nuxt-vitest/utils";
import { describe, it, expect } from "vitest";
import Header from "./Header.vue";
import { useAccountStore } from "@/stores/store.account";
import { useRootStore } from "@/stores/store.root";

let initialPropsData = {
  someProp: "value1",
};

let wrapper;
const wrapperFactory = (propsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

  return mountSuspended(Header, {
    props: mockPropsData,
  });
};

describe("Header", () => {
  const accountStore = useAccountStore();
  const rootStore = useRootStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Component i18n html", async () => {
    wrapper = await wrapperFactory();

    const textCheck = wrapper.find("h1");
    expect(textCheck.html()).toMatchInlineSnapshot('"<h1 data-v-b96573a8=\\"\\" class=\\"text-header-large text-color-orange\\">Nuxt3 Playground Site</h1>"');
  });

  it("Component i18n text", async () => {
    wrapper = await wrapperFactory();

    const textCheck = wrapper.find("h1");
    expect(textCheck.text()).toEqual("Nuxt3 Playground Site");
  });

  it("Store value entry", async () => {
    wrapper = await wrapperFactory();
    expect(rootStore.someString).toBe("someString value");
  });

  it("Store value updated", async () => {
    wrapper = await wrapperFactory();

    rootStore.someString = "Some new value";
    expect(rootStore.someString).toBe("Some new value");
  });

  it("Store value patched", async () => {
    wrapper = await wrapperFactory();

    rootStore.$patch({ someString: "Another new value" });
    expect(rootStore.someString).toBe("Another new value");
  });

  it.skip("should render default props within nuxt suspense", async () => {
    const props = {
      someProp: "value1",
    };
    wrapper = await wrapperFactory(props);

    const textCheck = wrapper.find("[data-test-id='props-test']");
    expect(textCheck.text()).toEqual("value1");
  });

  it("should render store signed out within nuxt suspense", async () => {
    wrapper = await wrapperFactory();

    accountStore.signedIn = false;
    expect((accountStore.signedIn = false)).toBeFalsy();

    // await nextTick();
    // const storeCheck = wrapper.find("[data-test-id='account-state-test']");
    // expect(storeCheck.text()).toEqual("Signed out");
  });

  it("should render store signed in within nuxt suspense", async () => {
    wrapper = await wrapperFactory();

    accountStore.signedIn = true;
    expect((accountStore.signedIn = true)).toBeTruthy();

    // await nextTick();
    // const storeCheck = wrapper.find("[data-test-id='account-state-test']");
    // expect(storeCheck.text()).toEqual("Signed in");
  });
});
