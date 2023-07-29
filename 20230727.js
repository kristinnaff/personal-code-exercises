// SNAIL
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

// TESTS
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

// HELPERS

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

// PROCEDURAL

function snailify(array) {
  let n = array[0].length;
  console.log(`n is ${n}`);
  let resultArray = [];

  array[0].map((item) => resultArray.push(item));
  console.log(`resultarray: ${resultArray}`);
  // resultArray = [1,2,3]

  let [row, col] = [0, n - 1];
  console.log(`rowindex: ${row}, colindex: ${col}`);

  let turns = 1;
  let directions = ["right", "down", "left", "up"];
  //   console.log(`direction: ${directions[turns % 4]}`);
  // console.log(directions[turns%4]); -- "down"

  for (let i = 1; i < 3; i++) {
    console.log(moveOneStep(row, col, directions[turns % 4]));
    console.log(
      `Moving ${directions[turns % 4]} from rowindex: ${row}, colindex: ${col}`
    );
    [row, col] = moveOneStep(row, col, directions[turns % 4]);
    console.log(`row is ${row}, col is ${col}`);
    console.log(`digit is ${array[row][col]}`);
    console.log(`${i}th pass completed OK.`);
    // resultArray.push(array[row][col]);
  }
}

snailify(regularArray);
