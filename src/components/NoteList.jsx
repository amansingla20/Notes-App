import './NoteList.css';
import React from 'react'
import Note from './Note';
import AddNote from './AddNote';
import EditNote from './EditNode';

const NoteList = ({notes, handleAddNote, handleDeleteNote,  handleEdit, handleEditNote}) => {
    return (
        <div className='notesList'>
            {notes.map((note, key)=> {
                if(note.isEdited === true) { 
                return (
                <EditNote key ={key} note={note} handleEditNote={handleEditNote}/>
                )}
                else { 
                    console.log('This is here...',note.id);
                    return ( <Note key= {key} id={note.id} text={note.text} date= {note.date}
                    handleDeleteNote={handleDeleteNote}
                    handleEdit={handleEdit}
                /> )}
            })
            }
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NoteList
