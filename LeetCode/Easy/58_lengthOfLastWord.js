// 53. Length of Last Word - Easy
// https://leetcode.com/problems/length-of-last-word/

// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5

// Example 2:
// Input: s = " "
// Output: 0

var lengthOfLastWord = function(s) {
    let words = s.trim().split(' ')
    return words[words.length-1].length
};

console.log(lengthOfLastWord('Hello World'), 5)
console.log(lengthOfLastWord(' '), 0)
console.log(lengthOfLastWord('a '), 0)

// Runtime: 76 ms, faster than 54.33% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 39 MB, less than 14.87% of JavaScript online submissions for Length of Last Word.