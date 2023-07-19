function accum(arg) {
  let returnString = "";
  // for each letter . . .
  for (let i = 0; i < arg.length; i++) {
    // if it's not the first letter, print a hyphen.
    returnString += i > 0 ? "-" : "";
    // print uppercase at least once.
    returnString += arg[i].toUpperCase();
    // print lowercase i times
    returnString += arg[i].toLowerCase().repeat(i);
  }
  console.log(returnString);
  return returnString;
}

console.log(accum("abcd"));

if (accum("abcd") !== "A-Bb-Ccc-Dddd") {
  console.log(`fail test for abcd`);
}
if (accum("RqaEzty") !== "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy") {
  console.log("fail test 2");
}
if (accum("cwAt") !== "C-Ww-Aaa-Tttt") {
  console.log("fail test 3");
}
