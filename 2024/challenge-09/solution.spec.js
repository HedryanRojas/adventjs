const { moveTrain } = require("./solution");

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

test("all example should pass", () => {
  const board = ["·····", "*····", "@····", "o····", "o····"];
  expect(moveTrain(board, "U"), "eat");
  expect(moveTrain(board, "D"), "crash");
  expect(moveTrain(board, "L"), "crash");
  expect(moveTrain(board, "R"), "none");
});
