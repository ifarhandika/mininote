import mongoose from "mongoose"

import NoteMessage from "../model/noteMessage.js"

export const getNotes = async (req, res) => {
  try {
    const noteMessages = await NoteMessage.find()
    res.status(200).json(noteMessages)
  } catch (error) {
    res.status(404).json({ messages: error.message })
  }
}
export const createNotes = async (req, res) => {
  const note = req.body

  const newNote = new NoteMessage(note)
  try {
    await newNote.save()
    res.status(201).json(newNote)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
export const updateNotes = async (req, res) => {
  const { id: _id } = req.params
  const note = req.body

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No notes with that id")

  const updatedNote = await NoteMessage.findByIdAndUpdate(
    _id,
    { ...note, _id },
    {
      new: true,
    }
  )

  res.json(updatedNote)
}

export const deleteNotes = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No notes with that id")

  await NoteMessage.findByIdAndRemove(id)

  res.json({ message: "Note deleted successfully" })
}
