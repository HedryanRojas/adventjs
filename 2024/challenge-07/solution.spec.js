const { fixPackages } = require("./solution");

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
  expect(fixPackages("a(cb)de"), "abcde");
  expect(fixPackages("a(bc(def)g)h"), "agdefcbh");
  expect(fixPackages("abc(def(gh)i)jk"), "abcighfedjk");
  expect(fixPackages("a(b(c))e"), "acbe");
});
