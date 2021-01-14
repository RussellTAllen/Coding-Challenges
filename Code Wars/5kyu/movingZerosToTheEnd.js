// Moving Zeros To The End - 5 kyu
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//// FIRST TRY - works but is inefficient
// function moveZeros(array){
//     zeros = -1
//     for (let i = 0; i < array.length; i++){
//         if (array[i] === array[i + 1] && array[i] === 0){
//             for (let j = 0; j < array.length; j++){
//                 if (array[i + j] === array[j + 1]) zeros++
//             }
//             array.splice(i, zeros)
//             while (zeros != 0){
//                 array.push(0)
//                 zeros--
//             }
//         }else if (array[i] === 0){
//             array.splice(i, 1)
//             array.push(0)
//         }
//     }
//     return array
// }


// Second Try - much better
function moveZeros(array){
    let pushed = 0
    for (let i = 0; i < array.length; i++){
        if(array[i] === 0){
            array.splice(i, 1)
            array.push(0)
            pushed++
            if (i < array.length - pushed) i = -1
        }
    }
    return array
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
// returns[false,1,1,2,1,3,"a",0,0]

console.log(moveZeros([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]))

console.log(moveZeros([0,0,0,"a", 0,"b",0, 0,"c","d",1,1,3,1,9,9]))
//////////////
// A much more elegant solution
// var moveZeros = function (arr) {
//     var filtedList = arr.filter(function (num){return num !== 0;});
//     var zeroList = arr.filter(function (num){return num === 0;});
//     return filtedList.concat(zeroList);
//   }
//////////////
// Even more shorthanded
// var moveZeros = function (arr) {
//     return [
//       ...(arr.filter(n => n !== 0)),
//       ...(arr.filter(n => n === 0))
//     ];
//   }
//////////////
// Shortest hand
// let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));
//////////////
// Same concept as mine, except they're going backwards through the loop 
// var moveZeros = function (arr) {
//     for(var i = arr.length - 1; i >= 0; i--) {
//       if(arr[i] === 0) {
//         arr.splice(i, 1);
//         arr.push(0);
//       }
//     }
//     return arr;
//   }