const { createNote, validateNote, deleteByID } = require('../lib/notes');
const notes = require('../db/db.json');
const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/api/notes', (req, res) => {
    const result = JSON.parse(fs.readFileSync(path.join(__dirname, "../db/db.json")))
    // console.log("I'm in the route");
    res.send(result);
});

router.delete('/api/notes/:id', (req, res) => {
    console.log("I'm in params")

    res.json(deleteByID(req.params.id, notes));
})

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
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