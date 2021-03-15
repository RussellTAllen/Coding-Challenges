// Tails of the High Seas - 7 kyu

// Task
// Your function will receive 2 objects in the following format (this is an example, the actual key names may be slightly different):

// primates = {
//   hit_points             -  int
//   orangutans             -  int
//   chimpanzees            -  int
//   gorillas               -  int
//   jane_reporting_4_duty  -  bool
// }

// humans = {
//   hit_points  -  int
//   crew        -  int
// }
// You should implement a function which determines whether the primates or humans will win, according to these specifications:

// The two fighting powers are calculated by multiplying the power levels (provided in the initial solution) of each species by their headcount, summing up the results, and adding the appropriate object's hit points to that value
// A third function parameter, terrain, determines which side has an advantage in the fight: "island" increases humans' total power by 20 points, and "sea" increases the primates' total power by 10 points ("total power" is the value calculated during the previous step)
// The monkey object contains a jane_reporting_4_duty key - if it's value is true, the primates' total power should be multiplied by half of however many chimpanzees are present (this is applied after the terrain bonus)
// The total power of each side determines the expected result: if the primates' power is greater than or equal to the humans' power, return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"; otherwise, return "Everything's good, I'll see you in the office on Monday."

const multipliers = {
    gorillas: 9,
    orangutans: 5,
    chimpanzees: 3,
    crew: 1
  };
  
function biteMeMonkey(primates, humans, terrain) {
    let crewPower = humans.crew + humans.hitPoints
    let primatePower = (primates.orangutans * 5) + (primates.chimpanzees * 3) + (primates.gorillas * 9) + primates.hitPoints

    console.log(crewPower, primatePower)
    
    if (terrain === "sea") primatePower += 10
    else crewPower += 20

    console.log(crewPower, primatePower)
    
    if (primates.janeReporting4Duty) primatePower *= (primates.chimpanzees/2)
    
    console.log(crewPower, primatePower)

    if (primatePower >= crewPower) return "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
    else return "Everything's good, I'll see you in the office on Monday."
}

  console.log(biteMeMonkey({hitPoints: 20, orangutans: 5, chimpanzees: 3, gorillas: 4, janeReporting4Duty: true}, {hitPoints: 70, crew: 35}, "island"))
  // => "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
  console.log(biteMeMonkey({hitPoints: 10, orangutans: 5, chimpanzees: 4, gorillas: 2, janeReporting4Duty: true}, {hitPoints: 50, crew: 70}, "island"))
  // => "Everything's good, I'll see you in the office on Monday."
  console.log(biteMeMonkey({hitPoints: 10, orangutans: 5, chimpanzees: 8, gorillas: 9, janeReporting4Duty: false}, {hitPoints: 50, crew: 70}, "sea"))
  // => "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
  console.log(biteMeMonkey({hitPoints: 10, orangutans: 5, chimpanzees: 4, gorillas: 7, janeReporting4Duty: true}, {hitPoints: 50, crew: 70}, "island"))
  // => "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
  console.log(biteMeMonkey({hitPoints: 10, orangutans: 0, chimpanzees: 0, gorillas: 0, janeReporting4Duty: false}, {hitPoints: 20, crew: 0}, "sea"))
  // => "Abandon ship! Save your own skin and blame it on the 'modestly-sized' yacht!"
