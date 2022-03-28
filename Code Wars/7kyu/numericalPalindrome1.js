// https://www.codewars.com/kata/58ba6fece3614ba7c200017f
// First in the series...

function palindrome(num) { 
    if (typeof num !== 'number' || num < 1) return "Not valid"
    return num.toString().split('').reverse().join('') === num.toString()
} 

console.log(palindrome(1221),true);
console.log(palindrome(123322),false);
console.log(palindrome("ACCDDCCA"),"Not valid");
console.log(palindrome("1221"),"Not valid");
console.log(palindrome(-450),"Not valid");