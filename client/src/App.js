import React, { useEffect, useState } from "react"
import "./styles.css"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { getNotes } from "./actions/notes"
import Header from "./components/Header/Header"
import Notes from "./components/Notes/Notes"
import Form from "./components/Form/Form"

function App() {
  const [showAddNote, setShowAddNote] = useState(false)
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [currentId, dispatch])

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="form-container">
            <button
              className="btn btn-add"
              onClick={() => setShowAddNote(!showAddNote)}
              style={
                showAddNote
                  ? { backgroundColor: "red" }
                  : { backgroundColor: "green" }
              }>
              {showAddNote ? "Close" : "Add Note"}
            </button>
            {showAddNote ? (
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            ) : null}
          </div>
          <div className="notes-container">
            <Notes setCurrentId={setCurrentId} />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
