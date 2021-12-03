// https://www.codewars.com/kata/5631ac5139795b281d00007d

var WordDictionary = function () {

};

WordDictionary.prototype.addWord = function (word) {
    if (!this.dictionary)
        this.dictionary = []

    this.dictionary.push(word)
};

WordDictionary.prototype.search = function (word) {
    let answer = false

    this.dictionary.forEach(dWord => {
        for (let i = 0; i < word.length; i++){
            if (word[i] === "." && i === dWord.length - 1 && i === word.length - 1){
                answer = true
                break
            }
            if (word[i] === ".")
                continue
            else if (word[i] !== dWord[i])
                break
            else if (i === dWord.length - 1 && i === word.length - 1) {
                answer = true
            }
        }
    })

    return answer
};


var wd = new WordDictionary();
// wd.addWord('a');
// wd.addWord('at');
// wd.addWord('ate');
// wd.addWord('ear');
// console.log(wd.search('a'), true);
// console.log(wd.search('a.'), true);
// console.log(wd.search('a.e'), true);
// console.log(wd.search('b'), false);
// console.log(wd.search('e.'), false);
// console.log(wd.search('ea.'), true);
// console.log(wd.search('ea..'), false);
wd.addWord('co');
wd.addWord('cod');
wd.addWord('code');
wd.addWord('codewars');
console.log(wd.search('........'), true);
console.log(wd.search('c.o'), false);
console.log(wd.search('cod.'), true);
console.log(wd.search('c.o'), false);
console.log(wd.search('co..w..s'), true);
console.log(wd.search('co..w..'), false);