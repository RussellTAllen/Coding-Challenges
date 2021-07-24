// 28.  impolement strStr() - Easy
// https://leetcode.com/problems/implement-strstr/

var strStr = function(haystack, needle){
    return haystack.indexOf(needle)
}

console.log(strStr('hello', 'll'), 2)
console.log(strStr('aaaaa', 'bba'), -1)
console.log(strStr('', ''), 0)

// Runtime: 80 ms, faster than 60.66% of JavaScript online submissions for Implement strStr().
// Memory Usage: 39.7 MB, less than 49.86% of JavaScript online submissions for Implement strStr().