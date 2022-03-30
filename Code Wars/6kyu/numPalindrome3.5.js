// https://www.codewars.com/kata/58e2708f9bd67fee17000080

function palindrome(num){ 
    if (!Number.isInteger(num) || num < 0) return "Not valid"

    let strNum = String(num)
    const result = new Set()
    for (let i = 0; i <= strNum.length; i++){
        for (let j = i+2; j <= strNum.length; j++){
            if (strNum.slice(i, j) === strNum.slice(i, j).split('').reverse().join('')){
                if (Number(strNum.slice(i, j)) !== 0 && strNum[i] !== '0')
                    result.add(Number(strNum.slice(i, j)))
            }
        }
    }
    return [...result].length ? [...result].sort((a,b) => a - b) : 'No palindromes found'
}

console.log(palindrome(2),"No palindromes found");
console.log(palindrome(1551),[55,1551]);
console.log(palindrome(221122),[11,22,2112,221122]);
console.log(palindrome(10015885),[88,1001,5885]);
console.log(palindrome(13598),"No palindromes found");
console.log(palindrome("ACCDDCCA"),"Not valid");
console.log(palindrome("1551"),"Not valid");
console.log(palindrome(-4505),"Not valid");