// Alphabet Symmetry - 7 kyu

// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

console.log('a'.charCodeAt())
console.log('z'.charCodeAt())

function solve(arr){
    let result = []
    let count = 0
    let str = ''
    for (let i = 0, n = arr.length; i < n; i++){
        count = 0
        str = arr[i].toLowerCase()
        for (let j = 0, m = str.length; j < m; j++){
            if (str[j].charCodeAt() - 96 === j+1) count++
        }
        result.push(count)
    }
    return result
}

console.log(solve(["abode","ABc","xyzD"]))
// => [4,3,1]
console.log(solve(["abide","ABc","xyz"]))
// => [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]))
// => [6, 5, 7]
console.log(solve(["encode","abc","xyzD","ABmD"]))
// => [1, 3, 1, 3]