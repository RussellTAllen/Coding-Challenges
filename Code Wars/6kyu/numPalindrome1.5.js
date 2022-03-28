// https://www.codewars.com/kata/numerical-palindrome-number-1-dot-5

function palindrome(num,s) { 
    if (typeof num !== 'number' || typeof s !== 'number' || num < 0) return "Not valid"
    const result = []
    if (num < 11) num = 11

    while(s > 0){
        while(String(num).split('').reverse().join('') !== String(num)){
            // console.log('num',num)
            num++
        }

        result.push(num)
        num++
        s--
    }

    return result
}

console.log(palindrome(6,4),[11,22,33,44]);
console.log(palindrome(75,1),[77]);
console.log(palindrome(493,0),[]);
console.log(palindrome(0,3),[11,22,33]);
console.log(palindrome(1219,3),[1221, 1331, 1441]);
console.log(palindrome(101,2),[101,111]);
console.log(palindrome(3872,6),[3883, 3993, 4004, 4114, 4224, 4334]);
console.log(palindrome("ACCDDCCA",3),"Not valid");
console.log(palindrome(773,"1551"),"Not valid");
console.log(palindrome(-4505,15),"Not valid");