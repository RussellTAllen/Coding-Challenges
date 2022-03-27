// https://www.codewars.com/kata/58ba6fece3614ba7c200017f
// First in the series...

function palindrome(num) { 
    if (typeof num !== 'number' || num < 1) return "Not valid"



    const numArr = num.toString().split('').map(n => Number(n))

    // // console.log(numArr)
    // console.log('numArr', numArr.join(''))
    // console.log('numArrReverse', numArr.reverse().join(''))
    // console.log(numArr.join('') == numArr.reverse().join(''))
    return numArr.join('') == numArr.reverse().join('')
} 

console.log(palindrome(1221),true);
console.log(palindrome(123322),false);
console.log(palindrome("ACCDDCCA"),"Not valid");
console.log(palindrome("1221"),"Not valid");
console.log(palindrome(-450),"Not valid");