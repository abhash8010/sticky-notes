import React from 'react'
import NotesList from './Components/NotesList'
import {useState, useEffect} from 'react';
import {nanoid} from 'nanoid'; 
import SearchBar from './Components/SearchBar';

function App() {  
  const [note, setNote] = useState([{
    id: nanoid(),
    text: "This is the first",
    date: "12/09/2020"},
    {
      id: nanoid(),
      text: "This is the Second",
      date: "12/09/2020"},
      { 
        id: nanoid(),
        text: "This is the Third",
        date: "12/09/2020"},
        {
          id: nanoid(),
          text: "This is the Fourth",
          date: "12/09/2020"},
  ])
useEffect(()=>{
 const localNotes = JSON.parse(localStorage.getItem('note-app'));
 if(localNotes){
    setNote(localNotes)
 }
}, [])
useEffect(()=>{
  localStorage.setItem('note-app', JSON.stringify(note))
},[note])

  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...note, newNote]
    setNote(newNotes)
  }
  const deleteNote = (id) =>{
    const newNote = note.filter((note) => note.id !== id)
    setNote(newNote)
  }
  const [searchTxt, setSearchTxt] = useState('');
  return (
    <div className="main-container">
      <SearchBar setSearchTxt={setSearchTxt}/>
      <NotesList note={note.filter((note)=>note.text.toLowerCase().includes(searchTxt.toLowerCase()))} addNote={addNote} deleteNote={deleteNote}/>
    </div>
  )
}

export default App
