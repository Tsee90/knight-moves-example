function knightMoves(start, end, depth = 0) {
  if (end[0] < 0 || end[0] > 7 || end[1] < 0 || end[1] > 7) return -1;
  if (start[0] < 0 || start[0] > 7 || start[1] < 0 || start[1] > 7) return -1;

  if (start[0] === end[0] && start[1] === end[1]) return depth;

  const rightUp = knightMoves([start[0] + 2, start[1] + 1], end, depth + 1);
  if (rightUp !== -1) return rightUp;

  const rightDown = knightMoves([start[(0 + 2, start[1] - 1)]], end, depth + 1);
  if (rightDown !== -1) return rightDown;

  const leftUp = knightMoves([start[0] - 2, start[1] + 1], end, depth + 1);
  if (leftUp !== -1) return leftUp;

  const leftDown = knightMoves([start[0] - 2, start[1] - 1], end, depth + 1);
  if (leftDown !== -1) return leftDown;

  const upRight = knightMoves([start[0] + 1, start[1] + 2], end, depth + 1);
  if (upRight !== -1) return upRight;

  const upLeft = knightMoves([start[0] - 1, start[1] + 2], end, depth + 1);
  if (upLeft !== -1) return upLeft;

  const downRight = knightMoves([start[0] + 1, start[1] - 2], end, depth + 1);
  if (downRight !== -1) return downRight;

  const downLeft = knightMoves([start[0] - 1, start[1] - 2], end, depth + 1);
  if (downLeft !== -1) return downLeft;
}
const start = [0, 0];
const end = [4, 5];
console.log(knightMoves(start, end));
