// Vasya-Clerk - 6 kyu

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

// Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

// Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.

// Examples:
// tickets([25, 25, 50]) // => YES 
// tickets([25, 100]) // => NO. Vasya will not have enough money to give change to 100 dollars
// tickets([25, 25, 50, 50, 100]) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)

function tickets(peopleInLine){
    let change = {25: 0, 50: 0, 100: 0}
    for (let i = 0; i < peopleInLine.length; i++){
        if (peopleInLine[i] == 25) change[25]++
        if (peopleInLine[i] == 50 && change[25] >= 1){
         change[50]++
         change[25]--
        }else if (peopleInLine[i] == 50) return "NO"
            
        if (peopleInLine[i] == 100 && (change[25] >= 1 && change[50] >= 1)){
            change[100]++
            change[25]--
            change[50]--

        }else if (peopleInLine[i] == 100 && change[25] >= 3){
            change[100]++
            change[25] -= 3
        }else if (peopleInLine[i] == 100){
            return "NO"
        }        
    }
    return "YES"
}


  console.log(tickets([25, 25, 50])) 
  // => YES 
  console.log(tickets([25, 100])) 
  // => NO. Vasya will not have enough money to give change to 100 dollars
  console.log(tickets([25, 25, 50, 50, 100])) 
  // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)
  console.log(tickets([50, 25, 50]))
  // => NO.
  console.log(tickets([25, 25, 25, 25, 25,50]))
  // => YES
  console.log(tickets([25,25,25,100,25,25,25,100,25,50,25,100,25,50,25,100]))
  // expected "YES"
  console.log(tickets([25,25,50,100,25,50,25,100,25,25,25,100,25,25,50,100,25,25,50,100,50,50 ]))
  // Expected: 'NO'


// Concise solution
// const tickets = peopleInLine => {
//     let [$25, $50] = [0, 0];
//     for (let el of peopleInLine) {
//       el === 25 ? $25++ : el === 50 ? ($50++, $25--) : ($50 ? $50-- : $25 -= 2, $25--);
//       if ($25 < 0) return `NO`;
//     }
//     return `YES`;
//   };


  // Solution with recursion
//   function tickets(peopleInLine){
//     const billsOnHand = {
//       100: 0,
//       50: 0,
//       25: 0
//     };
      
//     function makeChange(paid, changeDue) {
//       if (paid) {
//         billsOnHand[paid] += 1;
//         return makeChange(0, paid - 25);
//       }
      
//       if (changeDue === 0) {
//         return true;
//       }
      
//       if (changeDue > 25 && billsOnHand[50]) {
//         billsOnHand[50] -= 1;
//         return makeChange(0, changeDue - 50);
//       }
      
//       if (billsOnHand[25]) {
//         billsOnHand[25] -= 1;
//         return makeChange(0, changeDue - 25);
//       }
      
//       return false;
//     }
    
//     return peopleInLine.every(makeChange) ? "YES" : "NO";
//   }