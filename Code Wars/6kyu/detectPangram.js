// Detect Pangram - 6 kyu

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


let allLetters = []

for (let i = 97; i <= 122; i++){
    allLetters.push(i)
}

function isPangram(str){
    let testArr = []
    str = str.toLowerCase()
    for (let i = 0; i < str.length; i++){
        if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122){
            if (!testArr.includes(str[i].charCodeAt())) testArr.push(str[i].charCodeAt())
        }
    }
    return testArr.length === allLetters.length
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
// => true
console.log(isPangram("This is not a pangram."))
// => false