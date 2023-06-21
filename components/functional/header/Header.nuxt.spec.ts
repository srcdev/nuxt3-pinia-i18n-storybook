import { describe, it, expect } from "vitest";

describe("my test", () => {
  // ... test with Nuxt environment!
  it("works", () => {
    // expect(useAppConfig()).toMatchInlineSnapshot("{}");
    expect(useAppConfig()).toBeTruthy();
  });
});
