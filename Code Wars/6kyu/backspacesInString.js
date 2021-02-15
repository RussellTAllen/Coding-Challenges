// Backspaces in string - 6 kyu

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""


function cleanString(s){
    let count = 0
    s = s.split('')
    for (let i = s.length-1; i >= 0; i--){
        if (s[i] === '#'){
            s.splice(i, 1)
            count++
        }else if (count > 0 && s[i] !== '#'){
            s.splice(i, 1)
            count--
        }
    }
    return s.join('')
}

console.log(cleanString('abc####d##c#'))
// "" 
console.log(cleanString("abc#d##c"    ))
//  ==>  "ac"
console.log(cleanString("abc##d######"))
//  ==>  ""
console.log(cleanString("#######"     ))
//  ==>  ""
console.log(cleanString(""            ))
//  ==>  ""
console.log(cleanString('abc#d##c'))
//"ac"


//////////////
//  Cool solution

function clean_string(s) {
    const result = []
    for (const c of s) {
      if (c === "#") {
        result.pop()
      } else {
        result.push(c)
      }
    }
    return result.join("")
}

//////
// Slick one-line solution

clean_string = s => s.split('').reduce((r, e) => e == '#' ? r.slice(0, -1) : r + e, '');
