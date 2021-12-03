// https://www.codewars.com/kata/5e8dd197c122f6001a8637ca

// const removeDuplicateIds = (obj) => {
//     const result = obj
//     for (key in obj){
//         let testArr = []
//         obj[key].forEach(char => {
//             if (!testArr.includes(char))
//                 testArr.push(char)
//         })
//         result[key] = testArr
//     }

//     let allChars = []
//     for (key in result){
//         allChars.push(result[key])
//     }
//     allChars = allChars.reduce((a,b) => a.concat(b))
    
//     for (key in result){
//         for (let i = 0; i < result[key].length; i++){
//             let char = result[key][i]
//             let charIdx = allChars.indexOf(char)

//             if (allChars.includes(char, charIdx+1)){
//                 result[key].splice(result[key].indexOf(char), 1)
//                 allChars.splice(charIdx, 1)
//                 i--
//             }
//         }
//     }

//     return result
// };

const removeDuplicateIds = (obj) => {
    const result = {}
    let reverseVals = []
    
    Object.keys(obj).forEach(key => {
        const filteredArr = [...new Set(obj[key])]
        reverseVals += filteredArr+","
        result[key] = filteredArr
    })
    reverseVals = reverseVals.split(',').reverse()
    reverseVals.splice(0,1)
    
    for (const [key, array] of Object.entries(result)){
        let resultArr = []
        
        array.forEach(value => {
            reverseVals.splice(reverseVals.indexOf(value), 1)
            if (!reverseVals.includes(value) && !resultArr.includes(value)){
                resultArr.push(value)
            }
        })
        result[key] = resultArr
    }

    return result
};


const obj = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
};
const result = removeDuplicateIds(obj);

const obj1 = {
    "1": ["C", "F", "G"],
    "2": ["A", "B", "C"],
    "3": ["A", "B", "D"],
};
// const result1 = removeDuplicateIds(obj1);

const obj2 = {
    "1": ["A"],
    "2": ["A"],
    "3": ["A"],
};
// const result2 = removeDuplicateIds(obj2);
        
const obj3 = {
    "432": ["A", "A", "B", "D"],
    "53": ["L", "G", "B", "C"],
    "236": ["L", "A", "X", "G", "H", "X"],
    "11": ["P", "R", "S", "D"],
};
// const result3 = removeDuplicateIds(obj3);
  
  
// console.log(removeDuplicateIds(obj), { "1": ["C"], "2": ["A", "B", "D"] });
// console.log(removeDuplicateIds(obj1), { "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] });
// console.log(removeDuplicateIds(obj2), { "1": [], "2": [], "3": ["A"] });
// console.log(removeDuplicateIds(obj3), {
//         "11": ["P", "R", "S"],
//         "53": ["C"],
//         "236": ["L", "X", "G", "H"],
//         "432": ["A", "B", "D"],
//       });

console.log(removeDuplicateIds({ '49': [ 'J', 'N', 'I', 'C', 'L', 'E', 'U' ],
'106': [ 'N', 'L', 'U', 'X', 'Q', 'S', 'T' ],
'206': [ 'D', 'N', 'R', 'N', 'U', 'P' ],
'218': [ 'S', 'A', 'U', 'H', 'A', 'F' ],
'342': [ 'U' ],
'686': [ 'G', 'D', 'U', 'X', 'T', 'N', 'J', 'B', 'D' ],
'802': [ 'X', 'P', 'O' ] }),

{ '49': [ 'I', 'C', 'E' ],
  '106': [ 'L', 'Q' ],
  '206': [ 'R' ],
  '218': [ 'S', 'A', 'H', 'F' ],
  '342': [],
  '686': [ 'G', 'D', 'U', 'T', 'N', 'J', 'B' ],
  '802': [ 'X', 'P', 'O' ] })