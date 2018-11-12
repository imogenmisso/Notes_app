function testNoteHasCorrectDescription(text) {
  var note = new Note(text);
  assert.isTrue(note.text === text);
};

testNoteHasCorrectDescription("My favourite language is Javascript");

function testTextMethodReturnsText(note) {
  assert.isTrue(note.returnText() === note.text);
};

var new_note = new Note("this is a test")
testTextMethodReturnsText(new_note);
