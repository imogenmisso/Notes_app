(function(exports) {
  function NoteList() {
    this.notes = [];
  }
exports.NoteList = NoteList;
})(this);

NoteList.prototype.add = function(text) {
  var note = new Note(text);
  this.notes.push(note);
};

NoteList.prototype.listAll = function() {
  return this.notes;
};
