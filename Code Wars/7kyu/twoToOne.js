// Two to One - 7 kyu

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.
// Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



console.log(longest(a, b))
// longest(a, b) -> "abcdefklmopqwxy"

function longest(s1,s2){
    let combined = (s1 + s2).split("").sort()
    combined = combined.filter((letter, i) => !combined.includes(letter, i + 1))
    return combined.join("")
}

////////
// FIRST TIME - the long way
// function longest(s1, s2){
//     let result = []
//     let combined = (s1 + s2).split("")
//     for (let i = 0; i < combined.length; i++){
//         if (!combined.includes(combined[i], i+1)){
//             result.push(combined[i])
//         }
//     }
//     return result.sort().join("")
// }