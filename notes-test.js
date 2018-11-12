(function(exports) {
  function testNoteHasCorrectDescription() {
    var note = new Note();

    if (note.description !== "My favourite language is Javascript") {
      throw new Error("Wrong descirption! Should be: My favourite language is Javascript")
    }
  };

  testNoteHasCorrectDescription();
})(this);
