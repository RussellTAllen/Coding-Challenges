// https://www.codewars.com/kata/52a112d9488f506ae7000b95/train/javascript


function isIntArray(arr) {
    if (!arr || typeof arr != 'object') return false
    return arr.every(item => Number.isInteger(item))
}

console.log(isIntArray([]), true, "Input: []");
console.log(isIntArray([1, 2, 3, 4]), true, "Input: [1, 2, 3, 4]");
console.log(isIntArray([1, 2, 3, NaN]), false, "Input: [1, 2, 3, NaN]");
console.log(isIntArray(2), false)
console.log(isIntArray(NaN), false)