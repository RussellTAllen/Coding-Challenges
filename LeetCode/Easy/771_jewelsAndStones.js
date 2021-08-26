// https://leetcode.com/problems/jewels-and-stones/

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Example 2:
// Input: jewels = "z", stones = "ZZ"
// Output: 0
 
// Constraints:
// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

// FIRST SOLUTION
// function numJewelsInStones(jewels, stones){
//     let count = 0
//     stones.split('').forEach(stone => jewels.includes(stone) && count++)
//     return count
// }
// Runtime: 131 ms, faster than 5.13% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 39.6 MB, less than 96.33% of JavaScript online submissions for Jewels and Stones.

// QUICKER SOLUTION
function numJewelsInStones(jewels, stones){
    return stones.split('').filter(stone => jewels.indexOf(stone) !== -1).length
}
// Runtime: 69 ms, faster than 88.26% of JavaScript online submissions for Jewels and Stones.
// Memory Usage: 40.1 MB, less than 70.90% of JavaScript online submissions for Jewels and Stones.

console.log(numJewelsInStones('aA', "aAAbbbb"), 3)
console.log(numJewelsInStones("z", "ZZ"), 0)