const { drawRace } = require("./solution");

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
  const expected = `  ~~~r~~~~~~~~ /1
 ~~~~~~~r~~~~ /2
~~~~~~~~~~r~ /3`;
  expect(drawRace([3, 7, -2], 12), expected);
});

test("all example should pass #2", () => {
  const expected = `  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3`;
  expect(drawRace([0, 5, -3], 10), expected);
});
