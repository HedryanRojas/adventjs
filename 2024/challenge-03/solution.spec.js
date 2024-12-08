const { organizeInventory } = require("./solution");

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

test("should return gift organized by category", () => {
  const input = [
    { name: "doll", quantity: 5, category: "toys" },
    { name: "car", quantity: 3, category: "toys" },
    { name: "ball", quantity: 2, category: "sports" },
    { name: "car", quantity: 2, category: "toys" },
    { name: "racket", quantity: 4, category: "sports" },
  ];

  const expected = {
    toys: {
      doll: 5,
      car: 5,
    },
    sports: {
      ball: 2,
      racket: 4,
    },
  };
  const result = organizeInventory(input);
  expect(result, expected);
});

test("should return gift organized by category #2", () => {
  const input = [
    { name: "book", quantity: 10, category: "education" },
    { name: "book", quantity: 5, category: "education" },
    { name: "paint", quantity: 3, category: "art" },
  ];
  const expected = {
    education: {
      book: 15,
    },
    art: {
      paint: 3,
    },
  };
  const result = organizeInventory(input);
  expect(result, expected);
});
