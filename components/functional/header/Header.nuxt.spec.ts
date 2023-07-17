// import { setActivePinia, createPinia } from "pinia";
import { mountSuspended } from "nuxt-vitest/utils";
import { beforeEach, describe, it, expect } from "vitest";
import Header from "./Header.vue";
import { useRootStore } from "@/stores/store.root";

describe("Header", () => {
  // beforeEach(() => {
  //   setActivePinia(createPinia());
  // });

  const rootStore = useRootStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Component i18n html", async () => {
    const component = await mountSuspended(Header);
    const textCheck = component.find("h1");
    expect(textCheck.html()).toMatchInlineSnapshot('"<h1 data-v-b96573a8=\\"\\" class=\\"text-header-large text-color-orange\\">Header text from i18n dynamic imports key (<code data-v-b96573a8=\\"\\" class=\\"text-header-large\\">t(\\"header.text\\")</code>)</h1>"');
  });

  it("Shared i18n text", async () => {
    const component = await mountSuspended(Header);
    const textCheck = component.find("[data-test-id='shared-text-test']");
    expect(textCheck.text()).toEqual('Sample shared title entry key (t("shared.title"))');
  });

  it("Store value entry", async () => {
    const component = await mountSuspended(Header);
    const textCheck = component.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("someString value key (rootStore.someString)");
  });

  it("Store value updated", async () => {
    const component = await mountSuspended(Header);

    rootStore.someString = "Some new value";
    expect(rootStore.someString).toBe("Some new value");

    await nextTick();

    const textCheck = component.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("Some new value key (rootStore.someString)");
  });

  it("Store value patched", async () => {
    const component = await mountSuspended(Header);

    rootStore.$patch({ someString: "Another new value" });
    expect(rootStore.someString).toBe("Another new value");

    await nextTick();

    const textCheck = component.find("[data-test-id='store-test']");
    expect(textCheck.text()).toEqual("Another new value key (rootStore.someString)");
  });

  it("should render default props within nuxt suspense", async () => {
    const component = await mountSuspended(Header, {
      props: {
        someProp: "value1",
      },
    });
    const textCheck = component.find("[data-test-id='props-test']");
    expect(textCheck.text()).toEqual("value1 (props.someProp)");
  });
});
