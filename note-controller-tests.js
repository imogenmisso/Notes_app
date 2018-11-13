function testInstantiatesWithNoteListObject() {
  var noteList = new NoteList()
  var noteController = new NoteController(noteList);
  assert.isTrue(noteList === noteController.noteList);
}

testInstantiatesWithNoteListObject()

function testGetHtmlReturnsExpectedString() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  console.log(noteController.noteListView.getNoteList());
  assert.isTrue(noteController.getHTML() === '<ul><li><div>Favourite drink: seltzer</div></li></ul>');
}

testGetHtmlReturnsExpectedString()
