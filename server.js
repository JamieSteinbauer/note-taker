const express = require('express');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const { notes } = require('./db/db.json');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

function createNewNote(body, noteArray) {
    const note = body;
    note.id = generateNewID();
    noteArray.push(note);
    fs.writeFileSync(
        path.join(_dirname, './db/db.json'),
        JSON.stringify({ notes: noteArray }, null, 2)
    );
    return note;
};


app.listen(3001, () => {
    console.log(`API server now on port 3001`);
});