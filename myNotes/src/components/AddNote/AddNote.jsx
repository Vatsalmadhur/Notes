import React, { useState } from "react";
const AddNote = ({ handelAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handelSaveClick = () => {
    handelAddNote(noteText);
  };

  return (
    <div className="noteBox">
      <textarea
        placeholder="Add a note..."
        id=""
        cols="30"
        rows="10"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <p className="charRem">200 Char Remaining</p>
      <button className="newNoteBtn" onClick={handelSaveClick}>
        Add Note
      </button>
    </div>
  );
};
export default AddNote;
