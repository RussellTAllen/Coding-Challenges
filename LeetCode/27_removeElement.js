// 27. Remove Element - Easy
// https://leetcode.com/problems/remove-element/

var removeElement= function(nums, val) {
    for (let i = 0, len = nums.length; i < len; i++){
        if (nums[i] === val) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums.length
}

console.log(removeElement([3,2,2,3], 3), 2, [2,2])
console.log(removeElement([0,1,2,2,3,0,4,2], 2), 5, [0,1,4,0,3])

// Runtime: 116 ms, faster than 5.83% of JavaScript online submissions for Remove Element.
// Memory Usage: 38.1 MB, less than 95.53% of JavaScript online submissions for Remove Element.
