import express from "express"
import {
  createNotes,
  getNotes,
  updateNotes,
  deleteNotes,
} from "../controllers/notes.js"

const router = express.Router()

router.get("/", getNotes)
router.post("/", createNotes)
router.patch("/:id", updateNotes)
router.delete("/:id", deleteNotes)

export default router
