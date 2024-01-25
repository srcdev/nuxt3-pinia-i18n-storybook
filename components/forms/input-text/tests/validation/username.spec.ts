import { validationConfig } from "../../../config/index";
import { test, expect } from "vitest";

function testPattern(validationPattern: any, value: any) {
  const regex = new RegExp(validationPattern);
  return regex.test(value);
}

const validationPattern = validationConfig["en"]["username"].pattern;

const testVariants = [
  ["MyUserNameMyUserName", true],
  ["MyUserNameMyUserNam", true],
  ["MyUserNameMyUserNa", true],
  ["MyUserNameMyUserN", true],
  ["MyUserNameMyUser", true],
  ["MyUserNameMyUse", true],
  ["MyUserNameMyUs", true],
  ["MyUserNameMyU", true],
  ["MyUserNameMy", true],
  ["MyUserNameM", true],
  ["MyUserName", true],
  ["MyUserNam", true],
  ["MyUserNa", true],
  ["MyUserN", false],
  ["MyUser", false],
  ["MyUse", false],
  ["MyUs", false],
  ["MyU", false],
  ["My", false],
  ["M", false],
  ["", false],
];

test.each(testVariants)("testVariants passes for valid value %j with result %j", (fixture: any, result) => expect(testPattern(validationPattern, fixture)).toBe(result));
