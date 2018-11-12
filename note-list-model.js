(function(exports) {
  function NoteList() {
    this.notes = [];
  }
exports.NoteList = NoteList;
})(this);

NoteList.prototype.add = function(note) {
  this.notes.push(note);
}
