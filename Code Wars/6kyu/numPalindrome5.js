// https://www.codewars.com/kata/58e26b5d92d04c7a4f00020a

// Complete the function to test if the given number (num) can be rearranged to form a numerical palindrome or not. Return a boolean (true if it can be rearranged to a palindrome, and false if it cannot). Return "Not valid" if the input is not an integer or is less than 0.

function palindrome(num) { 
    if (num < 0 || !Number.isInteger(num)) return "Not valid"
    if (num < 11) return false

    const hash = {}

    for (const n of String(num)){
        hash[n] ? hash[n]++ : hash[n] = 1
    }

    let odd = 0

    Object.values(hash).forEach(n => {
        if (n % 2 !== 0) odd++
    })

    return odd <= 1
}

console.log(palindrome(1212),true);
console.log(palindrome(89698),true);
console.log(palindrome(7653356),true);
console.log(palindrome(100134),false);
console.log(palindrome(13598),false);
console.log(palindrome("ACCDDCCA"),"Not valid");
console.log(palindrome("1212"),"Not valid");
console.log(palindrome(-4505),"Not valid");

// 12
// 21

// 123
// 132
// 213
// 231
// 312
// 321

// 1234
// 1324
// 1342
// 1423
// 1432