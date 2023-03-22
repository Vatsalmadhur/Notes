import React from "react";
import {useState} from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList/NoteList";
import "./index.css";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "lorem ipsum dolor sit amet, consectet",
      date: "2020-01-01"
    },
    {
      id: nanoid(),
      text: "lorem ",
      date: "2020-01-01"
    },
    {
      id: nanoid(),
      text: "lorem ipsum",
      date: "2020-01-01"
    }
  ]);
  const addNote=(text)=>{
    const date =new Date();
    const newNote={
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote]
    setNotes(newNotes)

  }
  return (
    <>
      <NotesList notes={notes} handelAddNote={addNote} />
    </>
  );
};
export default App;
