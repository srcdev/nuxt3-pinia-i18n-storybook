import { validationConfig } from "../../../config/index";
import { test, expect } from "vitest";

function testPattern(validationPattern: any, value: any) {
  const regex = new RegExp(validationPattern);
  return regex.test(value);
}

const validationPattern = validationConfig["en-GB"]["username"].pattern;

const testVariants = [
  ["", false],
  ["M", false],
  ["My", false],
  ["MyU", false],
  ["MyUs", false],
  ["MyUse", false],
  ["MyUser", false],
  ["MyUserN", false],
  ["MyUserNa", true],
  ["MyUserNam", true],
  ["MyUserName", true],
  ["MyUserNameM", true],
  ["MyUserNameMy", true],
  ["MyUserNameMyU", true],
  ["MyUserNameMyUs", true],
  ["MyUserNameMyUse", true],
  ["MyUserNameMyUser", true],
  ["MyUserNameMyUserN", true],
  ["MyUserNameMyUserNa", true],
  ["MyUserNameMyUserNam", true],
  ["MyUserNameMyUserName", true],
  ["MyUserNameMyUserNameMasasa", false],
  ["12345678901234567890", true],
  ["GOOD-CHARACTERS-'", true],
  ["GOOD-CHARACTERS-.", true],
  ["GOOD-CHARACTERS--", true],
  ["BAD-CHARACTERS- ", false],
  ['BAD-CHARACTERS- "', false],
  ["BAD-CHARACTERS- &", false],
  ["BAD-CHARACTERS- @", false],
];

test.each(testVariants)("testVariants passes for valid value %j with result %j", (fixture: any, result) => expect(testPattern(validationPattern, fixture)).toBe(result));
