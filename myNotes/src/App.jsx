import React, { useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList/NoteList";
import Search from "./components/Search/Search";
import "./index.css";
const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    // const newNotes = [...notes, newNote];
    // setNotes(newNotes);
    const savedNotes=JSON.parse(localStorage.getItem("react-notes-app"));
    
    const newNotes=savedNotes ? [...savedNotes,newNote] :[newNote];
     localStorage.setItem("react-notes-app", JSON.stringify(newNotes))
     setNotes(newNotes);
     console.log("saved")
  };
  const delNotes = (id) => {
    // const newNotes = notes.filter((note) => 
    //   note.id !== id
    const note=JSON.parse(localStorage.getItem("react-notes-app"));
    const newNotes=note.filter((note) => note.id!==id);
    localStorage.setItem("react-notes-app", JSON.stringify(newNotes)

    );
    setNotes(newNotes);
  };

  const [searchNote,setSearchNote]=useState('');

  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem("react-notes-app"));
    if(savedNotes){
      setNotes(savedNotes);
      console.log(savedNotes)
    }
    console.log("something")
    
  },[])

  return (
    <>
    <p className="heading">Notes</p>
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
