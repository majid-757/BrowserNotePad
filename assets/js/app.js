// // variables

// const noteList = document.querySelector('#note-list')



// // eventListeners
// eventListeners()
// // from submissions
// function eventListeners() {
//     document.querySelector('#form').addEventListener('submit', newNote)
// }



// // functions
// // Adding new note to the list
// function newNote(e) {
//     e.preventDefault()
//     const note = document.querySelector('#note').value // گرفتن مقدار درونیه لیبل که کاربر وارد کرده
    
//     // create remove element
//     const removeBtn = document.createElement('a')
//     removeBtn.textContent = 'X'
//     removeBtn.classList = 'remove-note'


//     // create li tag 
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(note))

//     // adding remove btn to the li 
//     li.appendChild(removeBtn)

//     // adding li to the note-list
//     noteList.appendChild(li)

// }

// const noteList = document.querySelector('#note-list')


// eventListeners()
// function eventListeners(e) {
//     document.querySelector('#form').addEventListener('submit', newNote)
// }


// function newNote(e) {
//     e.preventDefault()
//     const note = document.querySelector('#note').value

//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(note))


//     const removeBtn = document.createElement('a')
//     removeBtn.textContent = 'X'
//     removeBtn.classList = 'remove-note'


//     li.appendChild(removeBtn)

//     noteList.appendChild(li)

// }




const noteList = document.querySelector('#note-list')

eventLisnener()
function eventLisnener(e) {
    document.querySelector('#form').addEventListener('submit', newNote)

    // remove note
    document.querySelector('#note-list').addEventListener('click', removeNote)
}


function newNote(e) {
    e.preventDefault()

    const note = document.querySelector('#note').value

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(note))

    const removeBtn = document.createElement('a')
    removeBtn.textContent = 'X'
    removeBtn.classList = 'remove-note'

    li.appendChild(removeBtn)
    noteList.appendChild(li)


}


function removeNote(e) {
    if(e.target.classList.contains('remove-note')){
        e.target.parentElement.remove()
    } 
}



