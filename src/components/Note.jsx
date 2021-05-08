import './Note.css';
import React from 'react'
import {MdDeleteForever} from 'react-icons/md';
import EditIcon from '@material-ui/icons/Edit';

const Note = ({id, text, date, handleEdit, handleDeleteNote}) => {
    return (
        <div className='note'>
            <span>{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <EditIcon onClick={()=>handleEdit(id) } className='edit-icon'/>
                <MdDeleteForever onClick ={()=> handleDeleteNote(id)} className='delete-icon' size='1.3rem'/>
            </div>
        </div>
    )
}

export default Note
