// https://leetcode.com/problems/sqrtx/

// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

// Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

 

// Example 1:

// Input: x = 4
// Output: 2
// Example 2:

// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.

function mySqrt(x){
    return Math.floor(Math.sqrt(x))
}

console.log(mySqrt(4), 2)
console.log(mySqrt(8), 2)

// Runtime: 92 ms, faster than 62.95% of JavaScript online submissions for Sqrt(x).
// Memory Usage: 40 MB, less than 91.09% of JavaScript online submissions for Sqrt(x).