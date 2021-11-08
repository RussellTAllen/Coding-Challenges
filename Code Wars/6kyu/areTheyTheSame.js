// 6 kyu - https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(arr1, arr2){
    if (arr1 == null || arr2 == null) return false
    arr1.sort((a,b) => a - b)
    arr2.sort((a,b) => a - b)
    
    if (arr1.filter((n, idx) => n * n === arr2[idx]).length !== arr1.length) return false
    if (arr2.filter((n, idx) => Math.sqrt(n) === arr1[idx]).length !== arr1.length) return false
    
    return true
}

const a = [121, 144, 19, 161, 19, 144, 19, 11]  
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

console.log(comp(a,b), true)
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [132, 14641, 20736, 361, 25921, 361, 20736, 361]), false)
console.log(comp([121, 144, 19, 161, 19, 144, 19, 12], [121, 14641, 20736, 361, 25921, 361, 20736, 361]), false)
console.log(comp(null, [1,2,3]), false)
console.log(comp([1,2,3], null), false)
console.log(comp([1, 5, 8, 6, 0, 0, 3, 0, 3, 2, 0, 9, 3, 10, 10], [1, 9, 100, 1, 0, 0, 81, 9, 4, 36, 9, 25, 100, 64, 0]))
console.log(comp([7, 4, 2, 7, 2, 8, 3, 9, 0, 5, 2, 2, 1, 3, 5, 2, 2, 1, 4], [4, 49, 49, 25, 4, 9, 25, 64, 1, 16, 0, 16, 81, 1, 4, 9, 4, 4, 4]), true)