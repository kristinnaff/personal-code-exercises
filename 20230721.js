// morse code decoder

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
  let wordsInMorseArray = morseCode.split("  "); // TWO spaces first
  // deal with each word
  let translatedWords = wordsInMorseArray.map((morseWord) => {
    let lettersInMorseArray = morseWord.split(" "); // array of individual letters
    let plainLettersArray = lettersInMorseArray.map(
      (morseLetter) => MORSE_CODE[morseLetter]
    );
    let plainLettersString = plainLettersArray.join("");
    return plainLettersString;
  });
  return translatedWords.join(" ").trim();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
