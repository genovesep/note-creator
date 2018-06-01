console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv
var command = process.argv[2];
console.log(`Command: ${command}`);
console.log('Yargs: ', argv);


if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('SUCCESS: Note created');
    notes.logNote(note);
  } else{
    console.log('--');
    console.log('ERROR: Note not created!');
    console.log('Note was a duplicate');
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    console.log('SUCCESS: Note read');
    notes.logNote(note);
  } else {
    console.log('--');
    console.log('ERROR: Note note found!');
  }
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? `SUCESS: Note was removed\nTitle: ${argv.title}` : 'ERROR: Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
