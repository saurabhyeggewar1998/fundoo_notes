import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';

const router = express.Router();

// Create a new Note
router.post('/createnote', newNoteValidator, noteController.create);

// Retrieve all Notes
router.get('/getnote', noteController.getAllNotes);

// Retrieve a single Note with noteId
router.get('/:_id', noteController.getSingleNote);

// Update a Note with noteId
router.put('/updatenotes/:noteId', noteController.updateNote);

// Delete a Note with noteId
router.delete('/deletenotes/:noteId', noteController.deleteNote);

export default router;