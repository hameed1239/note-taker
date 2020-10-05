const fs = require('fs');
const path = require('path');

function createNote(body, notesArray) {
    const note = body;//read request body and assign to note
    notesArray.push(note)//push new note into notes array
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesArray, null, 2));
    return body;// return the body
}

function validateNote(note) {
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
        return false;
    }
    return true;
}


function deleteByID(id, notesArray) {
    const result = (notesArray.filter((note) => note.id !== id));
    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(result, null, 2));
    return result;
}


module.exports = { createNote, validateNote, deleteByID };

