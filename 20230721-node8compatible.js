// morse code decoder
// And the blased thing won't pass validation because codewars uses node8, which doesn't support matchAll!
// Alternative: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
// and the challenge: https://www.codewars.com/kata/54b72c16cd7f5154e9000457/train/javascript

// let morsestring =
//   "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";

// let morsestring = "1111110001111110000000111111000111111";

let morsestring = "111";

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
};

// in case it turns out someone made a typo in the specification . . .
const wordBreakUnits = 7;
const charBreakUnits = 3;
const dashUnits = 3;
const dotUnits = 1;
const spacer = 1;

// helper functions
function zeroTrim(item) {
  let noLeadingZeroes = item.replace(/^0+/, "");
  let noEndingZeroes = noLeadingZeroes.replace(/0+$/, "");
  return noEndingZeroes;
}

const getTimeUnits = (morsestring) => {
  // zeroes first
  const regexp = /0+/g;
  let matchArray = [];
  while ((match = regexp.exec(morsestring)) !== null) {
    matchArray.push(match);
  }
  let zeroStrings = matchArray.map((item) => item[0]);
  zeroStrings.sort();
  let smallestZeroSequence = 1;
  if (zeroStrings.length > 0) {
    smallestZeroSequence = zeroStrings[0].length;
  }

  // then ones
  const onesregexp = /1+/g;
  let onesMatchArray = [];
  while ((match = onesregexp.exec(morsestring)) !== null) {
    onesMatchArray.push(match);
  }
  let onesStrings = onesMatchArray.map((item) => item[0]);
  onesStrings.sort();
  let smallestOnesSequence = onesStrings[0].length;

  return smallestZeroSequence < smallestOnesSequence
    ? smallestZeroSequence
    : smallestOnesSequence;
};

const translate = (word) => {
  let characters = word.split(" ".repeat(charBreakUnits));
  let translated = characters.map(
    (character) => MORSE_CODE[character.replace(/ /g, "")]
  );
  return translated.join("");
};

// main functions
function decodeBits(bits) {
  bits = zeroTrim(bits);
  let timeUnitLength = getTimeUnits(bits);

  // make it more readable by replacing 0's with spaces
  let regex = new RegExp("0".repeat(timeUnitLength), "g");
  let onesAndSpaces = bits.replace(regex, " ");

  // transform the 1's into dashes and dots.
  let dashesRegex = new RegExp(
    "1".repeat(timeUnitLength * charBreakUnits),
    "g"
  );

  let dashesOnly = onesAndSpaces.replace(dashesRegex, "-");

  let dotsregex = new RegExp("1".repeat(timeUnitLength), "g");

  let dotsAndDashes = dashesOnly.replace(dotsregex, ".");
  return dotsAndDashes;
}

function decodeMorse(morseString) {
  // split into individual words
  let wordsArray = morseString.split(" ".repeat(wordBreakUnits));
  let translatedWordsArray = wordsArray.map((word) => translate(word));
  return translatedWordsArray.join(" ");
}

let morseCode = decodeBits(morsestring);
console.log(decodeMorse(morseCode));
