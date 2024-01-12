import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import type { ICopyTextConfig } from "@/types/types.copyTextToClipboard";
import ComponentUnderTest from "../CopyTextToClipboard.vue";
// import { useAccountStore } from "@/stores/store.account";
// import { useRootStore } from "@/stores/store.root";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const initialPropsData = {
  config: {
    applyClasses: "customClass",
    copyBtnText: "Copy",
    copyLabel: "Secret Key",
    stringToCopy: "GU4DMMZRGI2TSLJVMFTDSLJUGUYTILLBGQZTELLDMYYGCOBQMIZDQOBUGE",
    toastSuccess: "Copied to clipboard",
    useToastConfirm: true,
  },
};
const summarySlotContent = "Summary Slot content to be tested";

let wrapper: VueWrapper<InstanceType<typeof ComponentUnderTest>>;
const wrapperFactory = (propsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

  return mountSuspended(ComponentUnderTest, {
    slots: {
      summaryContent: () => summarySlotContent,
    },
    props: mockPropsData,
  });
};

describe("CopyTextToClipboard", () => {
  // const accountStore = useAccountStore();
  // const rootStore = useRootStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Summary Slot text is displayed", async () => {
    wrapper = await wrapperFactory();
    const elementUnderTest = wrapper.find("[data-test-id='copyTextToClipboard-summary']");
    expect(elementUnderTest.text()).toBe(summarySlotContent);
    // expect(elementUnderTest.findComponent({ ref: "summaryContent" }).text()).toBe(summarySlotContent);
  });
});
