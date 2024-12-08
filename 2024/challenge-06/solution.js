/** @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
  for (let i = 0; i < box.length; i++) {
    if (i === 0 || i === box.length - 1) {
      continue;
    }
    const row = box[i];
    if (row.includes("*")) {
      if (row[0] !== "*" && row[row.length - 1] !== "*") {
        return true;
      }
    }
  }
  return false;
}
module.exports = { inBox };
