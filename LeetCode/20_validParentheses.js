// 20. Valid Parentheses - Easy
// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// Example 4:

// Input: s = "([)]"
// Output: false
// Example 5:

// Input: s = "{[]}"
// Output: true
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

const obj = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
}

const opened = ['(', '[', '{']
const closed = [')', ']', '}']

var isValid = function(s) {
    if (closed.includes(s[0])) return false

    let test = []
    for (let i = 0, len = s.length; i < len; i++){
        if (opened.includes(s[i])){
            test.push(s[i])
            continue
        }
        if (closed.includes(s[i])){
            if (opened.indexOf(test[test.length-1]) === closed.indexOf(s[i])){
                test.pop()
            }else return false
        }
    }
    return test.length === 0
}

console.log(isValid('()'), true)
console.log(isValid('()[]{}'), true)
console.log(isValid(']['), false)
console.log(isValid('(]'), false)
console.log(isValid('(])]'), false)
console.log(isValid('([])]'), false)
console.log(isValid('{[]}'), true)

// Runtime: 68 ms, faster than 96.50% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 40.1 MB, less than 20.63% of JavaScript online submissions for Valid Parentheses.

