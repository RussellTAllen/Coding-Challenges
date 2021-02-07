// Simple Pig Latin - 5 kyu

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
    let result = []
    str = str.split(' ')
    str.forEach(word => {
        word = word.split('')
        if(/[a-z]/i.test(word)) {
            word.push(word[0]+'ay')
            word.shift()
            word = word.join('')
            result.push(word)
        } else result.push(word)
    });
    return result.join(' ')
}

console.log(pigIt('Pig latin is cool !'))
// 'igPay atinlay siay oolcay !'
console.log(pigIt('This is my string'))
// 'hisTay siay ymay tringsay'