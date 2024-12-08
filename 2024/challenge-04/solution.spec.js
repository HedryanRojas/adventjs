const { createXmasTree } = require("./solution");

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

test("should create tree correctly", () => {
  const expected = `____*____
___***___
__*****__
_*******_
*********
____#____
____#____`;
  const result = createXmasTree(5, "*");
  expect(result, expected);
});

test("should create tree correctly", () => {
  const expected = `__+__
_+++_
+++++
__#__
__#__`;
  const result = createXmasTree(3, "+");
  expect(result, expected);
});
