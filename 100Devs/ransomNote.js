// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and create the ransom note from the magazine words.

const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

// BRUTE FORCE
// function ransomNote(note, magazine){
//     note = note.split(' ')
//     for (let i = 0; i < note.length; i++){
//         if(magazine.includes(note[i])) {
//             magazine = magazine.replace(note[i], '')
//             console.log(magazine)
//         }
//         else return false
//     }
//     return true
// }

// FILTER METHOD
function ransomNote(note, magazine){
    return note.split(' ').filter(w => {
        if (magazine.includes(w)){
            magazine = magazine.replace(w, '')
        }else return w
    }).length === 0
}


console.log(ransomNote("Lorem", magazine), true);
console.log(ransomNote("sit ad est sint", magazine), true);
console.log(ransomNote("sit ad est love", magazine), false);
console.log(ransomNote("sit ad est sint in in", magazine), true);
// console.log(ransomNote("sit ad est sint in in in in", magazine), false);