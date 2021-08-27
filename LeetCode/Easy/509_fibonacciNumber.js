// https://leetcode.com/problems/fibonacci-number/

// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

// Constraints:
// 0 <= n <= 30

// CLASSIC BRUTE FORCE LOOP
// function fib(n){
//     let x = 0
//     let y = 1
//     let z

//     for (let i = 0; i < n; i++){
//         z = y
//         y += x
//         x = z
//     }
//     return x
// }
// Runtime: 116 ms, faster than 10.61% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 38.3 MB, less than 95.21% of JavaScript online submissions for Fibonacci Number.

// RECURSIVE ATTEMPT
// let count = 0
// let x = 0
// let y = 1
// let z

// function fib(n){
//     z = y
//     y += x
//     x = z

//     count++

//     console.log(x)
//     console.log(count === n)
//     if (count === n) {
//         return x
//     }
//     if (count < n){
//         fib(n)
//     }
// }

// LEON'S WAY
// Create an array [0,1] and then a loop that starts at i =2. Loop all the way to n (the num passed in) add the previous two numbers to get the next number to put in the array. At the end just return the last number
function fib(n){
    let arr = [0,1]

    for (let i = 2; i <= n; i++){
        arr[i] = arr[i - 1] + arr[i -2]
        console.log(arr[i])
    }

    return arr[n]
}


// console.log(fib(2), 1)
// console.log(fib(3), 2)
// console.log(fib(4), 3)
console.log(fib(12), 144)