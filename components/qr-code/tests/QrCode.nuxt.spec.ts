import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, it, expect } from "vitest";
import ComponentUnderTest from "../QrCode.vue";
// import { useAccountStore } from "@/stores/store.account";
// import { useRootStore } from "@/stores/store.root";

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const initialPropsData = {
  qrCodeSize: 150,
  showCopyToClipboard: true,
  config: {
    qrCodeStr: "GU4DMMZRGI2TSLJVMFTDSLJUGUYTILLBGQZTELLDMYYGCOBQMIZDQOBUGE",
    manualCodeStr: "GU4DMMZRGI2TSLJVMFTDSLJUGUYTILLBGQZTELLDMYYGCOBQMIZDQOBUGE",
    copyLabel: "Secret Key",
    copyBtnText: "Copy",
    toastSuccess: "Copied to clipboard",
    summaryContent: "Summary content text"
  },
  qrColours: {
    dark: "#000",
    light: "#fff"
  },
  applyClasses: "customClassName"
};

let wrapper: VueWrapper<InstanceType<typeof ComponentUnderTest>>;
const wrapperFactory = (propsData = {}) => {
  const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

  return mountSuspended(ComponentUnderTest, {
    props: mockPropsData
  });
};

describe("QRCode", () => {
  // const accountStore = useAccountStore();
  // const rootStore = useRootStore();

  it("Mounts", async () => {
    expect(useAppConfig()).toBeTruthy();
  });

  it("Image is displayed", async () => {
    wrapper = await wrapperFactory();
    const qrImage = wrapper.find("[data-test-id='qrCodeImage']");
    expect(qrImage.html()).toMatchInlineSnapshot('"<img data-v-5050d1d1="" src="" alt="QR code image" class="qr-code-image customClassName" height="150" width="150" data-test-id="qrCodeImage">"');
  });

  it("Image size prop controls size", async () => {
    const props = {
      qrCodeSize: 300
    };
    wrapper = await wrapperFactory(props);
    const qrImage = wrapper.find("[data-test-id='qrCodeImage']");
    expect(qrImage.attributes("height")).toEqual("300");
    expect(qrImage.attributes("width")).toEqual("300");
    expect(qrImage.classes()).toContain("qr-code-image");
  });

  it("should contain custom class from prop", async () => {
    wrapper = await wrapperFactory();
    await wrapper.vm.$nextTick();
    const elementUnderTest = wrapper.find("[data-test-id='qrCodeImage']");
    expect(elementUnderTest.classes()).toContain("customClassName");
  });

  it("Copy code to clipoard is displayed", async () => {
    wrapper = await wrapperFactory();
    const elementUnderTest = wrapper.find("[data-test-id='qrCodeClipboard']");
    expect(elementUnderTest.exists()).toBe(true);
  });

  it("Copy code to clipoard is hidden", async () => {
    const props = {
      showCopyToClipboard: false
    };
    wrapper = await wrapperFactory(props);
    await wrapper.vm.$nextTick();
    const elementUnderTest = wrapper.find("[data-test-id='qrCodeClipboard']");
    expect(elementUnderTest.exists()).toBe(false);
  });
});
