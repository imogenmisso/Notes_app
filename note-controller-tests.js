function testInstantiatesWithNoteListObject() {
  function NoteDouble(text) {
    this.text = text;
  }
  function NoteListDouble() {
    this.notes = [];
  };
  NoteListDouble.prototype = {
    add: function(text) {
      new NoteDouble(text);
    }
  }

  var noteListDouble = new NoteListDouble()
  var noteController = new NoteController(noteListDouble);
  assert.isTrue(noteListDouble === noteController.noteList);
}

testInstantiatesWithNoteListObject()

function testGetHtmlReturnsExpectedString() {
  // function NoteDouble(text) {
  //   this.text = text;
  // }
  // function NoteListDouble() {
  //   this.notes = [];
  // };
  // NoteListDouble.prototype = {
  //   listAll: function() {
  //   }
  // };
  // NoteListDouble.prototype = {
  //   add: function(text) {
  //     new NoteDouble(text);
  //   }
  // };
  // function NoteListViewDouble(noteList) {
  //   this.noteList = noteList;
  // }
  // NoteListViewDouble.prototype = {
  //   getNoteList: function() {}
  // }
  //
  // var noteListDouble = new NoteListDouble()
  // var noteController = new NoteController(noteListDouble);
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController.getHTML() === '<ul><li><div>Favourite drink: seltzer</div></li></ul>');
}

testGetHtmlReturnsExpectedString()
