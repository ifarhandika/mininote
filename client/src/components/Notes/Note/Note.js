import React from "react"
import { useDispatch } from "react-redux"
import { deleteNote } from "../../../actions/notes"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import "./styles.css"

const Note = ({ note, setCurrentId }) => {
const dispatch = useDispatch()

  return (
    <div className="note-card">
      <h2>{note.title}</h2>
      <p>{note.note}</p>
      <p className="tags">{note.tags.map((tag) => `#${tag} `)}</p>
      {/* <small>{moment(note.createdAt).fromNow}</small> */}
      <div>
        <FontAwesomeIcon
          icon={faEdit}
          style={{ cursor: "pointer" }}
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
