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
  styleClassPassthrough: "customClassName"
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
    expect(qrImage.html()).toMatchInlineSnapshot(
      '"<img data-v-5050d1d1="" alt="QR code image" class="qr-code-image customClassName" height="150" width="150" data-test-id="qrCodeImage" src="data:image/png;base64,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">"'
    );
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
