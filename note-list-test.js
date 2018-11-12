function testNoteListHasNotes() {
  var noteList = new NoteList();
  assert2.isEqual(noteList.notes.length, [].length);
};

testNoteListHasNotes();
