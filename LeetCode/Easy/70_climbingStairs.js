// https://leetcode.com/problems/climbing-stairs/

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
 
// Constraints: 1 <= n <= 45

///////////////////////////////
// 4 steps
// 1. 1 + 1 + 1 + 1
// 2. 2 + 1 + 1
// 3. 1 + 2 + 1
// 4. 1 + 1 + 2
// 5. 2 + 2

// 5 steps
// 1. 1+1+1+1+1
// 2. 2+1+1+1
// 3. 1+2+1+1
// 4. 1+1+2+1
// 5. 1+1+1+2
// 6. 2+2+1
// 7. 2+1+2
// 8. 1+2+2

// Looks like a fibonacci sequence


function climbStairs(n){
    if (n === 1 || n === 0) return 1

    let x = 1
    let y = 2

    for (let i = 3; i <= n; i++){
        let z = x + y
        x = y
        y = z
    }
    return y
}

console.log(climbStairs(2), 2)
console.log(climbStairs(3), 3)

// Runtime: 64 ms, faster than 94.57% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 38.7 MB, less than 39.02% of JavaScript online submissions for Climbing Stairs.