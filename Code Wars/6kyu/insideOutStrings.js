// Inside Out Strings - 6 kyu

// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

////////////////////
// BRUTE FORCE
function insideOut(x){
    let first, last, letter, newWord, newWord2
    let arr = x.split(' ')
    let result = arr.map(s => {
        if (s.length < 4) return s
        newWord = ''
        newWord2 = ''
        first = s.slice(0, Math.floor(s.length/2))
        last = s.slice(Math.ceil(s.length/2))
        fLength = first.length
        lLength = last.length
        for (let i = 0; i <= fLength; i++){
            if (newWord.length === s.length/2){
                continue
            }
            letter = first.slice(first.length-1)
            newWord += letter
            first = first.slice(0, first.length-1)
            if (first.length === 1){
                newWord += first
                break
            }
        }
        for (let i = 0; i <= lLength; i++){
            if (newWord2.length === s.length/2){
                continue
            }
            letter = last.slice(last.length-1)
            newWord2 += letter
            last = last.slice(0, last.length-1)
            if (last.length === 1){
                newWord2 += last
                break
            }
        }
        if (s.length % 2 === 0) return newWord+newWord2
        else return newWord+s[Math.floor(s.length/2)]+newWord2
        });
    return result.join(' ')
}

console.log(insideOut('tnytibwcyxho cubhfxuzzbxd udphpbuptgfz ewuulsiakiex'))
// => 'bityntohxycw xfhbucdxbzzu bphpduzfgtpu sluuwexeikai'
console.log(insideOut('take bintang and a dance please'))
// => 'atek nibtgna and a adnec elpesa'
// console.log(insideOut('man i need a taxi up to ubud'))
// // => 'man i ende a atix up to budu'
// console.log(insideOut('what time are we climbing up the volcano'))
// // => 'hwta item are we milcgnib up the lovcona'
// console.log(insideOut('take me to semynak'))
// // => 'atek me to mesykan'

////////////////////////
// Clever method
// const insideOut = (str) => {  
//     return str.split(' ').map(x => {    
//       let left = x.substring(0, Math.floor(x.length / 2)).split('').reverse().join('')
//       let right = x.substring(Math.ceil(x.length / 2)).split('').reverse().join('')
//       let middle = x[Math.floor(x.length / 2)]    
//       return x.length % 2 ? left + middle + right : left + right
//     }).join(' ')
//   }