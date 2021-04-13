// // All Star Code Challenge #32 - 5 kyu

// This Kata is intended as a small challenge for my students

// All Star Code Challenge #32

// You're a game developer at "Silly Games Inc." and are working on "Gunfight at the O.K. Corral".
// In this game, the player is pitted against 25 opponents one after the other in a 6 round shoot out (6 = number of bullets in each character's pistol).

// The game is nearly complete, but the dev team needs YOU to create the Player object constructor.

// Create the Player object constructor according to the following specs:

// By default, a Player object should start off with the "stat" property set to a JSON of the following stats:
// spd: 30
// hit: 30
// acc: 30
// crit: 30
// dmg: 30

// It should have a method called .upgrade() that increases one of the stat properties by 1. The specific logic behind which stat gets increased is entirely up to you, but it should NOT increase any stat beyond 100, the max. In theory, if every stat except "hit" is at 100, calling .upgrade() should only increase "hit" by 1. In addition, if .upgrade() is called while every stat is above 99, an error should be thrown.

// By default, it should have an "hp" property set to a JSON of the following body parts:
// head: 25
// chest: 200
// armR: 50
// armL: 50
// legR: 75
// legL: 75

// It should have a method called .totalHP() which totals the values in the "hp" property object (at full health, the total should be 475).

// It should have a method called .heal() which restores each value in the "hp" property to its default value, except for any key with a value of 0, which should remain 0 (a missing body part).

// It should have a method called .takeDmg() which accepts 2 arguments, a string and an integer. The string corresponds to a body part (one of the keys in the "hp" property) and the integer is the amount to be subtracted from that key's value. If the value would fall below 0, the value should be set to 0.

// It should have a method called .lifeCheck() which returns a boolean. If the head, chest, or both arms in the "hp" object are 0, it should return true, otherwise false.

// For those interested about the game...
// At the start of each battle with an opponent, the player heals to full, except for any missing limbs. Each character's health is 500 hitpoints, or HP, and is divided into 6 parts:

// the head (50 HP)
// the chest (200 HP)
// right arm (50 HP)
// left arm (50 HP)
// right leg (75 HP)
// and left leg (75 HP)
// At the start of each battle, the player will also gain 14 stat points, which are automatically allocated (the .upgrade() method will be called 14 times before each battle).

// Each character has the following stats:
// -Speed : First attack check - determines which character shoots first. If both characters have equal speed, the enemy goes first.

// -Accurary : Second attack check - determines whether the character can hit the opponent.

// -Critical Chance : Third attack check - determines whether the attack hits a critical area for 50% more damage.

// -Hit : Fourth attack check - determines which body part the character has enough skill to hit (chest: 0-40%, a leg: 40-70%, an arm: 70-90%, head: 90-100%). If the legs are missing (0 HP), the chest will be hit instead.

// -Damage : determines how much damage is done. This comes as a range, allowing for some variance in damage (for example, between 25-30 damage).

// A battle consists of 6 rounds (6 bullets in each gun), alternating between the player and opponent. If a character loses all HP in the head, the chest, or both arms, the battle is over (since that character is either dead or cannot shoot). If both character have survived by the end of 6 rounds, the character with the most health wins the battle. If both characters have the same health, the enemy wins.

// Bonus:
// Each opponent gets harder (increasing stats).
// The 25th opponent will have near perfect stats. How will you defeat him? (perhaps modifying your upgrade() logic? or try cheating?)

class Player{
    constructor(){
        this.stat = {
            spd: 30,
            hit: 30,
            acc: 30,
            crit: 30,
            dmg: 30
        }
        this.hp = {
            head: 25,
            chest: 200,
            armR: 50,
            armL: 50,
            legR: 75,
            legL: 75
        }
    }
    upgrade(){
        let stats = []
        for (const [key, value] of Object.entries(this.stat)){
            if (value < 100) stats.push(key)
        }
        if (stats.length === 0) throw 'Every stat is maxed'
        else this.stat[stats[Math.floor(Math.random() * stats.length)]]++
    }
    totalHP(){
        let total = 0
        for (const [key, value] of Object.entries(this.hp)){
            total += value
        }
        return total
    }
    heal(){
        if(this.hp.head !== 0) this.hp.head = 25
        if(this.hp.chest !== 0) this.hp.chest = 200
        if(this.hp.armR !== 0) this.hp.armR = 50
        if(this.hp.armL !== 0) this.hp.armL = 50
        if(this.hp.legR !== 0) this.hp.legR = 75
        if(this.hp.legL !== 0) this.hp.legL = 75
    }
    takeDmg(bodyPart, dmgTaken){
        this.hp[bodyPart] -= dmgTaken
        if (this.hp[bodyPart] < 0) this.hp[bodyPart] = 0
    }
    lifeCheck(){
        return (this.hp.head === 0 || this.hp.chest === 0 || (this.hp.armL === 0 && this.hp.armR === 0))
    }
}

let player = new Player()

console.table(player)
for (let i = 0; i < 349; i++){
    player.upgrade()
}
console.table(player)
console.log(player.upgrade())
console.log(player.totalHP())
console.log(player.heal())
console.log(player.lifeCheck())
console.log(player.takeDmg('head', 100))
console.log(player.takeDmg('chest', 100))
console.log(player.takeDmg('armR', 10))
console.table(player)
console.log(player.lifeCheck())
console.table(Object.keys(player.stat))