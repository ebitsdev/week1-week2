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
    // console.log(`Student number ${i+1}: ${listOfStudents[i]}`);
}
let counter = 0
let correctAnswer
// while(!listOfStudents){
//     console.log(counter++)
// }
// let count = 0
// while(count < 10){
//     console.log(`Counting from 0: ${count++}`)
// }
// let n = 0
// while(n < 3){
//    console.log(n++)
// }
// console.log(n)
var i = 0
let msg = ''
let result = ""

do {
    msg +=i + 5  +  (i * 2)
    i++
    console.log(`The message: i is ${i} ${msg}`)
} while( i < 4)

while( i < 10){
    msg += i + ' x 5 = ' + (i * 5)
    i++
}
console.log(`The message: ${msg}`)
do {
    i = i + 1
    result = result + i

} while( i < 5)
console.log(result)
/*

// Function to test simple calculation
function calc(n1, n2){
    return console.log(n1 * n2)
}
calc(4, 8) // 32
//To demonstrate how trying to multiply string by a number returns NaN
calc('test', 9) // Output: NaN (not a number)