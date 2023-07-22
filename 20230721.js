// morse code decoder

let morsestring =
  "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011";

// let morsestring = "1111110001111110000000111111000111111";

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

// decodeMorse = function (morseCode) {
//   let morseWordsArray = morseCode.split("  "); // TWO spaces first
//   // deal with each word
//   let translatedWords = morseWordsArray.map((morseWord) => {
//     let morseLettersArray = morseWord.split(" "); // array of individual letters
//     let englishLettersArray = morseLettersArray.map(
//       (morseLetter) => MORSE_CODE[morseLetter]
//     );
//     let englishLettersString = englishLettersArray.join("");
//     return englishLettersString;
//   });
//   return translatedWords.join(" ").trim();
// };

// in case it turns out someone made a typo in the specification . . .
const wordBreakUnits = 7;
const charBreakUnits = 3;
const dashUnits = 3;
const spacer = 1;

// helper functions
function zeroTrim(item) {
  let noLeadingZeroes = item.replace(/^0+/, "");
  let noEndingZeroes = noLeadingZeroes.replace(/0+$/, "");
  return noEndingZeroes;
}

const getTimeUnits = (morsestring) => {
  const matchArray = [...morsestring.matchAll(/0+/g)];
  let zeroStrings = matchArray.map((item) => item[0]);
  zeroStrings.sort();
  return zeroStrings[0].length;
};

const translate = (word) => {
  let characters = word.split(" ".repeat(charBreakUnits));
  let translated = characters.map(
    (character) => MORSE_CODE[character.replaceAll(" ", "")]
  );
  return translated.join("");
};

// main functions
function decodeBits(bits) {
  bits = zeroTrim(bits);
  let timeUnitLength = getTimeUnits(bits);

  // make it more readable by replacing 0's with spaces
  let onesAndSpaces = bits.replaceAll("0".repeat(timeUnitLength), " ");

  // transform the 1's into dashes and dots.
  let dashesOnly = onesAndSpaces.replaceAll(
    "1".repeat(timeUnitLength * charBreakUnits),
    "-"
  );
  let dotsAndDashes = dashesOnly.replaceAll("1".repeat(timeUnitLength), ".");
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
