// https://www.codewars.com/kata/58de819eb76cf778fe00005c

// For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

function palindrome(num) {
    if (!Number.isInteger(num) || num < 0) return "Not valid"
    if (num < 10) return false

    let strNum = String(num)
    for (let i = 0; i <= strNum.length; i++){
        for (let j = i+2; j <= strNum.length; j++){
            if (strNum.slice(i, j) === strNum.slice(i, j).split('').reverse().join('')){
                return true
            }
        }
    }
    return false
}

console.log(palindrome(2),false);
console.log(palindrome(123322367),true);
console.log(palindrome(1551),true);
console.log(palindrome(1215),true);
console.log(palindrome(13598),false);
console.log(palindrome("ACCDDCCA"),"Not valid");
console.log(palindrome("1551"),"Not valid");
console.log(palindrome(-4505),"Not valid");