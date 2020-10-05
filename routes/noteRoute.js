const { createNote, validateNote, deleteByID } = require('../lib/notes');
const notes = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const cuid = require('cuid')

//get from /api/notes route
router.get('/api/notes', (req, res) => {
    const result = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")));
    res.send(result);
});

//delete from /api/notes route using the supplied id
router.delete('/api/notes/:id', (req, res) => {
    res.json(deleteByID(req.params.id, notes));
})
//post to /api/notes route
router.post('/api/notes', (req, res) => {
    req.body.id = cuid();
        // notes.length.toString();
    const note = req.body;
    if (validateNote(note)) {
        createNote(note, notes);
        res.json(notes);
    }
    else {
        res.status(400).json("Bad Request");
    }
})

module.exports = router;