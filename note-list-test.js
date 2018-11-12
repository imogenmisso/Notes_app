function testNoteListHasNotes() {
  var noteList = new NoteList();
  assert2.isEqual(noteList.notes.length, [].length);
};

testNoteListHasNotes();

function testNoteListListsNotes(note) {
  var noteList = new NoteList();
  var note = new Note("hi");
  noteList.add(note)
  assert.isTrue(noteList.notes[0].text === note.text);
};


testNoteListListsNotes();


function testReturnsAllNotes() {
  var noteList = new NoteList();
  var note = new Note("hi");
  var note2 = new Note("hello");
  noteList.add(note)
  noteList.add(note2)
  console.log(noteList.listAll())
  assert.isTrue(noteList.listAll() === "hi, hello")
}

testReturnsAllNotes();
