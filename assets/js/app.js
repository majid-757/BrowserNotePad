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

    // get data from localstorage on loaded
    document.addEventListener('DOMContentLoaded', localStorageOnLoad)
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

    addNoteToLocalStorage(note)

}



function removeNote(e) {
    if(e.target.classList.contains('remove-note')) {
        e.target.parentElement.remove()
    }

    // also remove the note from the local storag
    removeNoteLocalStorage(e.target.parentElement.textContent)

}


// adding note to the local storage
function addNoteToLocalStorage(note) {

    // get the from localstorage
    const notes = getNotesFromLocalStorage()

    // add new note to the notes array  
    notes.push(note)

    // add new notes array to the localstorage
    localStorage.setItem('notes', JSON.stringify(notes))


}





// get notes from localstorage
function getNotesFromLocalStorage() {
    let notes;

    // get previous notes from localstorage
    let getFormLS = localStorage.getItem('notes');

    // if not exist create empty array 
    if(getFormLS === null) {
        notes = []
    } else {
        // if exist convert to the array 
        notes = JSON.parse(getFormLS)
    } 
    
    return notes
}


//get data from local storage on load
function localStorageOnLoad() {
    const  notes = getNotesFromLocalStorage()

    // print each item of array
    notes.forEach(function(note) {
        const li = document.createElement('li')
        li.appendChild(document.createTextNode(note))

        const removeBtn = document.createElement('a')
        removeBtn.textContent = 'X'
        removeBtn.classList = 'remove-note'

        li.appendChild(removeBtn)
        noteList.appendChild(li)
    });

}


// also remove note from localstorage
function removeNoteLocalStorage(noteContent) {

    // delete x from the content
    const  note = noteContent.substring(0, noteContent.length - 1) 

    console.log(note)
}



