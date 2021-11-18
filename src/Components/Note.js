import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
function Note({id, text, date,deleteNote}) {
    console.log(id)
    return (
        <div className="note">
            <div>{text}</div>
            <div className="foot">
                <small>{date}</small>
                <MdDeleteForever className="delete-button" size="1.3em" onClick={()=> deleteNote(id)}/>
            </div>
        </div>
    )
}

export default Note
