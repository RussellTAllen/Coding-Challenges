// Two Oldest Ages - 7 kyu
// https://www.codewars.com/kata/511f11d355fe575d2c000001/train/javascript

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example:
// twoOldestAges( [1, 2, 10, 8] ) // should return [8, 10]

// SOLUTION USING SORT/POP
// function twoOldestAges(ages){
//     ages.sort((a,b)=>a-b)
//     let result = [ages.pop()]
//     result.unshift(ages.pop())
//     return result
// }

// SOLUTION USING SPLICE/INDEXOF
// function twoOldestAges(ages){
//     let result = [Math.max(...ages)]
//     ages.splice(ages.indexOf(Math.max(...ages)), 1)
//     result.unshift(Math.max(...ages))
//     return result
// }

// CONCISE SOLUTION USING SORT/SLICE
function twoOldestAges(ages){
    return ages.sort((a,b)=>a-b).slice(-2)
}

console.log(twoOldestAges([1,5,87,45,8,8]), [45, 87])
console.log(twoOldestAges([6,5,83,5,3,18]), [18, 83])
console.log(twoOldestAges([6,5,83,5,3,18]), [18, 83])