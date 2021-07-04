// 14. Longest Common Prefix - Easy
// https://leetcode.com/problems/longest-common-prefix/

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function(strs){
    if (strs.length === 1) return strs.join()
    let testStr = strs[0]
    let resultStr = ''
    let resultArr = []

    for (let i = 1, len = strs.length; i < len; i++){
        for (let y = 0, len = strs[i].length; y < len; y++){
            if (strs[i][y] === testStr[y]) resultStr += testStr[y]
            else break
        }
        resultArr.push(resultStr)
        resultStr = ''
    }
    const resultLen = resultArr.map(str => str.length)
    let idx = resultLen.indexOf(Math.min(...resultLen))
    
    return resultArr[idx]
}

console.log(longestCommonPrefix(["a"]), 'a')
console.log(longestCommonPrefix(["car", "cir"]), 'c')
console.log(longestCommonPrefix(["flower","flow","flight"]), 'fl')
console.log(longestCommonPrefix(["faery","fabulous","flight"]), 'f')
console.log(longestCommonPrefix(["dog","racecar","car"]), '')  // no common prefix