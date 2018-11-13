function testReturnsNoteListModel() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.noteList === noteList);
}

testReturnsNoteListModel();


function testNoteListModelHTMLString() {
  var noteList = new NoteList();
  noteList.add("Favourite food: pesto")
  noteList.add("Favourite drink: seltzer")
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getNoteList() === '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>')
}

testNoteListModelHTMLString();
