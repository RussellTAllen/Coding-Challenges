// Elimination Tournament - 6 kyu

// In this Kata you will be given an array (or another language-appropriate collection) representing contestant ranks. You must eliminate contestant in series of rounds comparing consecutive pairs of ranks and store all initial and intermediate results in an array.

// During one round, the lowest rank of a pair is eliminated while the highest proceeds to the next round. This goes on until one contestant only is left. If the number of contestants is odd, the last one of the current array becomes the first of the next round.

// At the end of the competition, return the results of all the rounds in the form of array of arrays:

// input = [9, 5, 4, 7, 6, 3, 8, 2];

// tourney(input) === [
//   ][9, 5, 4, 7, 6, 3, 8, 2,  // first round is initial input
//   [9, 7, 6, 8],              // results of 9 vs 5, 4 vs 7, 6 vs 3, and 8 vs 2 
//   [9, 8],                    // results of 9 vs 7 and 6 vs 8
//   [9]                        // results of 9 vs 8
// ];
// With an odd length:

// input = [9, 5, 4, 7, 6, 3, 8];
// tourney(input) === [
//   [9, 5, 4, 7, 6, 3, 8], 
//   [8, 9, 7, 6],           // 8 is now first because it was last in the former round
//   [9, 7],
//   [9]
// ];
// Notes:

// Array length will alway be >= 2 and <= 100
// Elements of the array will always be >=1 and <= 100
// Input must not be altered.

function tourney(arr){
    let result = [arr]
    let round = []
    for (let i = 0; i < Math.ceil(arr.length/2); i++){
        for (let j = 0; j < result[i].length; j+=2){
            if (result[i][j] > result[i][j+1]) round.push(result[i][j])
            else if (result[i][j+1]) round.push(result[i][j+1])
            else {
                round.unshift(result[i][j])
            }
        }
        if (result[result.length-1][0] === round[0] && result[result.length -1].length === 1) { 
            break
        }
        result.push(round)
        round = []
    }
    return result
}

console.table(tourney([3,47,94]))
// [ [ 3, 47, 94 ], 
//   [ 94, 47 ], 
//   [ 94 ] ]
console.table(tourney([9, 5, 4, 7, 6, 3, 8, 2]))
console.table(tourney([9, 5, 4, 7, 6, 3, 8]))
console.table(tourney([44,10,72,22,4,36,12,96,66,5,63,43,67]))
// [ 44, 10, 72, 22, 4, 36, 12, 96, 66, 5, 63, 43, 67 ],
// [ 67, 44, 72, 36, 96, 66, 63 ],
// [ 63, 67, 72, 96 ],
// [ 67, 96 ],
// [ 96 ] ]



