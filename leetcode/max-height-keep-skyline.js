var maxIncreaseKeepingSkyline = function (grid) {
  // find the min between max in row and max in col, then replace currentNum with min
  // initialize a counter (denotes how much we increased)
  let counter = 0;

  function findMaxPossible(r, c) {
    const rowMax = Math.max(...grid[r]);
    let colMax = 0;
    for (let i = 0; i < grid.length; i++) {
      let currentVal = grid[i][c];
      if (colMax < currentVal) {
        colMax = currentVal;
      }
    }
    return Math.min(rowMax, colMax);
  }
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      let bestHeight = findMaxPossible(row, col);

      counter += bestHeight - grid[row][col];
    }
  }

  return counter;
};