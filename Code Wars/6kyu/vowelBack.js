// Vowel Back

// You need to play around with the provided string (s).

// Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

// Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

// Exceptions:

// If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

// If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

// Provided string will always be lower case, won't be empty and will have no special characters.

console.log('e'.charCodeAt())
console.log('z'.charCodeAt())
console.log(String.fromCharCode(97))
console.log(String.fromCharCode(122))

const consonants = 'bfghjklmnpqrstvwxyz'
const vowels = 'aiu'
const backOne = 'co'
const revert = 'code'

function vowelBack(s){
    let result = ''
    let letter = ''
    let charCode = 0
    for (let i = 0; i < s.length; i++){
        letter = ''
        charCode = s[i].charCodeAt()
        if (consonants.includes(s[i])){
            if (charCode+9 > 122){
                charCode += 9 - 26
            }else charCode += 9
        }else if (vowels.includes(s[i])){
            if (charCode-5 < 97){
                charCode += 21
            }else charCode -= 5
        }else if (s[i] === 'd'){
            if (charCode-3 < 97){
                charCode -= 3 + 26
            }else charCode -= 3
        }else if (s[i] === 'e'){
            if (charCode-4 < 97){
                charCode += 22
            }else charCode -= 4
        }else if (backOne.includes(s[i])){
            if (charCode-1 < 97){
                charCode -= 1 + 26
            }else charCode--
        }
        letter = String.fromCharCode(charCode)
        if (revert.includes(letter)) letter = s[i]
        result += letter
    }
    return result
}

console.log(vowelBack('bzf'))
// => kif
console.log(vowelBack("testcase"))
// =>  "tabtbvba"
console.log(vowelBack("codewars"))
// =>  "bnaafvab"
console.log(vowelBack("exampletesthere"))
// =>  "agvvyuatabtqaaa"