function testReturnsNoteListModel() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList === noteList);
}

testReturnsNoteListModel();
