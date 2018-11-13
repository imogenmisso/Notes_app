function testNoteListHasNotes() {
  var noteList = new NoteList();
  assert2.isEqual(noteList.notes.length, [].length);
}

testNoteListHasNotes();

function testNoteListListsNotes() {
  var noteList = new NoteList();
  noteList.add("hello");
  assert.isTrue(noteList.notes[0].text === "hello");
}


testNoteListListsNotes();


function testReturnsAllNotes(textOne, textTwo) {
  var noteList = new NoteList();
  noteList.add(textOne);
  noteList.add(textTwo);
  assert.isTrue(noteList.listAll()[0].text === textOne);
  assert.isTrue(noteList.listAll()[1].text === textTwo);
}

testReturnsAllNotes("hi", "hello");
