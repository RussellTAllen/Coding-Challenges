// Absent Vowel - 7 kyu
// https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript

// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will contain all vowles but one. Also, you won't need to worry about capitals.

const vowels = ['a', 'e', 'i', 'o', 'u']

function absentVowel(x){
    return vowels.indexOf(vowels.filter(v => !x.toLowerCase().includes(v))[0])
}



console.log(absentVowel("John Doe hs seven red pples under his bsket"), 0);
console.log(absentVowel("Bb Smith sent us six neatly arranged range bicycles"), 3);