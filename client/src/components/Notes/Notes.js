import React from "react"
import { useSelector } from "react-redux"
import Note from "./Note/Note"

const Notes = ({ setCurrentId }) => {
  const notes = useSelector((state) => state.notes)
  return !notes.length ? (
    "There is no notes"
  ) : (
    <div>
      {notes.map((note) => (
        <div key={note._id} style={{ width: "100%" }}>
          <Note note={note} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  )
}

export default Notes
