

const students = [
    ['First Name','Janae', 'Wenesh', 'JD', 'Paul'],
    ['Last Name','Leonard', 'Wolde', 'Hamilton', 'Vaughan'],
]

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