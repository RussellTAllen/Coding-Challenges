// Determine the date by the day number - 6 kyu

// What date corresponds to the nth day of the year?
// The answer depends on whether the year is a leap year or not.

// Write a function that will help you determine the date if you know the number of the day in the year, as well as whether the year is a leap year or not.
// The function accepts the day number and a boolean value isLeap as arguments, and returns the corresponding date of the year as a string "Month, day".
// Only valid combinations of a day number and isLeap will be tested.


function getDay(day, isLeap){
    if (day <= 31) return `January, ${day}`
    if (day <= 59) return `February, ${day - 31}`
    if (day === 60 && isLeap) return "February, 29"
    if (isLeap) day--
    if (day <= 90 ) return `March, ${day - 59}`
    if (day <= 120) return `April, ${day - 90}`
    if (day <= 151) return `May, ${day - 120}`
    if (day <= 181) return `June, ${day - 151}`
    if (day <= 212) return `July, ${day - 181}`
    if (day <= 243) return `August, ${day - 212}`
    if (day <= 273) return `September, ${day - 243}`
    if (day <= 304) return `October, ${day - 273}`
    if (day <= 334) return `November, ${day - 304}`
    if (day <= 365) return `December, ${day - 334}`
}

console.log(getDay(41, false) )
//  =>  "February, 10"  //  41st day of non-leap year is February, 10
console.log(getDay(60, false) )
//  =>  "March, 1"      //  60th day of non-leap year is March, 1
console.log(getDay(60, true)  )
//  =>  "February, 29"  //  60th day of leap year is February, 29
console.log(getDay(91, true))
console.log(getDay(91, false))

console.log(getDay(365, false))
//  =>  "December, 31"  //  365th day of non-leap year is December, 31
console.log(getDay(366, true) )
//  =>  "December, 31"  //  366th day of leap year is December, 31


// Cool OOP solution

// function getDay(day, isLeap) {
//     const calendar = {
//       "January": 31,
//       "February": 28+(isLeap?1:0),
//       "March": 31,
//       "April": 30,
//       "May": 31,
//       "June": 30,
//       "July": 31,
//       "August": 31,
//       "September": 30,
//       "October": 31,
//       "November": 30,
//       "December": 31
//     };
//     for (const month of Object.keys(calendar)) {
//       if (day <= calendar[month]) return `${month}, ${day}`;
//       day -= calendar[month];
//     }
//   }