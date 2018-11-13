(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.getNoteList = function() {
    var view = '<ul>'
    this.noteList.listAll().forEach(function(note) {
        view += '<li><div>' + note.text + '</div></li>'
      })
      view += '</ul>'
      return view
  }

  exports.NoteListView = NoteListView;
})(this);
