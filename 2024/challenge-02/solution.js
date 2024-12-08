function createFrame(names) {
  if (names.length === 0) return "";
  const sorted = [...names].sort((a, b) => a.length - b.length);
  const largerItem = sorted[sorted.length - 1].length;

  const border = "*".repeat(largerItem + 4);
  const rows = names.map(
    (n) => `* ${n}${" ".repeat(largerItem - (n.length - 1))}*`
  );

  const frame = [border, ...rows, border].join("\n");
  return frame;
}

module.exports = { createFrame };
