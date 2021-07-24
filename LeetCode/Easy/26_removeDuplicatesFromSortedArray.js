// 26. Remove Duplicates from Sorted Array - Easy
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === nums[i+1]){
            nums.splice(i, 1)
            i--
        }
    }
    return nums
};


console.log(removeDuplicates([1,1,2]), [1,2])
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]), [0,1,2,3,4])
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4,44,55,55,66]), [0,1,2,3,4,44,55,66])

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Runtime: 152 ms, faster than 15.14% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 41.4 MB, less than 31.39% of JavaScript online submissions for Remove Duplicates from Sorted Array.