// Encrypt This! - 6 kyu

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.


var encryptThis = function(text) {
    let letter
    let firstLetter
    text = text.split(' ')
    let result = []
    text.map(word =>{               
        if (word.length > 1){
            firstLetter = word[0] 
            word = word.substr(1)
            letter = word[0]
            word = word.replace(word[0], word[word.length -1])
            word = word.substr(0, word.length -1)
            word = firstLetter + word + letter
        }
        word = word.replace(word[0], word.charCodeAt(0))
        result.push(word)
    })
    return result.join(' ')
}


console.log(encryptThis("DqUyprEu DDcIsWNkGCc USRcOt mrYbeC KSjWimWd a NrhP aivd"))
// === '68uUyprEq 68ccIsWNkGCD 85tRcOS 109CYber 75djWimWS 97 78Phr 97dvi'
console.log(encryptThis("Hello"))
// === "72olle"
console.log(encryptThis("good"))
// === "103doo"
console.log(encryptThis("hello world"))
// === "104olle 119drlo"
