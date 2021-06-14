import React, { useEffect, useState } from "react"
import "./form.css"
import { useDispatch, useSelector } from "react-redux"
import { createNote, updateNote } from "../../actions/notes"

const Form = ({ currentId, setCurrentId, onAdd, showAdd }) => {
  const [noteData, setNoteData] = useState({ title: "", note: "", tags: "" })
  const note = useSelector((state) =>
    currentId ? state.notes.find((p) => p._id === currentId) : null
  )
  const dispatch = useDispatch()

  useEffect(() => {
    if (note) setNoteData(note)
  }, [note])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentId) {
      dispatch(updateNote(currentId, noteData))
    } else {
      dispatch(createNote(noteData))
    }
    setCurrentId(null)
    setNoteData({ title: "", note: "", tags: "" })
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>{currentId ? "Edit" : "Add"} Note</h2>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          placeholder="Add Title"
          value={noteData.title}
          onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
        />
      </div>
      <div className="form-control">
        <label>Note</label>
        <input
          type="text"
          placeholder="Start writing..."
          value={noteData.note}
          onChange={(e) => setNoteData({ ...noteData, note: e.target.value })}
        />
      </div>
      <div className="form-control">
        <label>Tags</label>
        <input
          type="text"
          placeholder="Add Tags"
          value={noteData.tags}
          onChange={(e) =>
            setNoteData({ ...noteData, tags: e.target.value.split(",") })
          }
        />
      </div>
      <div className="btn-control">
        <button className="btn btn-block" type="submit">
          {currentId ? "Edit" : "Add"} note
        </button>
      </div>
    </form>
  )
}

export default Form
