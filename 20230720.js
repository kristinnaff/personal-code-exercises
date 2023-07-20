// https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript
// Need to see how to do this as String.prototype.toJadenCase = function ()

function toJadenCase(string) {
  if (string.length == 0 || typeof string !== "string") {
    return "Argument must be a string with length >=1";
  }
  let wordsArray = string.split(" ");
  let returnString = "";
  wordsArray.map((word) => {
    let newWord = word[0].toUpperCase() + word.slice(1, word.length);
    returnString += `${newWord} `;
  });
  returnString = returnString.trim();
  return returnString;
}
