function knightMoves(start, end) {
  if (!isValidPosition(end))
    throw new Error(`[${end}] is an invalid end position.`);
  if (!isValidPosition(start))
    throw new Error(`[${start}] is an invalid start position.`);
  if (isEqual(start, end)) return start;

  const possibleMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [-1, 2],
    [1, -2],
    [-1, -2],
  ];

  const queue = [];
  queue.push([start]);
  const visited = new Set();
  visited.add(`${start[0]},${start[1]}`);
  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    for (const move of possibleMoves) {
      const nextPosition = [current[0] + move[0], current[1] + move[1]];

      if (isEqual(nextPosition, end)) {
        return [...path, end];
      }

      const posKey = `${nextPosition[0]},${nextPosition[1]}`;
      if (isValidPosition(nextPosition) && !visited.has(posKey)) {
        visited.add(posKey);
        queue.push([...path, nextPosition]);
      }
    }
  }
}

function isEqual(position, end) {
  if (position[0] === end[0] && position[1] === end[1]) return true;
  return false;
}

function isValidPosition(position) {
  if (!Array.isArray(position) || position.length !== 2) return false;
  if (position[0] < 0 || position[0] > 7 || position[1] < 0 || position[1] > 7)
    return false;
  return true;
}
const start = [0, 0];
const end = [7, 7];

console.log(knightMoves(start, end));
