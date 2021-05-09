// Magic the Gathering #1: Creatures

// Magic The Gathering is a collectible card game that features wizards battling against each other with spells and creature summons. The game itself can be quite complicated to learn. In this series of katas, we'll be solving some of the situations that arise during gameplay. You won't need any prior knowledge of the game to solve these contrived problems, as I will provide you with enough information.

// Creatures
// Each creature has a power and toughness. We will represent this in an array. [2, 3] means this creature has a power of 2 and a toughness of 3.

// When two creatures square off, they each deal damage equal to their power to each other at the same time. This only happens once. If a creature takes on damage greater than or equal to their toughness, they die.

// Examples:

// Creature 1 - [2, 3]
// Creature 2 - [3, 3]
// Creature 3 - [1, 4]
// Creature 4 - [4, 1]
// If creature 1 battles creature 2, creature 1 dies, while 2 survives. If creature 3 battles creature 4, they both die, as 3 deals 1 damage to 4, but creature 4 only has a toughness of 1.

// Write a function battle(player1, player2) that takes in 2 arrays of creatures. Each players' creatures battle each other in order (player1[0] battles the creature in player2[0]) and so on. If one list of creatures is longer than the other, those creatures are considered unblocked, and do not battle.

// Your function should return an object (a hash in Ruby) with the keys player1 and player2 that contain the power and toughness of the surviving creatures.

// Example:

// player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
// player2 = [[1, 2], [1, 2], [3, 3]];
// battle(player1, player2) ->
// { 'player1': [[5, 5]],
//   'player2': [[1, 2], [3, 3]] }
// player1 = [[1, 1], [2, 1], [2, 2], [5, 5]]
// player2 = [[1, 2], [1, 2], [3, 3]]
// battle(player1, player2) # { 'player1': [[5, 5]], 'player2': [[1, 2], [3, 3]] }
// player1 = [[1, 1], [2, 1], [2, 2], [5, 5]];
// player2 = [[1, 2], [1, 2], [3, 3]];
// battle(player1, player2) # { player1: [[5, 5]], player2: [[1, 2], [3, 3]] }

function battle(player1, player2) {
    let result = { player1: [], player2: []}
    for (let i = 0; i < Math.max(player1.length, player2.length); i++){
        if (player1.length > player2.length && i >= player2.length) { 
            result.player1.push(player1[i])
            continue
        }
        if (player2.length > player1.length && i >= player1.length) { 
            result.player2.push(player2[i])
            continue
        }
        if (player1[i][0] < player2[i][1]) result.player2.push(player2[i])
        if (player2[i][0] < player1[i][1]) result.player1.push(player1[i])
    }
    return result
}

let player1, player2, result;
player1 = [[1,1]]; player2 = [[1,1]];
console.log(battle(player1, player2))
// // result = { 'player1': [], 'player2': [] };
// // => result, "Expected 2 empty arrays when all creatures are killed."

player1 = [[2,2]]; player2 = [[1,1]];
console.log(battle(player1, player2))
// // result = { 'player1': [[2,2]], 'player2': [] };
// // => result, "Expected player2 to have no creatures."

player1 = [[1,1]]; player2 = [[2,2]];
console.log(battle(player1, player2))
// result = { 'player1': [], 'player2': [[2,2]] };
// => result, "Expected player1 to have no creatures."

player1 = [[1, 1], [2, 1], [2, 2], [5, 5], [6,6]];
player2 = [[1, 2], [1, 2], [3, 3]];
console.log(battle(player1, player2))
// result = { 'player1': [[5,5]], 'player2': [[1,2], [3,3]] };
// => result

// console.log(battle(player2, player1))
//   result = { 'player1': [[1,2], [3,3]], 'player2': [[5,5]] };
// => result

player1 = []; player2 = [[1,1],[2,3],[10,10]];
// console.log(battle(player1, player2))
// result = { 'player1': [], 'player2': [[1,1],[2,3],[10,10]] };
// => result, "Expected output to equal input. Player1 has no creatures."

// Solution using filter
// const battle = (player1, player2) => {
//     return {
//       player1: player1.filter((c, i) => !player2[i] || c[1] > player2[i][0]),
//       player2: player2.filter((c, i) => !player1[i] || c[1] > player1[i][0]),
//     }
//   }
