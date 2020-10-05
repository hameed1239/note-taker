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



module.exports = router;