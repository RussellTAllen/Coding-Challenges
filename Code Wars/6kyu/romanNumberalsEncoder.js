// Roman Numerals Encoder - 6 kyu

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Example:

// solution(1000); // should return 'M'
// Help:

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000
// Remember that there can't be more than 3 identical symbols in a row.

// More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals

function solution(number){
    let result = ''
    while (number >= 1000){
        result += 'M'
        number -= 1000
    }while (number >= 500){
        result += 'D'
        number -= 500
    }while (number >= 100){
        result += 'C'
        number -= 100
    }while (number >= 50){
        result += 'L'
        number -= 50
    }while (number >= 10){
        result += 'X'
        number -= 10
    }while (number >= 5){  
        result += 'V'
        number -= 5
    }while (number >= 1){
        result += 'I'
        number -= 1
    }if (result.includes('DCCCC')){
        result = result.replace('DCCCC', 'CM')
    }if (result.includes('CCCC')){
        result = result.replace('CCCC', 'CD')
    }if (result.includes('LXXXX')){
        result = result.replace('LXXXX', 'XC')
    }if (result.includes('XXXX')){
        result = result.replace('XXXX', 'XL')
    }if (result.includes('VIIII')){
        result = result.replace('VIIII', 'IX')
    }if (result.includes('IIII')){
        result = result.replace('IIII', 'IV')
    }
    return result
}


console.log(solution(1)),
// => 'I', '1 should, "I"
console.log(solution(2)),
// => 'II', '2 should, "II"
console.log(solution(3)),
// => 'III', '3 should, "III"
console.log(solution(4))
// =>, 'IV', '4 should, "IV"
console.log(solution(5)),
// => 'V', '5 should, "V"
console.log(solution(9)),
// => 'IX', '9 should, "IX"
console.log(solution(10)),
// => 'X', '10 should, "X"
console.log(solution(11))
// =>, 'XI'
console.log(solution(19)),
// => 'XIX'
console.log(solution(22)),
// => 'XXII'
console.log(solution(15)),
// => 'XV'
console.log(solution(1000))
// =>, 'M', '1000 should, "M"
console.log(solution(1001))
// =>, 'MI', '1001 should, "MI"
console.log(solution(1990))
// =>, 'MCMXC', '1990 should, "MCMXC"
console.log(solution(2007))
// =>, 'MMVII', '2007 should, "MMVII"
console.log(solution(2008))
// =>, 'MMVIII', '2008 should, "MMVIII"
