const { organizeShoes } = require("./solution");

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

test("should return correct array if there are diff pairs", () => {
  const input = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 42 },
  ];
  const expected = [38, 42];
  const result = organizeShoes(input);
  expect(result, expected);
});

test("should return correct array if there are same pairs", () => {
  const input = [
    { type: "I", size: 38 },
    { type: "R", size: 38 },
    { type: "I", size: 38 },
    { type: "I", size: 38 },
    { type: "R", size: 38 },
  ];
  const expected = [38, 38];
  const result = organizeShoes(input);
  expect(result, expected);
});

test("should return correct array if there are not pairs", () => {
  const input = [
    { type: "I", size: 38 },
    { type: "R", size: 36 },
    { type: "R", size: 42 },
    { type: "I", size: 41 },
    { type: "I", size: 43 },
  ];
  const expected = [];
  const result = organizeShoes(input);
  expect(result, expected);
});
