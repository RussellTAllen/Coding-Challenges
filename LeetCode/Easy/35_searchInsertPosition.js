// 35. Search Insert Position - Easy
// https://leetcode.com/problems/search-insert-position/

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

// Example 4:
// Input: nums = [1,3,5,6], target = 0
// Output: 0

// Example 5:
// Input: nums = [1], target = 0
// Output: 0

var searchInsert = function(nums, target) {
    if(nums.includes(target)) return nums.indexOf(target) 
    if(nums[0] > target) return 0
    else{
        for (let i = 0, len = nums.length; i < len; i++){
            if (nums[i] < target && nums[i+1] > target){
                return i+1
            }
        }
        return nums.length
    } 
};

console.log(searchInsert([1,3,5,6], 5), 2)
console.log(searchInsert([1,3,5,6], 2), 1)
console.log(searchInsert([1,3,5,6], 7), 4)
console.log(searchInsert([1,3,5,6], 0), 0)
console.log(searchInsert([1], 0), 0)
