(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
    this.noteList.add("Favourite drink: seltzer")
    this.noteListView = new NoteListView(noteList);
  }

  NoteController.prototype.getHTML = function() {
    return document.getElementById("app").innerHTML = this.noteListView.getNoteList();
  }


   exports.NoteController = NoteController;
})(this);

// var noteList = new NoteList()
// var noteController = new NoteController(noteList);
// noteController.getHTML()
