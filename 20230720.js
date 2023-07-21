// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// Need to see how to do this as String.prototype.toJadenCase = function ()

String.prototype.toJadenCase = function () {
  console.log("this is", this);
  //   if (this.length === 0 || typeof this !== "string") {
  //     console.log(typeof this);
  //     return "Argument must be a string with length >=1";
  //   }
  // I cannot get the typecheck to work.
  let wordsArray = this.split(" ");
  console.log(wordsArray);
  let returnString = "";
  wordsArray.map((word) => {
    let newWord = word[0].toUpperCase() + word.slice(1, word.length);
    returnString += `${newWord} `;
  });
  returnString = returnString.trim();
  return returnString;
};

console.log("most trees are blue".toJadenCase());
