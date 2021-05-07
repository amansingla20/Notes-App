import './NoteList.css';
import React from 'react'
import Note from './Note';

const NoteList = () => {
    return (
        <div className='notesList'>
            <Note/>
            <Note/>
        </div>
    )
}

export default NoteList
