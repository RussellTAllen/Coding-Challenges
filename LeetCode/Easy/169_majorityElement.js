// https://leetcode.com/problems/majority-element/

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -231 <= nums[i] <= 231 - 1
 
// Follow-up: Could you solve the problem in linear time and in O(1) space?

// MY SOLUTION - passes the test cases, but actually doesn't solve for n appearing more than n/2 times, it just pulls out the element with the highest number of occurances
function majorityElement(nums){
    let obj = {}
    nums.forEach(n =>{
        if (n in obj) obj[n]++
        else obj[n] = 0
    })
    return Object.keys(obj).reduce((a,b) => obj[a] > obj[b] ? a : b)
}

// Runtime: 68 ms, faster than 98.73% of JavaScript online submissions for Majority Element.
// Memory Usage: 40.9 MB, less than 91.17% of JavaScript online submissions for Majority Element.

// MY SOLUTION THAT SOLVES FOR N APPREATING MORE THAN N/2 times
function majorityElement(nums){
    let obj = {}

    nums.forEach(n =>{
        n in obj ? obj[n]++ : obj[n] = 1
    })
    return Object.keys(obj).filter(key => obj[key] > nums.length/2 && key)
}

// Runtime: 68 ms, faster than 98.73% of JavaScript online submissions for Majority Element.
// Memory Usage: 42.1 MB, less than 55.39% of JavaScript online submissions for Majority Element.

console.log(majorityElement([3,2,3]), 3)
console.log(majorityElement([2,2,1,1,1,2,2]), 2)
