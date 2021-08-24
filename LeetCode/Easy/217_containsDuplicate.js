// https://leetcode.com/problems/contains-duplicate/

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

// Constraints:
// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

function containsDuplicate(nums){
    const obj = {}
    for (const n of nums){
        if(obj[n]){ 
            return true 
        }else
            obj[n] = 1
    }
    return false
}
// Runtime: 92 ms, faster than 41.53% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 47.3 MB, less than 14.29% of JavaScript online submissions for Contains Duplicate.

console.log(containsDuplicate([1,2,3,1]), true)
console.log(containsDuplicate([1,2,3,4]), false)
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]), true)