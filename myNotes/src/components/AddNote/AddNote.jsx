import React, { useState } from "react";
const AddNote = ({ handelAddNote }) => {
  const charLimit = 300;
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    if(charLimit-event.target.value.length>=0){
      setNoteText(event.target.value);
    }
  };
  const handelSaveClick = () => {
    if(noteText.trim().length>0){
      handelAddNote(noteText);
      setNoteText("");
    }
  };



  return (
    <div className="noteBoxAdd">
      <textarea
        placeholder="Add a note..."
        id=""
        cols="30"
        rows="10"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <p className="charRem">{charLimit-noteText.length} Char Remaining</p>
      <button className="newNoteBtn" onClick={handelSaveClick}>
        Add Note
      </button>
    </div>
  );
};
export default AddNote;
