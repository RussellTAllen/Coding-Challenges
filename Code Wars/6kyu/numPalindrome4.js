// https://www.codewars.com/kata/58df8b4d010a9456140000c7

// For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

function palindrome(num) { 
    if (!Number.isInteger(num) || num < 0) return "Not valid"
    if (num < 11) num = 11
    
    let big, small
    
    for (let count = 0; !big && !small; count++){
        if (String(num + count) === String(num + count).split('').reverse().join('')) 
            big = num + count
        if (String(num - count) === String(num - count).split('').reverse().join('')) 
            small = num - count
    }

    return big ? big : small
}

console.log(palindrome(8),11);
console.log(palindrome(281),282);
console.log(palindrome(1029),1001); 
console.log(palindrome(1221),1221);
console.log(palindrome("BGHHGB"),"Not valid");
console.log(palindrome("11029"),"Not valid");
console.log(palindrome(-1029),"Not valid");