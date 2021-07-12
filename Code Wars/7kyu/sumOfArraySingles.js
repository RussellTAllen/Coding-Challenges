// Sum of Array Singles - 7 kyu

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.


// BRUTE FORCE LOOP SOLUTION
// function repeats(arr){
//     let testArr = []
//     let addArr = []
//     for (let i = 0, len = arr.length; i < len; i++){
//         if (testArr.includes(arr[i])) testArr.push(arr[i])
//         else if (addArr.includes(arr[i])){
//             addArr.splice(addArr.indexOf(arr[i]), 1)
//             testArr.push(arr[i])
//         }
//         else addArr.push(arr[i])
//     }
//     return addArr.reduce((a, c)=> a+c, 0)
// }

// SLICK METHODS SOLUTION
function repeats(arr){
    return arr.filter(n => arr.indexOf(n) === arr.lastIndexOf(n)).reduce((a,c) => a+c, 0)
}

console.log(repeats([4,5,7,5,4,8]),15)
console.log(repeats([9, 10, 19, 13, 19, 13]),19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
console.log(repeats([5, 10, 19, 13, 10, 13]),24)