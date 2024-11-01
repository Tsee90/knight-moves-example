function knightMoves(start, end) {
  if (!isValidPosition(end))
    throw new Error(`[${end}] is an invalid end position.`);
  if (!isValidPosition(start))
    throw new Error(`[${start}] is an invalid start position.`);
  if (isEqual(start, end)) return 0;

  let depth = 0;
  let found = false;
  const queue = [];
  queue.push([start]);
  while (queue.length > 0 && !found) {
    const currentSet = queue.shift();
    let nextSet = [];
    currentSet.forEach((position) => {
      const rightUp = [position[0] + 2, position[1] + 1];
      const rightDown = [position[0] + 2, position[1] - 1];
      const leftUp = [position[0] - 2, position[1] + 1];
      const leftDown = [position[0] - 2, position[1] - 1];
      const upRight = [position[0] + 1, position[1] + 2];
      const upLeft = [position[0] - 1, position[1] + 2];
      const downRight = [position[0] + 1, position[1] - 2];
      const downLeft = [position[0] - 1, position[1] - 2];

      const newMoveSet = [
        rightUp,
        rightDown,
        leftUp,
        leftDown,
        upRight,
        upLeft,
        downRight,
        downLeft,
      ];

      const validMoveSet = newMoveSet.filter((position) =>
        isValidPosition(position)
      );

      if (checkMoveSet(validMoveSet, end)) {
        found = true;
      } else {
        nextSet = nextSet.concat(validMoveSet);
      }
    });
    if (nextSet.length > 0) queue.push(nextSet);

    depth += 1;
  }

  return depth;
}

function checkMoveSet(set, end) {
  let found = false;
  set.forEach((move) => {
    if (isEqual(move, end)) {
      found = true;
    }
  });
  return found;
}

function isEqual(position, end) {
  if (position[0] === end[0] && position[1] === end[1]) return true;
  return false;
}

function isValidPosition(position) {
  if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7)
    return false;
  return true;
}
const start = [0, 0];
const end = [7, 7];

console.log(knightMoves(start, end));
