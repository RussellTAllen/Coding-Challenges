// Coding Meetup #16 - Ask for missing details

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];
// write a function that

// adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value). The value of the question property should be the following string:
// Hi, could you please provide your <property name>.

// and returns only the developers with missing details:
// [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
//   question: 'Hi, could you please provide your firstName.' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
//   question: 'Hi, could you please provide your language.' }
// ]
// Notes:

// At most only one of the values will be null.
// Preserve the order of the original list.
// Return an empty array [] if there is no developer with missing details.
// The input array will always be valid and formatted as in the example above.

// REDUCE SOLUTION
function askForMissingDetails(list) {
  return list.reduce((acc, dev) => {
    let addDev
    Object.entries(dev).forEach(keyVal => {
      if (keyVal[1] === null) {
        dev.question = `Hi, could you please provide your ${keyVal[0]}.`
        addDev = dev
      }
    })

    return addDev ? acc.concat(addDev) : acc
  }, [])
}



var list1 = [
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }, 
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' }
];

var answer1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  question: 'Hi, could you please provide your language.' }
];

console.log(askForMissingDetails(list1))
//=> [
  //     { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
  //     question: 'Hi, could you please provide your firstName.' },
  //     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
  //     question: 'Hi, could you please provide your language.' }
  //   ];
  
  
  
  var list2 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];
  
  var answer2 = [];
  
  console.log(askForMissingDetails(list2))
  //=> []
  
  // FIRST SOLUTION
// function askForMissingDetails(list){
//     let result = []
//     list.forEach(dev => {
//         for (key in dev){
//             if (dev[key] === null) {
//                 dev.question = `Hi, could you please provide your ${key}.`
//                 result.push(dev)
//             }
//         }
//     })
//     return result
// }
          
          
// SECOND SOLUTION
// function askForMissingDetails(list) {
//   list.forEach(dev => Object.entries(dev).forEach(keyValuePair => {
//                if (keyValuePair[1] === null) dev.question = `Hi, could you please provide your ${keyValuePair[0]}`
//              }))
//   return list.filter(dev => Object.values(dev).includes(null))
// }