// Vowel Count - 7 kyu
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0
    let vowelRegex = /[aeiou]/i
    for (let i = 0; i < str.length; i++){
        if (vowelRegex.test(str[i])) vowelsCount++
    }    
    return vowelsCount
  }

  console.log(getCount('This string has seven vowels'))
  console.log(getCount('This string has six vowels'))