/** @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */
function fixPackages(packages) {
  const stack = [];
  let current = [];

  for (let char of packages) {
    if (char === "(") {
      stack.push(current);
      current = [];
    } else if (char === ")") {
      current.reverse();
      let prev = stack.pop();
      prev = prev.concat(current);
      current = prev;
    } else {
      current.push(char);
    }
  }
  return current.join("");
}

module.exports = { fixPackages };
