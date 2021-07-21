// Duplicate Encoder - 6 kyu

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// LONG BRUTE FORCE SOLUTION
// function duplicateEncode(word){
//     word = word.toLowerCase()
//     let replace1
//     if (word.includes(')') && !word.includes(')', word.indexOf(')') + 1)){
//         replace1 = word.indexOf(')')
//     }
//     for(let i = 0; i < word.length; i++){
//         if (word.includes(word[i], i+1)){
//             word = replaceAll(word, word[i], ")")
//         } 
//     }
//     word = word.split('')
//     word = word.map(letter => letter !== ")" ? "(" : letter)

//     if (replace1 != undefined) word.splice(replace1, 1, '(')

//     return word.join('')
// }

// function replaceAll(input, find, replace){
//     let arr = input.split(find)
//     return arr.join(replace)
// }


// SLICK METHODS SOLUTION
function duplicateEncode(str){
    str = str.toLowerCase()
    return [...str].map(c => str.indexOf(c) === str.lastIndexOf(c) ? '(' : ')').join('')
}

console.log(duplicateEncode(' ( ( )'))
// ")))))("
console.log(duplicateEncode('deee)ue(aIFeQeO'))
// "()))(()(((()()("
console.log(duplicateEncode("din"))
//  "((("
console.log(duplicateEncode("recede"))
//  "()()()"
console.log(duplicateEncode("Success"))
//  ")())())"  , "should ignore case"
console.log(duplicateEncode("(( @"))
//  "))(("

/////////////////////////////
// FIRST SOLUTION - works fine in the browser, but I guess CodeWars wants me to solve without using replaceAll()

// function duplicateEncode(word){
//     word = word.toLowerCase()
//     for (let i = 0; i < word.length; i++){        
//         if (word.includes(word[i], i+1)){
//             word = word.replaceAll(word[i], ")")
//         }else if (word[i] !== ")") word = word.replace(word[i], "(")
//     }
//     return word
// }

// SECOND TRY - works for all cases except when a ')' or '(' are present in the word
// 
// function duplicateEncode(word){
//     word = word.toLowerCase().split('')
//     let replaceArr = []
//     for (let i = 0; i < word.length; i++){        
//         if (word.includes(word[i], i+1)){
//             replaceArr = word.filter(letter => letter === word[i])
//             word = word.join('')

//             replaceArr.forEach(letter => {
//                 word = word.replace(letter, ")")
//             });

//             word = word.split('')

//         }else if (word[i] !== ")") {
//             word = word.join('').replace(word[i], "(").split('')
//         }
//     }
//     return word.join('')
//   }


//////
// Elegant Solution

// function duplicateEncode(word){
   
//     var unique='';
//     word = word.toLowerCase();
//     for(var i=0; i<word.length; i++){
//         if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
//             unique += '(';
//         }
//         else{
//             unique += ')';
//         }
//     }
//     return unique;

// }

///////
// Elegant solution 2 - great use of map

// function duplicateEncode(word){
//     return word
//       .toLowerCase()
//       .split('')
//       .map( function (a, i, w) {
//         return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//       })
//       .join('');
//   }