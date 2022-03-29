// https://www.codewars.com/kata/58df62fe95923f7a7f0000cc/train/javascript

// For a given number num, write a function which returns the number of numerical palindromes within each number. For this kata, single digit numbers will NOT be considered numerical palindromes.

function palindrome(num) {
    if (!Number.isInteger(num) || num < 0) return "Not valid"

    let strNum = String(num)
    const result = []
    for (let i = 0; i <= strNum.length; i++){
        for (let j = i+2; j <= strNum.length; j++){
            if (strNum.slice(i, j) === strNum.slice(i, j).split('').reverse().join('')){
                result.push(strNum.slice(i, j))
            }
        }
    }
    return result.length
}

console.log(palindrome(2),0);
console.log(palindrome(141221001),5);
console.log(palindrome(1551),2);
console.log(palindrome(13598),0);
console.log(palindrome("ACCDDCCA"),"Not valid");
console.log(palindrome("1551"),"Not valid");
console.log(palindrome(-4505),"Not valid");