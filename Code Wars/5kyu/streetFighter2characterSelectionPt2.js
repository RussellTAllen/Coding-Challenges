// Street Fighter 2 - Character Selection - Part 2 - 5 kyu

// This is the rightful continuation to this easier Kata here and some rules are the same with few substantial alterations.

// This time we have to deal with a situation like Super Street Fighter 2 Selection Screen:

// alt text

// As you may see, we now have 16 characters on 3 rows. You might think: let's make an array of 3 arrays! But that's not enough.

// Empty space
// The first character of the first row (Ryu) is not aligned with the first of the second row (Balrog) but with the second (Ken) and the same goes with the other side; therefore we need to introduce something new, like an offset: the Empty Space.

// The empty space, represented as empty string "", will allow us to keep the grid aligned and rectangular, with spaces that won't be selectable. In this case we need 2 empty spaces (3 rows x 6 columns = 18 slots, 18 slots - 16 characters = 2 empty spaces). Like this:

// |        | Ryu    | E.Honda  | Blanka  | Guile   |         |
// | Balrog | Ken    | Chun Li  | Zangief | Dhalsim | Sagat   |
// | Vega   | T.Hawk | Fei Long | Deejay  | Cammy   | M.Bison |
// The moves of the selection cursor are the same as before: rotate horizontally but stop vertically. When you find empty spaces (1 or more) you need to skip them if you approach them horizontally and get to the next selectable slot with the next fighter on the left or right; and if you approach them vertically you need to just stop and stay where you are.

// Example: if you are on Ryu and move left, you must get to Guile; if you are on Balrog and move up, you must stay on Balrog.

// Notice: I might put empty spaces right in the middle and the rectangular grids can be any size, not only 3x6, deal with this too.

// What's new
// So, let's resume what are the new issues in this harder version of the Kata:

// The initial position might be any non-empty slot in the grid (given as input).
// The characters grid (also given as input) might have any rectangular layout, not only 3 rows.
// The grid might contain empty spaces, both on the borders or right in the middle.
// Input
// Fighters grid;
// Initial position;
// List of moves.
// The third input parameter is still the list of moves (all valid ones: left, right, up or down).

// Output
// The output is the same as before: the list of characters that have been hovered by the selection cursor after each move, successful or not.

// Hopefully test cases will complete my explanation.


function superStreetFighterSelection(fighters, position, moves){
    let selection = []
    let y = position[0]
    let x = position[1]
    
    moves.forEach(move => {
        if (move === "up"){
            y >= 1 ? y-- : y = 0
            if (fighters[y][x] !== ''){
                selection.push(fighters[y][x])
            }else{
                y++
                selection.push(fighters[y][x])
            }
        }else if (move === "down"){            
            y <= fighters.length - 2 ? y++ : y = fighters.length - 1
            if (fighters[y][x] !== ''){
                selection.push(fighters[y][x])
            }else{
                y--
                selection.push(fighters[y][x])
            }            
        }else if (move === "left"){
            x > 0 ? x-- : x = fighters[y].length - 1
            while(fighters[y][x] === ''){
                x > 0 ? x-- : x = fighters[y].length - 1
            }
            selection.push(fighters[y][x])
        }else if (move === "right"){
            x >= fighters[y].length - 1 ? x = 0 : x++
            while(fighters[y][x] === '') {
                x >= fighters[y].length - 1 ? x = 0 : x++
            }
            selection.push(fighters[y][x])
        }
    });        
    return selection
}

fighters = [
    [       "",    "Ryu",  "E.Honda",  "Blanka",   "Guile", ""       ],
    [ "Balrog",    "Ken",  "Chun Li", "Zangief", "Dhalsim", "Sagat"  ],
    [   "Vega", "T.Hawk", "Fei Long",  "Deejay",   "Cammy", "M.Bison"]
]

console.log(superStreetFighterSelection(fighters, [0,0], []))
// => []
console.log(superStreetFighterSelection(fighters, [1,0], ["up"]))
// => ['Balrog']
console.log(superStreetFighterSelection(fighters, [1,0], ["up","up","up","up"]))
// => ['Balrog']*4
console.log(superStreetFighterSelection(fighters, [1,0], ["down","down","down","down"]))
// => ['Vega']*4
console.log(superStreetFighterSelection(fighters, [1,5], ["up","up","up","up"]))
// => ['Sagat']*4
console.log(superStreetFighterSelection(fighters, [1,5], ["down","down","down","down"]))
// => ['M.Bison']*4
console.log(superStreetFighterSelection(fighters, [1,3], ["left","left","left","left","left","left","left","left"]))
// => ['Chun Li', 'Ken', 'Balrog', 'Sagat', 'Dhalsim', 'Zangief', 'Chun Li', 'Ken']
console.log(superStreetFighterSelection(fighters, [0,2], ["right","right","right","right","right","right","right","right"]))
// => ['Blanka', 'Guile', 'Ryu', 'E.Honda', 'Blanka', 'Guile', 'Ryu', 'E.Honda']

let fighters1 =[ 
    [ '', 'Ryu', 'E.Honda', 'Blanka', 'Guile', '' ],
    [ 'Balrog', 'Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat' ],
    [ 'Vega', 'T.Hawk', 'Fei Long', 'Deejay', 'Cammy', 'M.Bison' ] 
] 

console.log(superStreetFighterSelection(fighters1, [ 0, 2 ], [ 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left' ]))
// => [\'Ryu\', \'Guile\', \'Blanka\', \'E.Honda\', \'Ryu\', \'Guile\', \'Blanka\', \'E.Honda\']
