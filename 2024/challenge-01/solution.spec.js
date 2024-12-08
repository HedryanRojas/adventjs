const { prepareGifts } = require("./solution");

function test(description, fn) {
  try {
    fn();
    console.log(`✅ ${description}`);
  } catch (error) {
    console.error(`❌ ${description}`);
    console.error(error);
  }
}

function expect(result, expected) {
  if (JSON.stringify(result) !== JSON.stringify(expected)) {
    throw new Error(`Expected ${expected}, but got ${result}`);
  }
}

test("should return array with no repeated gifts & sorted", () => {
  const input = [3, 1, 2, 3, 4, 2, 5];
  const expected = [1, 2, 3, 4, 5];
  const result = prepareGifts(input);
  expect(result, expected);
});

test("should return no repeated gifts sorted", () => {
  const input = [6, 5, 5, 5, 5];
  const expected = [5, 6];
  const result = prepareGifts(input);
  expect(result, expected);
});

test("should return empty array when no gifts", () => {
  const input = [];
  const expected = [];
  const result = prepareGifts(input);
  expect(result, expected);
});
