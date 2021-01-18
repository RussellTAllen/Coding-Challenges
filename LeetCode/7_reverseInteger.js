// 7. Reverse Integer - Easy

// RESULTS -    Runtime: 104 ms, faster than 39.95% of JavaScript online submissions for Reverse Integer.
//              Memory Usage: 40 MB, less than 77.50% of JavaScript online submissions for Reverse Integer.

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverse(x) {
    x = String(x).split("").reverse()
    if (x[x.length - 1] === "-"){
        x.splice(x.length -1, 1)
        x.unshift("-")
    }
    x = parseInt(x.join(""))
    if (x <= Math.pow(-2, 31) || x >= 2**31 - 1) return 0
    return x
}

console.log(reverse(123))
// Output: 321
console.log(reverse(-123))
// Output: -321
console.log(reverse(120))
// Output: 21
console.log(reverse(0))
// Output: 0
console.log(reverse(1))
// Output: 1
 

// Constraints:

// -2^31 <= x <= 2^31 - 1

