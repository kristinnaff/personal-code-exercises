let regularArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let evenArray = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let tinyArray = [
  [0, 1],
  [2, 3],
];

let regularArrayExpectedResult = [1, 2, 3, 6, 9, 8, 7, 4, 5];
let evenArrayExpectedResult = [
  1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
];
let tinyArrayExpectedResult = [0, 1, 3, 2];

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
  // console.log(`n: ${n}`);
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

  for (let i = 0; i < n + 3; i++) {
    for (let i = 1; i <= 2; i++) {
      for (let i = 1; i <= n - 1; i++) {
        // console.log(directions[turns % 4]);
        [row, col] = moveOneStep(row, col, directions[turns % 4]);
        resultArray.push(array[row][col]);
      }
      turns++;
    }
    n--;
  }

  return resultArray;
}

console.log(snailify(regularArray));
console.log(regularArrayExpectedResult);

console.log(snailify(evenArray));
console.log(evenArrayExpectedResult);

console.log(snailify(tinyArray));
console.log(tinyArrayExpectedResult);
