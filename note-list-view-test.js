function testReturnsNoteListModel() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList === noteList);
}

testReturnsNoteListModel();


function testNoteListModelHTMLString(textOne, textTwo) {
  var noteList = new NoteList();
  noteList.add(textOne);
  noteList.add(textTwo);
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getNoteList() === '<ul><li><div>' + textOne + '</div></li><li><div>' + textTwo + '</div></li></ul>');
}

testNoteListModelHTMLString("Favourite food: pesto", "Favourite drink: seltzer");

function testNoteListModelWithNoNotes() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getNoteList() === '<ul></ul>');
}

testNoteListModelWithNoNotes()

function testNoteListModelWithOneNote(textOne) {
  var noteList = new NoteList();
  noteList.add(textOne);
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getNoteList() === '<ul><li><div>' + textOne + '</div></li></ul>');
}

testNoteListModelWithNoNotes("Favourite food: pesto")
