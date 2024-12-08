const { createFrame } = require("./solution");

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

test("should frame all names", () => {
  const input = ["midu", "madeval", "educalvolpz"];
  const expected = `***************
* midu        *
* madeval     *
* educalvolpz *
***************`;
  const result = createFrame(input);
  expect(result, expected);
});

test("should frame 1 name", () => {
  const input = ["midu"];
  const expected = `********
* midu *
********`;
  const result = createFrame(input);
  expect(result, expected);
});

test("should not frame if no name", () => {
  const input = [];
  const expected = "";
  const result = createFrame(input);
  expect(result, expected);
});
