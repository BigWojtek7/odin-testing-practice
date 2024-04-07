import { capitalize, reverseString } from "./functions";
import Calculator from "./calculator-class";
import caesarCipher from "./caesarCipher";
import analyzeArray from "./analyze-function";

test("capitalize first character", () => {
  expect(capitalize("hello")).toEqual("Hello");
});

test("Reverse string", () => {
  expect(reverseString("hello")).toEqual("olleh");
});

describe("calculator", () => {
  test("add two numbers", () => {
    expect(Calculator.add(5, 11)).toBe(16);
  });
  test("subtract number from another", () => {
    expect(Calculator.subtract(8, 3)).toBe(5);
  });
  test("divide one number by another", () => {
    expect(Calculator.divide(15, 3)).toBe(5);
  });
  test("multiple numbers", () => {
    expect(Calculator.multiply(3, 9)).toBe(27);
  });
});

describe("shift characters", () => {
  test("base test", () => {
    expect(caesarCipher("john")).toEqual("mrkq");
  });
  test("keep the same case", () => {
    expect(caesarCipher("John")).toEqual("Mrkq");
  });
  test("test punctuation", () => {
    expect(caesarCipher("john.")).toEqual("mrkq.");
  });
  test("wrap test", () => {
    expect(caesarCipher("yeti")).toEqual("bhwl");
  });
});

describe("analyze array", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);

  test("average value", () => {
    expect(object.average).toBe(4);
  });
  test("min value", () => {
    expect(object.min).toBe(1);
  });
  test("max value", () => {
    expect(object.max).toBe(8);
  });
  test("array length", () => {
    expect(object.length).toBe(6);
  });
});
