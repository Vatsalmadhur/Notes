import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList/NoteList";
import Search from "./components/Search/Search";
import "./index.css";
const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "lorem ipsum dolor sit amet, consectet",
      date: "2020-01-01",
    },
    {
      id: nanoid(),
      text: "lorem ",
      date: "2020-01-01",
    },
    {
      id: nanoid(),
      text: "lorem ipsum",
      date: "2020-01-01",
    },
  ]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const delNotes = (id) => {
    const newNotes = notes.filter((note) => 
      note.id !== id
    );
    setNotes(newNotes);
  };

  const [searchNote,setSearchNote]=useState('');



  return (
    <>
    <Search handelSearchNote={setSearchNote} />
      <NotesList
        notes={notes.filter((note)=>
          note.text.toLowerCase().includes(searchNote))}
        handelAddNote={addNote}
        handelDelNote={delNotes}
      />
    </>
  );
};
export default App;
