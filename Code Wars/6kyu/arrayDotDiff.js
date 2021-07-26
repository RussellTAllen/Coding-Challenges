// Array.diff - 6 kyu

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// BRUTE FORCE SOLUTION
// function arrayDiff(a, b){
//     for (let i = 0; i < a.length; i++) {
//         if (b.includes(a[i])) {
//             a.splice(i, 1)
//             i--
//         }
//     }
//     return a
// }

function arrayDiff(a,b){
    return a.filter(n => !b.includes(n))
}

console.log(arrayDiff([1,2],[1])) 
// [2]
console.log(arrayDiff([1,2,2,2,2,3],[2]))
// [1,3]
console.log(arrayDiff([], [4,5])) 
// [], "a was [], b was [4,5]
console.log(arrayDiff([3,4], [3]))
// [4], "a was [3,4], b was [3]"

////////
//  Slick, concise solution
// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }