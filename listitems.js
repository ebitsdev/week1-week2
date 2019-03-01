/**
 * Use the student list to create an ordered list <ol></ol>
 */
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
    'Student two',
    'Student three',
    ]
    let fruits = [
        'Apple',
        'Orange',
        'Kiwi ',
        'Grape',
    ]
    // <ol></ol>
    let olEl = document.createElement('ol')

    const divEl = document.getElementById('main-content')

    for (let i = 0; i < listOfStudents.length; i++){
        //Create list item <li></li>
        let liEl = document.createElement('li')
        // <li></li>
        liEl.textContent = `${listOfStudents[i]}`
        console.log(`${listOfStudents[i]}`)
        // liEl.textContent = i + ' ' + listOfStudents[i]
        olEl.appendChild(liEl)
    }
    divEl.appendChild(olEl)