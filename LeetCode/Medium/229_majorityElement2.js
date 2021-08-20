// https://leetcode.com/problems/majority-element-ii/

// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Follow-up: Could you solve the problem in linear time and in O(1) space?

// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

// Constraints:

// 1 <= nums.length <= 5 * 104
// -109 <= nums[i] <= 109

function majorityElement(nums){
    let obj = {}

    nums.forEach(n =>{
        n in obj ? obj[n]++ : obj[n] = 1
    })
    console.log(obj[0] > nums.length/3)
    return Object.keys(obj).filter(key => obj[key] > nums.length/3 && key)
}

// console.log(majorityElement([3,2,3]), [3])
// console.log(majorityElement([1]), [1])
// console.log(majorityElement([1,2]), [1,2])
console.log(majorityElement([0,0,0]), [0])