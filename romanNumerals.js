const toRoman = (num) => {
    const romanNumeralMap = [
      {value: 1000, symbol: 'M'},
      {value: 900, symbol: 'CM'},
      {value: 500, symbol: 'D'},
      {value: 400, symbol: 'CD'},
      {value: 100, symbol: 'C'},
      {value: 90, symbol: 'XC'},
      {value: 50, symbol: 'L'},
      {value: 40, symbol: 'XL'},
      {value: 10, symbol: 'X'},
      {value: 9, symbol: 'IX'},
      {value: 5, symbol: 'V'},
      {value: 4, symbol: 'IV'},
      {value: 1, symbol: 'I'}
    ];
  
    let romanNumeral = '';
  
    for (let i = 0; i < romanNumeralMap.length; i++) {
      while (num >= romanNumeralMap[i].value) {
        romanNumeral += romanNumeralMap[i].symbol;
        num -= romanNumeralMap[i].value;
      }
    }
return  romanNumeral
}

console.log(toRoman(5))
console.log(toRoman(267))
console.log(toRoman(99))

/*const isRoman = (num) => {
    const romanNumber = {
        1000: 'M',
        500: 'D',
        100: 'C',
        50: 'L',
        10: 'X',
        5: 'V',
        1: 'I'
    }
    let roman = ''
    for (const number in romanNumber) {
        while (num >= number) {
            roman += romanNumber[number]
            num -= number
        }
    }
    return roman
    while (num > 0) {
        const largestNum = Object.keys(romanNumber).find(key => num >= romanNumber[key])
        roman += romanNumber[largestNum]
        num -= largestNum
    }
    return roman
}
*/