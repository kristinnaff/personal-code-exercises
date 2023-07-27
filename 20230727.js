// SNAIL
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/javascript

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const traverse = (territory, startCoordStr, endCoordStr) => {
  let startCoords = startCoordStr.split(",");
  let endCoords = endCoordStr.split(",");
  let resultArray = [];

  let diffY = endCoords[0] - startCoords[0];
  let diffX = endCoords[1] - startCoords[1];

  let stepX;
  let stepY;

  if (diffY === 0) {
    stepY = 0;
  } else if (diffY > 0) {
    stepY = 1;
  } else {
    stepY = -1;
  }

  if (diffX === 0) {
    stepX = 0;
  } else if (diffX > 0) {
    stepX = 1;
  } else {
    stepX = -1;
  }

  console.log(`We are moving in a ${stepX} direction horizontally`);
  console.log(`We are moving in a ${stepY} direction vertically`);
};

// traverse(array, "0,0", "0,2");
// traverse(array, "0,2", "2,2");
// traverse(array, "2,2", "2,0");
// traverse(array, "2,0", "1,0");
traverse(array, "1,0", "1,1");
