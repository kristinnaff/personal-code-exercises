// let regularArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

let regularArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function moveOneStep(startingRow, startingCol, direction) {
  let row = startingRow;
  let col = startingCol;

  switch (direction) {
    case "down":
      row = startingRow += 1;
      break;
    case "up":
      row = startingRow -= 1;
      break;
    case "right":
      col = startingCol += 1;
      break;
    case "left":
      col = startingCol -= 1;
      break;
  }
  // console.log(`row: ${row}, col: ${col}`)
  return [row, col];
}

function snailify(array) {
  // setup first
  let n = array.length;
  let resultArray = [];
  let lastcol = array[0].length - 1; // zero-indexing always throws me off.
  let lastrow = array.length - 1; // zero-indexing always throws me off.

  // we can take the entire first row
  array[0].map((item) => resultArray.push(item));

  // set starting position
  let [row, col] = [0, lastcol];

  // start the spiral.
  let turns = 1;
  let directions = ["right", "down", "left", "up"];

  for (let i = 0; i < n - 1; i++) {
    [row, col] = moveOneStep(row, col, directions[turns % 4]);
    resultArray.push(array[row][col]);
  }
  turns++;
  for (let i = 0; i < n - 1; i++) {
    [row, col] = moveOneStep(row, col, directions[turns % 4]);
    resultArray.push(array[row][col]);
  }
  turns++;
  for (let i = 0; i < n - 2; i++) {
    [row, col] = moveOneStep(row, col, directions[turns % 4]);
    resultArray.push(array[row][col]);
  }
  turns++;
  for (let i = 0; i < n - 2; i++) {
    [row, col] = moveOneStep(row, col, directions[turns % 4]);
    resultArray.push(array[row][col]);
  }
  turns++;
  for (let i = 0; i < n - 3; i++) {
    [row, col] = moveOneStep(row, col, directions[turns % 4]);
    resultArray.push(array[row][col]);
  }
  turns++;
  for (let i = 0; i < n - 3; i++) {
    [row, col] = moveOneStep(row, col, directions[turns % 4]);
    resultArray.push(array[row][col]);
  }
  turns++;
  return resultArray;
}

console.log(snailify(regularArray));
