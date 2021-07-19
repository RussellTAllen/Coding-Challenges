// Highest Scoring Word - 6kyu

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

console.log('a'.charCodeAt() - 96)

// LONG BRUTE FORCE WAY
// function high(x) {
//     let highest = ''
//     let score = 0
//     let highScore = 0
//     let arr = x.split(' ')
//     arr.forEach(w => {
//         score = 0
//         for (let i = 0; i < w.length; i++){
//             score += w[i].charCodeAt() - 96
//         }
//         console.log(`score for ${w} is ${score}; current high: ${highScore}`)
//         if (score > highScore) {
//             highest = w
//             highScore = score
//         }
//     })
//     return highest
// }

// SLICK METHOD WAY
function high(str){
    let values = str.split(' ').map(w => w.split('').reduce((a,c) => a + c.charCodeAt() - 96, 0))
    return str.split(' ')[values.indexOf(Math.max(...values))]
}

console.log(high('climbing'))
console.log(high('volcano'))
console.log(high('man i need a taxi up to ubud'))
// => 'taxi'
console.log(high('what time are we climbing up the volcano'))
// => 'volcano'
console.log(high('take me to semynak'))
// => 'semynak'
// console.log(high('aa b'))
// // => 'aa'
// console.log(high('b aa'))
// // => 'b'
// console.log(high('bb d'))
// // => 'bb'
// console.log(high('d bb'))
// // => 'd'
// console.log(high('aaa b'))
// => 'aaa'