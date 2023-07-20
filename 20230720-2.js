function descendingOrder(n) {
  //...
  if (n < 0) {
    console.log("N must be equal to or greater than zero.");
    return false;
  } else if (!Number.isInteger(n)) {
    console.log("N must be an integer.");
    return false;
  }
  let stringified = n.toString();
  let digitsarray = stringified.split("");
  let sorted = digitsarray.sort();
  let reversed = sorted.reverse();
  let stringAgain = reversed.join("");
  let numAgain = parseInt(stringAgain);
  return numAgain;
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
