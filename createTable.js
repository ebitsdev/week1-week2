

const students = [
    ['First Name','Janae', 'Wenesh', 'JD', 'Paul'],
    ['Last Name','Leonard', 'Wolde', 'Hamilton', 'Vaughan'],
]
// Better way? https://jsfiddle.net/tx8m9se0/
function createTable(arr){
    // 1 - Create the table
    let tbl = document.createElement('table')
    // 2 - optional: create the table header
    let tblhdr = document.createElement ('thead')

    for (let i = 0; i < arr.length; i++){
        // 3 - Create the table row
        let tr = document.createElement('tr')
        for (let j = 0; j < arr[i].length; j++){
            // 4 - optional We create a table header cell
            let th = document.createElement('th')
            // 5 - Create table cells
            let td = document.createElement('td')
            // 6 - set the table content
            td.textContent = arr[i][j]
            // 7 - append the table cells to the table row
            tr.appendChild(td)
        }
        // 8 - We append the table rows to the table
        tbl.appendChild(tr)
    }
    // We 9 - select the html body element so we can append our table to it
    document.querySelector('body').appendChild(tbl)
}
// 10 - We call the function and pass it the students array created above

createTable(students)
/**
 * <html>
 * <head>
 * </head>
 * <body>
 * </body>
 * </html>
 */
function makeTable(arr){
    let tbl = document.createElement('table')
    // Create the two table variables for later use
    let tblRow, tblCell
    for (const row in arr[0]) {
        //Create row
        tblRow = tbl.insertRow(row)
        // Column 1
        tblCell = tblRow.insertCell(0)
        tblCell.innerHTML = arr[0][row]
       // Column 2
       tblCell = tblRow.insertCell(1)
       tblCell.innerHTML = arr[1][row]
    }
    document.body.appendChild(tbl)
}
makeTable(students)

//Use builtin Vanilla JavaScript table methods to create the table
function buildTable(arr){
    let tbl = document.createElement('table')
    let tblRow, tblCel
    for (const row in arr[0]){
        tbl.insertRow(row)
        tblCel = tblRow.insertCell(0)
        tblCel.innerHTML = arr[0][row]
    }
    document.body.appendChild(tbl)
}
buildTable(students)