// I need more speed! - 6 kyu

// Write a function that will take in any array and reverse it.

// Sounds simple doesn't it?

// NOTES:

// Array should be reversed in place! (no need to return it)
// Usual builtins have been deactivated. Don't count on them.
// You'll have to do it fast enough, so think about performances

// Doing with an object - 663ms test
// function reverse(arr) {
//     let obj = {}
//     let rev = []
//     for (let i = 0; i < arr.length; i++){
//         obj[i] = arr[i]
//     }
//     for (key in obj){
//         rev.unshift(obj[key])
//     }
//     return rev
// }

function reverse(arr) {
    for (let i = 0; i <= Math.floor((arr.length - 1) /2); i++){
        let el = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = el
    }
}

console.log(reverse(['hello','world','how','are','you','?']))
console.log(reverse([1,2,3,4,5]))