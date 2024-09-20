import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./main";

test("test capitalize normal case", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("test capitalize edge case", () => {
  expect(capitalize("")).toBe("");
});

test("test reverseString normal case", () => {
  expect(reverseString("hisk")).toBe("ksih");
});

test("test reverseString edge case", () => {
  expect(reverseString("")).toBe("");
});

test("test add", () => {
  expect(calculator().add(1, 2)).toBe(3);
});

test("test substract", () => {
  expect(calculator().substract(1, 2)).toBe(-1);
});

test("test mutiply", () => {
  expect(calculator().mutiply(2, 3)).toBe(6);
});

test("test divide", () => {
  expect(calculator().divide(2, 3)).toBeCloseTo(0.6666667);
});

test("caesarCipher case1", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test("caesarCipher case2", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

test("caesarCipher case3", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

test("analyzeArray case1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
