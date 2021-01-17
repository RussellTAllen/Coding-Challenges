// Convert string to camel case - 6 kyu

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
    let arr = []
    if (str.includes("-")) {
        arr = str.split("-")
    } else if (str.includes("_")) {
        arr = str.split("_")
    } else return str
    str = arr.map(word => word === arr[0] ? word : word[0].toUpperCase() + word.slice(1)).join("")
    return str
}




// Examples
console.log(toCamelCase("the-stealth-warrior"))
// returns "theStealthWarrior"

console.log(toCamelCase("The_Stealth_Warrior")) // returns "TheStealthWarrior"

console.log(toCamelCase("testingTHEwaters"))

// Test.assertEquals(toCamelCase(''), '', "An empty string was provided but not returned")
// Test.assertEquals(toCamelCase("the_stealth_warrior"), "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
// Test.assertEquals(toCamelCase("The-Stealth-Warrior"), "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
// Test.assertEquals(toCamelCase("A-B-C"), "ABC", "toCamelCase('A-B-C') did not return correct value")
 

// Similiar solution found on javascript.info
// function toCamelCase(str) {
//     return str
//       .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
      
//       .map(
//         // capitalizes first letters of all array items except the first one
//         // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
//   }
