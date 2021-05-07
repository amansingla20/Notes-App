import './Note.css';
import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

const Note = ({id, text, date, handleEdit, handleDeleteNote}) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <button onClick={()=> handleEdit(id)}>Edit</button>
                <MdDeleteForever onClick ={()=> handleDeleteNote(id)} className='delete-icon' size='1.3rem'/>
            </div>
        </div>
    )
}

export default Note
