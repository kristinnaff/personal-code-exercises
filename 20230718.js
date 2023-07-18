function getSum(a, b) {
  //Good luck!
  let smallerNum;
  let biggerNum;
  if (a < b) {
    smallerNum = a;
    biggerNum = b;
  } else {
    smallerNum = b;
    biggerNum = a;
  }
  let sum = smallerNum;
  while (smallerNum < biggerNum) {
    sum += smallerNum + 1;
    smallerNum++;
  }
  return sum;
}

console.log(getSum(5, 5));
console.log(getSum(-1, 3)); // expect 5: 3--1+1
console.log(getSum(3, -1));
