// Numbers to Letters - 7 kyu
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

let reverseAlpha = ''
for (let i = 122; i >= 97; i--){
    reverseAlpha += String.fromCharCode(i)
}
reverseAlpha += '!? '


function switcher(x){
    return x.map(n => reverseAlpha[n-1]).join('')
}

console.log(switcher(['26']), 'a');
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
console.log(switcher(['4', '24']), 'wc'); 