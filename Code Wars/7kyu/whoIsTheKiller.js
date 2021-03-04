// Who is the killer? - 7 kyu

// Some people have been killed!
// You have managed to narrow the suspects down to just a few. Luckily, you know every person who those suspects have seen on the day of the murders.

// Task.
// Given a dictionary with all the names of the suspects and everyone that they have seen on that day which may look like this:

// {'James': ['Jacob', 'Bill', 'Lucas'],
//  'Johnny': ['David', 'Kyle', 'Lucas'],
//  'Peter': ['Lucy', 'Kyle']}
// and also a list of the names of the dead people:

// ['Lucas', 'Bill']
// return the name of the one killer, in our case 'James' because he is the only person that saw both 'Lucas' and 'Bill'

function killer(suspectInfo, dead) {
    let deadSeen = []
    for (const [key, value] of Object.entries(suspectInfo)){
      deadSeen = []
      for (name of value){
        if (dead.includes(name)) deadSeen.push(name)
      }
      if (deadSeen.length === dead.length) return key
    }
  }

console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']}, ['Lucas', 'Bill']))
// 'James'
console.log(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']))
// 'Megan'


////
// // Clever solution using Object.keys, .find and .every
// function killer(suspectInfo, dead) {
//   return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
//  }

// //  Solution using filter
// function killer(obj, dead) {
//   for (let i in obj) 
//     if (obj[i].filter(i => dead.includes(i)).length == dead.length) return i
// }