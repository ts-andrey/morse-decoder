const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
  space: ' ',
};

function decode(code) {
  const unprocessedLetters = [];
  const processedLetters = [];
  const result = [];

  for (let i = 0, start = 0, end = 10; i < code.length / 10; i++, start += 10, end += 10)
    unprocessedLetters.push(code.substring(start, end));

  unprocessedLetters.map(letter => {
    if (letter === '**********') processedLetters.push('space');
    else {
      let cash = '';
      for (let i = 0, start = 0, end = 2; i < 5; i++, start += 2, end += 2) {
        const temp = letter.substring(start, end);
        if (temp !== '00') {
          if (temp === '10') cash += '.';
          else if (temp === '11') cash += '-';
        }
      }
      processedLetters.push(cash);
    }
  });
  processedLetters.map(letter => result.push(MORSE_TABLE[letter]));
  return result.join('');
}

module.exports = {
  decode,
};
