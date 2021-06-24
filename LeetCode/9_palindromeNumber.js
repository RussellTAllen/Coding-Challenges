// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Example 4:

// Input: x = -101
// Output: false

// Constraints:
// -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

var isPalindrome = function(x) {
    x = x.toString()
    const reversed = x.split('').reverse().join('')
    return x === reversed
};

console.log(isPalindrome(10), false)
console.log(isPalindrome(101), true)
console.log(isPalindrome(444), true)
console.log(isPalindrome(444444), true)

