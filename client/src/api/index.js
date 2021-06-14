import axios from "axios"

const url = "https://mininote-project.herokuapp.com/notes"

export const fetchNotes = () => axios.get(url)
export const createNote = (newNote) => axios.post(url, newNote)
export const updateNote = (id, updatedNote) =>
  axios.patch(`${url}/${id}`, updatedNote)
export const deleteNote = (id) => axios.delete(`${url}/${id}`)
