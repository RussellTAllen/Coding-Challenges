// https://leetcode.com/problems/number-of-good-pairs/

// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:
// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

// Example 2:
// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.

// Example 3:
// Input: nums = [1,2,3]
// Output: 0

// Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100


// NESTED LOOP SOLUTION (O(n^2))
// function numIdenticalPairs(nums){
//     let count = 0
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i+1; j < nums.length; j++){
//             nums[i] === nums[j] && count++
//         }
//     }
//     return count
// }
// Runtime: 76 ms, faster than 43.30% of JavaScript online submissions for Number of Good Pairs.
// Memory Usage: 38.7 MB, less than 60.60% of JavaScript online submissions for Number of Good Pairs.

// HASHMAP ATTEMPT
// function numIdenticalPairs(nums){
//     let count = 0
//     let pairs = {}
//     nums.forEach(n => n in pairs ? pairs[n]++ : pairs[n] = 1)
    
//     Object.keys(pairs).forEach(n => {
//        pairs[n] === 2 ? count++ 
//                       ? pairs[n] === 3 ? count += 3
//                       ? pairs[n] === 4 ? count += 6
//                       : // lalala
//     })
// }

// HASHMAP SOLUTION 
function numIdenticalPairs(nums){
    let count = 0
    let map = {}

    for (let i = 0; i < nums.length; i++){
        map[nums[i]] ? count += map[nums[i]] : map[nums[i]] = 0
        map[nums[i]]++
    }

    return count
}

// 2 nums = 1 pair
// 3 nums = 3 pairs
// 4 nums = 6 pairs
// 5 nums = 10 pairs


console.log(numIdenticalPairs([1,2,3,1,1,3]), 4)
console.log(numIdenticalPairs([1,1]), 1)
console.log(numIdenticalPairs([1,1,1]), 3)
console.log(numIdenticalPairs([1,1,1,1]), 6)
console.log(numIdenticalPairs([1,1,1,1,1]), 10)
console.log(numIdenticalPairs([1,1,1,1,1,1]), 15)
console.log(numIdenticalPairs([1,1,1,1,1,1,1]), 21)
console.log(numIdenticalPairs([1,2,3]), 0)
