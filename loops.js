const listOfStudents = [
'Abebe',
'Ayele',
'shobeno',
'Alamneh',
'Tadesse',
'Chereta',
'Leonard',
'Macairan',
'Vaughan',
'Abraha',
'Mamo',
'Tefera',
'Lasic',
'Kassa',
'Wolde',
'Kassa',
'Peñaloza',
]
for(let i = 0; i < listOfStudents.length; i++){
    console.log(`Student number ${i+1}: ${listOfStudents[i]}`);
}
let counter = 0
let correctAnswer
// while(!listOfStudents){
//     console.log(counter++)
// }
let count = 0
while(count < 10){
    console.log(`Counting from 0: ${count++}`)
}
let n = 0
while(n < 3){
   console.log(n++)
}
console.log(n)
var i = 1
let msg = ''
do {
    msg += i + ' x 5 = ' +  (i * 5)
    i++
} while( i < 1)
// console.log(`The message: ${msg}`)
while( i < 10){
    msg += i + ' x 5 = ' + (i * 5)
    i++
}
console.log(`The message: ${msg}`)