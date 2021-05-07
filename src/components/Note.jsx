import './Note.css';
import React from 'react'
import {MdDeleteForever} from 'react-icons/md';

const Note = () => {
    return (
        <div className='note'>
            <span>Hello First Note is Here...</span>
            <div className="note-footer">
                <small>07/05/2021</small>
                <MdDeleteForever className='delete-icon' size='1.3rem'/>
            </div>
        </div>
    )
}

export default Note
