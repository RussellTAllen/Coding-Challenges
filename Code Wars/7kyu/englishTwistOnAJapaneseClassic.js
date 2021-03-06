// An English Twist on a Japanese Classic - 7 kyu

// Background:
// In Japan, a game called Shiritori is played. The rules are simple, a group of people take turns calling out a word whose beginning syllable is the same as the previous player's ending syllable. For example, the first person would say the word ねこ, and the second player must make a word that starts with こ, like　こむぎ. This repeats until a player can not think of a word fast enough or makes a word that ends in ん, because there are no words that begin with ん　in the Japanese language.

// English Shiritori has the same principle, with the first and last letters of words. That being said the lose condition is saying a word that doesn't start with the previous word's last letter or not saying a word quick enough.

// For example: apple -> eggs -> salmon -> nut -> turkey ...

// Your Task:
// You will be given a list of strings, a transcript of an English Shiritori match. Your task is to find out if the game ended early, and return a list that contains every valid string until the mistake. If a list is empty return an empty list. If one of the elements is an empty string, that is invalid and should be handled.

// Examples:
// All elements valid:
// The array {"dog","goose","elephant","tiger","rhino","orc","cat"}

// should return {"dog","goose","elephant","tiger","rhino","orc","cat"}

// An invalid element at index 2:
// The array {"dog","goose","tiger","cat", "elephant","rhino","orc"}

// should return ("dog","goose") since goose ends in 'e' and tiger starts with 't'

// An invalid empty string at index 2:
// The array {"ab","bc","","cd"}

// should return ("ab","bc")

// All invalid empty string at index 0:
// The array {"","bc","","cd"}

// should return An Empty List

function shiritori(words){
    if (words.length < 1) return []
    let result = []
    let game = true
    let i = 1
    let letter = words[0][words[0].length - 1]

    if (letter) result.push(words[0])
    while (game && words[i]){
        if (letter === words[i][0] && i <= words.length){
            letter = words[i][words[i].length - 1]
            result.push(words[i])
            i++
        }else game = false
    }
    return result
}

console.log(shiritori(["dog","goose","elephant","tiger","rhino","orc","cat"]))
// =>["dog","goose","elephant","tiger","rhino","orc","cat"]
console.log(shiritori(["dog","goose","tiger","cat", "elephant","rhino","orc"]))
// =>["dog","goose"]
console.log(shiritori([]))
// =>[]
console.log(shiritori(["","","","","",""]))
// =>[]
console.log(shiritori(["ab","bc","","de","","",""]))
// =>["ab","bc"]