(function(exports) {
  function NoteList() {
    this.notes = [];
  }
exports.NoteList = NoteList;
})(this);

NoteList.prototype.add = function(note) {
  this.notes.push(note);
}

NoteList.prototype.listAll = function() {
  var string = ""
  for (var i = 0; i < this.notes.length; i++) {
    string += (this.notes[i].text + ", ")
  }
  return string.slice(0, -2)
}
