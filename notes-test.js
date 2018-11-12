function testNoteHasCorrectDescription(description) {
  var note = new Note(description);
  assert.isTrue(note.description === description);
};

testNoteHasCorrectDescription("My favourite language is Javascript");
