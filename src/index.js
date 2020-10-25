module.exports = function toReadable (number) {
  let solutin = {
	0: 'zero', 
	1: 'one', 
	2: 'two', 
	3: 'three', 
	4: 'four', 
	5: 'five', 
	6: 'six', 
	7: 'seven', 
	8: 'eight', 
	9: 'nine',
	10:'ten',
	11:'eleven',
	12:'twelve',
	13:'thirteen',
	14:'fourteen',
	15:'fifteen',
	16:'sixteen',
	17:'seventeen',
	18:'eighteen',
	19:'nineteen',
	20:'twenty',
	30:'thirty',
	40:'forty',
	50:'fifty',
	60:'sixty',
	70:'seventy',
	80:'eighty',
	90:'ninety',
	100:'hundred',
  }

  let hundreds = Math.floor(number / 100);
  let tens = number % 100;
  let textNumber = '';

  let a = (item) => {
	if (textNumber.length == 0) {
		textNumber += item;
	} else {
		textNumber = textNumber + ' ' + item;
	}
}
	if (number === 0) {
		a(solutin[number]);
	} else if (hundreds > 0) {
		a(solutin[hundreds]);
		a(solutin[100]);
}
	if (tens > 0 && tens < 21) {
		a(solutin[tens]);
	} else if (tens > 20) {
		a(solutin[Math.floor(tens / 10) * 10]);
	if (tens % 10 > 0) {
	  a(solutin[tens % 10]);
	}
}
return textNumber;
}