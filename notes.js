const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

// to add a new note
var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  };
};

// to list all notes
var getAll = () => {
  return fetchNotes();
};

// to list specific note
var getNote = (title) => {
  var notes = fetchNotes();
  var myNoteArray = notes.filter((note) => note.title === title);
  return myNoteArray[0];
};

// to remove all notes
var removeNote = (title) => {
  var notes = fetchNotes();
  var keepingNotesArray = notes.filter((note) => note.title !== title);
  saveNotes(keepingNotesArray);

  return notes.length !== keepingNotesArray.length;
};

var logNote = (note) => {
  // Break on this line and use repl to output note
  debugger;
  console.log('----');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
