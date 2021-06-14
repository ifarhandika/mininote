import React from "react"
import { useDispatch } from "react-redux"
import { deleteNote } from "../../../actions/notes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import "./note.css"
import moment from "moment"

const Note = ({ note, setCurrentId }) => {
  const dispatch = useDispatch()

  return (
    <div className="note-card">
      <div className="note-header">
        <h2>{note.title}</h2>
        <small>{moment(note.createdAt).fromNow()}</small>
      </div>
      <p>{note.note}</p>
      <p className="tags">{note.tags.map((tag) => `#${tag} `)}</p>
      {/* <small>{moment(note.createdAt).fromNow}</small> */}
      <div className="note-icon">
        <FontAwesomeIcon
          icon={faEdit}
          style={{ cursor: "pointer", marginRight: "5px" }}
          onClick={() => setCurrentId(note._id)}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(deleteNote(note._id))}
        />
      </div>
    </div>
  )
}

export default Note
