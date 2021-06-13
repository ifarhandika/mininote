import React, { useEffect, useState } from "react"
import "./styles.css"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { getNotes } from "./actions/notes"
import Header from "./components/Header/Header"
import Notes from "./components/Notes/Notes"
import Form from "./components/Form/Form"

function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNotes())
  }, [currentId, dispatch])

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
        <div>
          <Notes setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  )
}

export default App
