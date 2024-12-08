const { inBox } = require("./solution");

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

test("should return true if * is inside the box", () => {
  expect(inBox(["###", "#*#", "###"]), true);

  expect(inBox(["####", "#* #", "#  #", "####"]), true);
});

test("should return false if * is outside the box", () => {
  expect(inBox(["#####", "#   #", "#  #*", "#####"]), false);

  expect(inBox(["#####", "#   #", "#   #", "#   #", "#####"]), false);
});
