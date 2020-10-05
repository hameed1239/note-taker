const fs = require('fs');
const path = require('path');

//push the new note into notesArray and write the new array into db file
function createNote(body) {
    const notesArray = getNotes();
    const note = body;//read request body and assign to note
    notesArray.push(note)//push new note into notes array
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray, null, 2));
    return body;// return the body
}

// validate the entry to ensure that a string value is sent in note
function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}

//filter the content of notesArray to include other items but the item that it's id match the given id. write the new Array to db file 
function deleteByID(id) {
    const notesArray = getNotes();
    const result = (notesArray.filter((note) => note.id !== id));
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(result, null, 2));
    return result;
}

function getNotes() {
    const result = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
    return result;
}

module.exports = { createNote, validateNote, deleteByID, getNotes };

