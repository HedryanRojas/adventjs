/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes
 */
function organizeShoes(shoes) {
  const matches = {};

  shoes.forEach((s) => {
    const { type, size } = s;
    if (!matches[size]) {
      matches[size] = { I: 0, R: 0 };
    }
    if (type === "I") {
      matches[size].I += 1;
    } else if (type === "R") {
      matches[size].R += 1;
    }
  });

  const pairs = [];
  for (const size in matches) {
    const pairNumber = Math.min(matches[size].I, matches[size].R);
    for (let i = 0; i < pairNumber; i++) {
      pairs.push(parseInt(size));
    }
  }

  return pairs;
}
module.exports = { organizeShoes };
