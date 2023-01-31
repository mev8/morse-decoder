const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  
	const array = [...expr];
	const array10 = [];
	const result = [];

	while(array.length) {
		array10.push(array.splice(0, 10).join(''));
	}

	array10.forEach((v) => {
		if(v == '**********') {
			result.push(' ');
		} else {
			v = v.replaceAll('00', '').replaceAll('10', '.').replaceAll('11', '-');
			result.push(v);
		}
	});

	const resStr = result.map((v) => {
		if(v == ' ') {
			return ' ';
		} else {
			return MORSE_TABLE[v];
		}
	}).join('');

	return resStr;
}

module.exports = {
    decode
}