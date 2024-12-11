/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
  let result = "";
  for (let i = 0; i < indices.length; i++) {
    const index = indices[i];
    let line = " ".repeat(indices.length - 1 - i);
    for (let j = 0; j < length; j++) {
      const position = index <= 0 ? length - Math.abs(index) : index;
      line += j == position ? "r" : "~";
    }
    result += line + ` /${i + 1}`;
    if (i != indices.length - 1) {
      result += "\n";
    }
  }
  return result;
}

module.exports = { drawRace };
