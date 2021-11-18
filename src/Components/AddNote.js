import React,{useState} from 'react'

function AddNote({addNote}) {
    const [noteTxt, setNoteTxt] = useState('');
    const charLim = 200;
    const handleChange = (e) =>{
        if(charLim - e.target.value.length >= 0){
        setNoteTxt(e.target.value)
        }
    }
    const handleSaveClick = () => {
        if(noteTxt.trim().length > 0){
        addNote(noteTxt);
        setNoteTxt("")
        }else{
            setNoteTxt("")
            alert('The notes cannot be empty!')
        }
    }
    return (
        <div className="note-adder note">
            <textarea rows="8" cols="10" placeholder="Type your new note here..." onChange={handleChange} value={noteTxt}/>
            <div className="foot">
                <small>{charLim - noteTxt.length} remaining</small>
                <button className="add-btn" onClick={handleSaveClick}>Add</button>
            </div>
        </div>
    )
}

export default AddNote
