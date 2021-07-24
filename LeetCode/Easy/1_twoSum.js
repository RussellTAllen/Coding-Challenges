// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 103
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

///////////////////////////
// This solution's stats -
// Runtime: 88 ms, faster than 26.20% of JavaScript online submissions for Two Sum.
// Memory Usage: 39.7 MB, less than 16.65% of JavaScript online submissions for Two Sum.
function twoSum(nums, target){
    const initialNums = [...nums]
  
    let left = 0
    let right = nums.length - 1

    nums.sort((a,b) => a-b)       

    while (left !== right){
        if (nums[left] + nums[right] === target){
            let leftIdx = initialNums.indexOf(nums[left])
            let rightIdx = initialNums.lastIndexOf(nums[right])
            if (leftIdx < rightIdx){ 
                return [leftIdx, rightIdx] 
            }else if(leftIdx > rightIdx){
                return [rightIdx, leftIdx]
            }
        }else if(nums[left] + nums[right] > target){
            right--            
        }else if(nums[left] + nums[right] < target){
            left++            
        } 
    }
    if (nums[left] + nums[right] === target) return "There is no match."
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4,5], 6))
console.log(twoSum([15,11,7,2], 9))
console.log(twoSum([2,7,3,4,5], 11))
console.log(twoSum([1,2,3,4,5], 10))
console.log(twoSum([3,3], 6))

/////////////////////////////////////
// FIRST WAY - (before I fixed the case under which both numbers are the same)
// Had to convert initialNums into a string, then back into an array to keep nums.sort() from altering it
// Then had to make the indexOf look for a string inside the array rather than a number... saved a lot of headache above just using the spread operator [...nums]

// function twoSum(nums, target){
//     let initialNums = nums.toString()
//     console.log(initialNums)

//     let left = 0
//     let right = nums.length - 1

//     nums.sort((a,b) => a-b)    
//     initialNums = initialNums.split(",")
//     console.log(initialNums)

//     while (left !== right){
//         if (nums[left] + nums[right] === target){
//             console.log("found it!" + " nums[left] is " + nums[left] + " nums[right] is " + nums[right])
//             let leftIdx = initialNums.indexOf(String(nums[left]))
//             let rightIdx = initialNums.indexOf(String(nums[right]))
//             console.log(leftIdx, rightIdx)
//             if (leftIdx < rightIdx){ 
//                 console.log("return statement")
//                 return [leftIdx, rightIdx] 
//             }else if(leftIdx > rightIdx){
//                 console.log("return statement")
//                 return [rightIdx, leftIdx]
//             }
//             break
//         } else if(nums[left] + nums[right] > target){
//             right--            
//         } else if(nums[left] + nums[right] < target){
//             left++            
//         } else{
//         console.log("waaah")
//         } 
//     }
// }