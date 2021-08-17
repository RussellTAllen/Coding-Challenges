// Given a phrase, reverse the order of the characters of each word.
// No Reverse Method! Unless that is your brute force...

// REVERSE METHOD
// function reverseWords(words){
//     return words.split(' ').map(word => word.split('').reverse().join('')).join(' ')
// }

// BRUTE FORCE
// function reverseWords(words){
//     let result = []
//     words = words.split(' ')
    
//     for (let y = 0; y < words.length; y++){
//         let word = words[y].split('')
//         for (let i = 0; i < word.length/2; i++){
//             const temp = word[i]
//             word[i] = word[word.length - 1 - i]
//             word[word.length - 1 - i] = temp
//         }
//         result.push(word.join(''))
//     }
//     return result.join(' ')
// }

// REDUCE METHOD
function reverseWords(words){
    return words.split(' ').map(word => word.split('').reduce((a,c) => c+a)).join(' ')
}

console.log(reverseWords("I love JavaScript!"), "I evol !tpircSavaJ");