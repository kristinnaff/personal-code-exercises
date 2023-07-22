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

decodeMorse = function (morseCode) {
  let morseWordsArray = morseCode.split("  "); // TWO spaces first
  // deal with each word
  let translatedWords = morseWordsArray.map((morseWord) => {
    let morseLettersArray = morseWord.split(" "); // array of individual letters
    let englishLettersArray = morseLettersArray.map(
      (morseLetter) => MORSE_CODE[morseLetter]
    );
    let englishLettersString = englishLettersArray.join("");
    return englishLettersString;
  });
  return translatedWords.join(" ").trim();
};

decodeBits = function (bits) {
  zeroTrim(bits);
  let timeUnitLength = getTimeUnits(bits);
};

// console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));

function zeroTrim(item) {
  let noLeadingZeroes = item.replace(/^0+/, "");
  let noEndingZeroes = noLeadingZeroes.replace(/0+$/, "");
  // console.log(`zeroTrim result: START${noEndingZeroes}END`);
  return noEndingZeroes;
}

// const getTimeUnits = (morsestring) => {
//   let regex = /1+/g;
//   let newStr = morsestring.replaceAll(regex, "|");
//   let myArray = newStr.split("|");
//   console.log(`myArray is ${myArray.join(" ")}`);
//   let sortedArray = myArray.sort();
//   sortedArray = sortedArray.filter((value) => value !== null);
//   sortedArray = sortedArray.map((value) => toString(value));
//   console.log(`sortedArray is ${sortedArray.join(" ")}`);
//   console.log(`length is ${sortedArray[0].length}`);
//   return 2;
// };

const getTimeUnits = (morsestring) => {
  const matchArray = [...morsestring.matchAll(/0+/g)];
  let zeroStrings = matchArray.map((item) => item[0]);
  zeroStrings.sort();
  return zeroStrings[0].length;
};

function splitIntoWords(morsestring, timeUnits) {
  // console.log(`timeUnits is ${timeUnits}`);
  let wordBreak = "0".repeat(timeUnits * 7);
  let morseWordsArray = morsestring.split(wordBreak);
  // console.log(`morseWords is ${morseWords.join(" ")}`);
  return morseWordsArray;
}

function splitIntoChars(morsestring, timeUnits) {
  let charBreak = "0".repeat(timeUnits * 3);
  let morseCharsArray = morsestring.split(charBreak);
  return morseCharsArray;
}

function doItAll(morsestring) {
  morsestring = zeroTrim(morsestring);
  let timeUnits = getTimeUnits(morsestring);
  console.log(timeUnits);
  morseWords = splitIntoWords(morsestring, timeUnits);
  console.log(morseWords);
  console.log(splitIntoChars(morseWords[0], timeUnits));
}

function intoDotsAndDates(charsArray, timeUnits) {}

// doItAll(morsestring);

// console.log(morseWords);
// morseWords.map((element) => {
//   console.log(element.split(charBreak));
// });
