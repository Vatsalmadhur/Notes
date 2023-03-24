import React from "react";
import AddNote from "../AddNote/AddNote";
import Notes from "../Notes/Note";
const NotesList = ({ notes, handelAddNote, handelDelNote }) => {
  return (
    <>
      <div className="noteList">
        {notes.map((note) => (
          <Notes 
          id={note.id} 
          text={note.text} 
          date={note.date} 
          handelDelNote={handelDelNote} />
        ))}
        <AddNote handelAddNote={handelAddNote} />
      </div>
    </>
  );
};
export default NotesList;
