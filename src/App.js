import NoteList from "./components/NoteList";
import "./App.css";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First Note...",
      date: "05/07/2021",
      isEdited: false,
    },
    {
      id: nanoid(),
      text: "Second Note...",
      date: "05/07/2021",
      isEdited: false,
    },
  ]);

  const [searchText, setSearchText] = useState("");

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes"));
    if (savedNotes) setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const deleted = notes.filter((note) => note.id !== id);
    setNotes(deleted);
  };

  return (
    <div className="container">
      <Search handleSearchText={setSearchText} />
      <NoteList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
