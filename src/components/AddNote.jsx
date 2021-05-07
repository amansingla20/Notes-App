import './AddNote.css';
import {useState} from 'react';

const AddNote=({handleAddNote})=>{
    const [noteText, setNoteText] = useState('');
    const characterLimit= 200;

    const handleChange=(event)=>{
        if(characterLimit - event.target.value.length>=0){
            setNoteText(event.target.value)
        }
    }
    
    const handleSave= ()=>{
        if(noteText.trim().length>0)
        handleAddNote(noteText);
        setNoteText('');
    }

    return(
        <div className='note new'>
            <textarea cols="10" rows="8" 
            value={noteText}
            onChange={handleChange}
            placeholder='Type to add new note..'></textarea>
            <div className='note-footer'>
                <small>{characterLimit-noteText.length} Remaining..</small>
                <button onClick={handleSave}className='save'>Save</button>
            </div>
        </div>
    );
}

export default AddNote;