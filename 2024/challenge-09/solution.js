/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */

function moveTrain(board, mov) {
  const clonedBoard = board.map((row) => row.split(""));
  let enginePositions = { row: -1, col: -1 };

  for (let r = 0; r < clonedBoard.length; r++) {
    const c = clonedBoard[r].indexOf("@");
    if (c !== -1) {
      enginePositions = { row: r, col: c };
    }
  }

  const directionsOffsets = {
    L: { row: 0, col: -1 },
    R: { row: 0, col: 1 },
    U: { row: -1, col: 0 },
    D: { row: 1, col: 0 },
  };

  const direction = directionsOffsets[mov];

  if (!direction) {
    return "crash";
  }

  const newRow = enginePositions.row + direction.row;
  const newCol = enginePositions.col + direction.col;

  const isValidRow = newRow >= 0 && newRow < board.length;
  const isValidColumn = newCol >= 0 && newCol < board[0].length;
  const isWithinBounds = isValidRow && isValidColumn;

  if (!isWithinBounds) {
    return "crash";
  }

  const cell = clonedBoard[newRow][newCol];
  const evaluateTargetCell = {
    o: "crash",
    "*": "eat",
    "·": "none",
  };

  return evaluateTargetCell[cell];
}

module.exports = { moveTrain };
