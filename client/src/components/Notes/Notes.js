import React from "react"
import { useSelector } from "react-redux"
import Note from "./Note/Note"
import './styles.css'

const Notes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes)
  console.log(notes)
  return (
    !notes.length ? 'There is no notes' : (
        <div className="notes-box">
            {notes.map((note) => (
                <div className="notes" key={note._id}>
                    <Note note={note} setCurrentId={setCurrentId}/>
                </div>
            ))}
        </div>
    )
  )
}

export default Notes
