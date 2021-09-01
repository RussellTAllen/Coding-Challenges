// https://www.codewars.com/kata/5694cb0ec554589633000036/train/javascript

// This is a kata series that you can only solve using recursion.
// ##1 - Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

const factorial = n => {
    return n < 2 ? 1 : n * factorial(n-1)
  };

console.log(factorial(0), 1);
console.log(factorial(1), 1);
console.log(factorial(2), 2);
console.log(factorial(3), 6);
console.log(factorial(5), 120);