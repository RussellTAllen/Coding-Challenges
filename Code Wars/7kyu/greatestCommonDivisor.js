// https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd/train/javascript

// Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

// The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.

// RECURSIVE SOLUTION
function mygcd(x,y){
    return y == 0 ? x : mygcd(y, x % y)
}

console.log(mygcd(30,12),6)
// (6, 30)
// (6, 0)


console.log(mygcd(50, 20))
// (20, 10)
// (10, 0)

console.log(mygcd(8,9),1)
console.log(mygcd(1,1),1)