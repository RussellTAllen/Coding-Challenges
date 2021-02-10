// Holiday IV - Leg room - 6 kyu

// Bloody planes... Making me walk in past the business class 'suites' and back into cattle class.

// As we all know, leg room is the major issue. In this kata, you will assess the level of comfort an individual will experience in their flight.

// You will be given the individual's height in cms (a), and a string that represents the properties of their seat (b).

// It is expected that a person's leg length accounts for 55% (use Math.floor) of their height, and that for a person to be 'comfortable' their leg room on an aeroplane must be at least 15% more than their leg length.

// If the figure is more than 25% leg length they have 'super comfy' seats, and if it is less than 15% it is just classed as 'ouch'.

// The amount of leg room can be calculated by the number of consonants in the provided seat string 'b'. Each counts for 2cm of room.

// You should return the comfort rating as a string.

// In the case that the seat string has a 00 value within it - there is a hole in the seat in front! return 'Jackpot!', relax and put your legs through! Note this value is zero zero, not the letter O.

// Note the seat string will only contain lower case letters and possibly the magic "00" value.

function legRoom (a, b){
    if (b.includes('00')) return "Jackpot!"
    let leg = Math.floor(.55*a)
    let room = b.split('').filter(l => !l.match(/[aeiou]/)).length * 2
    return room >= .25*leg ? "super comfy" : room >= .15*leg ? 'comfortable': "ouch"
}

console.log(legRoom(192, 'aelm'))
// => 'ouch'
console.log(legRoom(166, 'cbagjkdj00jcakhc'))
// => 'Jackpot!'
console.log(legRoom(108, 'ifbjejaigghkg'))
// => 'super comfy'
console.log(legRoom(198, 'abfkibjkmfg'))
// => 'comfortable

let test = 'cat'

console.log(test.match(/[aeiou]/))