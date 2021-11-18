import React from 'react'
import Note from './Note'
import AddNote from './AddNote'
function noteslist({note, addNote, deleteNote}) {
    return (
        <div className="note-list">
           {note.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} deleteNote={deleteNote}/>
           ))}
           <AddNote addNote={addNote}/>
        </div>
    )
}

export default noteslist
