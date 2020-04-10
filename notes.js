const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  } catch (err) {
    return [];
  }
}

var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter((note) => note.title === title);

  if(double.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    console.log(note);
  } else {
    console.log("STOP: Title already exists.");
  }
}

var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

var readNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  console.log(filteredNotes[0]);
}
var getAll = () => {
    var notes = fetchNotes();
  
    notes.forEach((note) => logNote(note));
  }
module.exports={
    addingNote,
    removeNote,
    readNote,
    getAll

}