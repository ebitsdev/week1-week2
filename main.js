'use strict'
// Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
let question1 = prompt('What is my name Emmanuel?')
// let question3 = prompt('Am I a teacher?')
if (question1 === 'Emmanuel'){
    confirm('Yes')
    question1.toUpperCase()
} else {
    console.log('No')
}
let question2 = prompt('Is Hidden Figures my favorite movie?')
if (question2 === 'Hidden Figures'){
    console.log('Yes');
}
else {
    console.log('No')
}
