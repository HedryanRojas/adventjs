/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const rows = [];
  let ans = 0;
  for (let i = 1; i <= height; i++) {
    rows.push(i + ans);
    ans = i;
  }

  const higher = rows[rows.length - 1];

  const bg = rows.map((r) => {
    const half = (higher - r) / 2;
    const separator = "_".repeat(half);
    const decoration = `${ornament}`.repeat(r);
    return `${separator}${decoration}${separator}`;
  });

  const half = (higher - 1) / 2;
  const separator = "_".repeat(half);
  const base = `${separator}#${separator}`;
  return [...bg, base, base].join("\n");
}

module.exports = { createXmasTree };
