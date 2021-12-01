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
    Object.values(obj).forEach(arr => reverseVals += arr+",")
    reverseVals = reverseVals.split(',').reverse()
    reverseVals.splice(0,1)

    for (const [key, array] of Object.entries(obj)){
        let resultArr = []
        
        array.forEach(value => {
            reverseVals.splice(reverseVals.indexOf(value), 1)
            if (!reverseVals.includes(value)){
                resultArr.push(value)
            }
        })
        result[key] = resultArr.sort()
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
  
  
console.log(removeDuplicateIds(obj), { "1": ["C"], "2": ["A", "B", "D"] });
console.log(removeDuplicateIds(obj1), { "1": ["F", "G"], "2": ["C"], "3": ["A", "B", "D"] });
console.log(removeDuplicateIds(obj2), { "1": [], "2": [], "3": ["A"] });
console.log(removeDuplicateIds(obj3), {
        "11": ["P", "R", "S"],
        "53": ["C"],
        "236": ["L", "X", "G", "H"],
        "432": ["A", "B", "D"],
      });