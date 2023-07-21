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

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
