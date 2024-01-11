import { flushPromises, mount, VueWrapper } from "@vue/test-utils";
import { expect, describe, test, vi, afterEach } from "vitest";

import Component from "../../CopyTextToClipboard.vue";

describe.skip("Common Components --> Copy To Clipboard Text", () => {
  const initialPropsData = {};

  let wrapper: VueWrapper<InstanceType<typeof Component>>;
  function wrapperFactory(propsData = {}) {
    const mockPropsData = Object.keys(propsData).length > 0 ? propsData : initialPropsData;

    return mount(Component, {
      mounted: vi.fn(),
      props: mockPropsData
    });
  }

  afterEach(async () => {
    await flushPromises();
  });

  test("Component mounts", () => {
    wrapper = wrapperFactory();
    expect(wrapper.vm).toBeTruthy();
  });
});
