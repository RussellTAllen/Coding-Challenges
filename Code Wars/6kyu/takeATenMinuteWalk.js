// Take a Ten Minute Walk - 6 kyu

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    if (walk.length !== 10) return false
    let path = []
    for(let i = 0; i < walk.length; i++){
        console.log(path)
        if (path.includes('n') && walk[i] === 's'){
            path.splice(path.indexOf('n'), 1)
        }else if (path.includes('s') && walk[i] === 'n'){
            path.splice(path.indexOf('s'), 1)
        }else if (path.includes('w') && walk[i] === 'e'){
            path.splice(path.indexOf('w'), 1)
        }else if (path.includes('e') && walk[i] === 'w'){
            path.splice(path.indexOf('e'), 1)
        }else path.push(walk[i])
    }
    return path.length === 0
  }

  console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
  // =>, 'should return false'
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
  // =>, 'should return true'
  console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
  // =>, 'should return false'
  console.log(isValidWalk(['w']))
  // =>, 'should return false'

  //////
  // Elegant solution
//   function isValidWalk(walk) {
//     const north = walk.filter(item => { return item === "n" }).length;
//     const south = walk.filter(item => { return item === "s" }).length;
//     const east = walk.filter(item => { return item === "e" }).length;
//     const west = walk.filter(item => { return item === "w" }).length;
    
//     return walk.length === 10 && north === south && east === west;
//   }
  