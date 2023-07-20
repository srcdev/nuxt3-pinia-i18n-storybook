import { mountSuspended } from "nuxt-vitest/utils";
import { beforeEach, describe, it, expect, vi } from "vitest";
import Header from "./Header.vue";
import { useAccountStore } from "@/stores/store.account";
import { useRootStore } from "@/stores/store.root";

// set up i18n
// TODO: Move to setupFiles/i18n
// import { createI18n } from "vue-i18n";
// import messages from "@/locales/";
// const rootStore = useRootStore();
// const i18n = createI18n({
//   legacy: false,
//   globalInjection: true,
//   locale: rootStore.locale,
//   locales: rootStore.locales,
//   fallbackLocale: rootStore.fallbackLocale,
//   messages: messages,
// });

let initialPropsData = {
  someProp: "value1",
};

// let wrapper: VueWrapper<InstanceType<typeof Header>>;
// let wrapper: InstanceType<typeof Header>;
// let wrapper: typeof Header;
let wrapper;
const wrapperFactory = (propsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

  return mountSuspended(Header, {
    // mounted: vi.fn(),
    // global: {
    //   plugins: [i18n],
    // },
    props: mockPropsData,
  });
};

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
    wrapper = await wrapperFactory();
    // wrapper = await mountSuspended(Header);
    const textCheck = wrapper.find("h1");
    expect(textCheck.html()).toMatchInlineSnapshot('"<h1 data-v-b96573a8=\\"\\" class=\\"text-header-large text-color-orange\\">[en] Header text from i18n dynamic imports</h1>"');
  });

  it("Shared i18n text", async () => {
    wrapper = await wrapperFactory();
    // wrapper = await mountSuspended(Header);
    const textCheck = wrapper.find("[data-test-id='shared-text-test']");
    expect(textCheck.text()).toEqual("[en] Sample shared title entry");
  });

  it("Store value entry", async () => {
    wrapper = await wrapperFactory();
    // wrapper = await mountSuspended(Header);
    const textCheck = wrapper.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("someString value");
  });

  it("Store value updated", async () => {
    wrapper = await wrapperFactory();
    // wrapper = await mountSuspended(Header);

    rootStore.someString = "Some new value";
    expect(rootStore.someString).toBe("Some new value");

    await nextTick();

    const textCheck = wrapper.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("Some new value");
  });

  it("Store value patched", async () => {
    wrapper = await wrapperFactory();
    // wrapper = await mountSuspended(Header);

    rootStore.$patch({ someString: "Another new value" });
    expect(rootStore.someString).toBe("Another new value");

    await nextTick();

    const textCheck = wrapper.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("Another new value");
  });

  it("should render default props within nuxt suspense", async () => {
    const props = {
      someProp: "value1",
    };
    wrapper = await wrapperFactory(props);
    // wrapper = await mountSuspended(Header, {
    //   props: {
    //     someProp: "value1",
    //   },
    // });
    const textCheck = wrapper.find("[data-test-id='props-test']");
    expect(textCheck.text()).toEqual("value1");
  });

  it("should render store signed out within nuxt suspense", async () => {
    wrapper = await wrapperFactory();
    // wrapper = await mountSuspended(Header);

    accountStore.signedIn = false;
    expect((accountStore.signedIn = false)).toBeFalsy();

    await nextTick();

    const storeCheck = wrapper.find("[data-test-id='account-state-test']");
    // test for key if not passing globals for i18n
    // expect(storeCheck.text()).toEqual("header.signedOut");
    expect(storeCheck.text()).toEqual("[en] Signed out");
  });

  it("should render store signed in within nuxt suspense", async () => {
    wrapper = await wrapperFactory();
    // wrapper = await mountSuspended(Header);

    accountStore.signedIn = true;
    expect((accountStore.signedIn = true)).toBeTruthy();

    await nextTick();

    const storeCheck = wrapper.find("[data-test-id='account-state-test']");
    // test for key if not passing globals for i18n
    // expect(storeCheck.text()).toEqual("header.signedIn");
    expect(storeCheck.text()).toEqual("[en] Signed in");
  });
});
