const { createNote, validateNote, deleteByID, getNotes } = require('../lib/notes');
// const notes = require('../db/db.json');
const router = require('express').Router();
// const fs = require('fs');
// const path = require('path');
const cuid = require('cuid')

//get from /api/notes route
router.get('/api/notes', (req, res) => {
    res.send(getNotes());
});

//delete from /api/notes route using the supplied id
router.delete('/api/notes/:id', (req, res) => {
    // const currentNotes = notes;
    res.json(deleteByID(req.params.id));
})
//post to /api/notes route
router.post('/api/notes', (req, res) => {
    req.body.id = cuid();
        // notes.length.toString();
    const note = req.body;
    if (validateNote(note)) {
        createNote(note);
        res.json(req.body);
    }
    else {
        res.status(400).json("Bad Request");
    }
})

module.exports = router;