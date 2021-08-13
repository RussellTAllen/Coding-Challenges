// Sort Strings by Most Contiguous Vowels - 6 kyu
// https://www.codewars.com/kata/5d2d0d34bceae80027bffddb/train/javascript

// The goal of this Kata is to write a function that will receive an array of strings as its single argument, then the strings are each processed and sorted (in desending order) based on the length of the single longest sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

// Example:

// str1 = "what a beautiful day today"
// str2 = "it's okay, but very breezy"
// When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

// If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.

function sortStringsByVowels(strings){
    let counts = []
    let count = 0
    let maxCount = 0
    strings.forEach(str => {
        count = 0
        maxCount = 0
        for (let i = 0; i < str.length; i++){
            if('aeiou'.includes(str[i].toLowerCase())){
                count++
                if (count > maxCount) maxCount = count
            }else{
                count = 0
            }
        }
        counts.push(maxCount)
    })

    let obj = {}
    strings.forEach((str, i) => {
        obj[str] = counts[i]
    })
    return Object.keys(obj).sort((a,b) => obj[b] - obj[a])
}

console.log(sortStringsByVowels(["aa","eee","oo","iiii"]),["iiii","eee","aa","oo"]);
console.log(sortStringsByVowels(["a","e","ii","ooo","u"]),["ooo","ii","a","e","u"]);
console.log(sortStringsByVowels( ["ioue","ee","uoiea"]) , ["uoiea", "ioue","ee"]);
console.log(sortStringsByVowels( ["high","day","boot"]) , ["boot","high","day"]);    
console.log(sortStringsByVowels(["none","uuu","Yuuuge!!"]) , ["uuu","Yuuuge!!","none"]);                                     
console.log(sortStringsByVowels(["AIBRH","","YOUNG","GREEEN"]) , ["GREEEN","AIBRH","YOUNG",""]);
console.log(sortStringsByVowels(["jyn","joan","jimmy","joey"]) , ["joan","joey","jimmy","jyn"]);
console.log(sortStringsByVowels(["uijijeoj","lkjlkjww2","iiutrqy"]) , ["iiutrqy","uijijeoj","lkjlkjww2"]);
console.log(sortStringsByVowels(["how about now","a beautiful trio of"]) , ["a beautiful trio of","how about now"]);
console.log(sortStringsByVowels(["every","bataux","is","waaaay","loose"]) , ["waaaay","bataux","loose","every","is"]);