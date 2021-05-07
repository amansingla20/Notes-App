import './NoteList.css';
import React from 'react'
import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({notes, handleAddNote, handleDeleteNote, isEdited}) => {
    return (
        <div className='notesList'>
            {notes.map((note)=> (
                <Note key= {note.id} id={note.id} text={note.text} date= {note.date}
                handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NoteList
