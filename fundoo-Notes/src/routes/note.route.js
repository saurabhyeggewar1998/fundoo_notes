import express from 'express';
import * as noteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newNoteValidator, newUserValidator } from '../validators/user.validator';

const router = express.Router();

// Create a new Note
router.post('',newNoteValidator,userAuth, noteController.create);

// Retrieve all Notes
router.get('', noteController.getAllNotes);

// Retrieve a single Note with noteId
router.get('/:_id', noteController.getSingleNote);

// Update a Note with noteId
router.put('/:_id', noteController.updateNote);

// Delete a Note with noteId
router.delete('/:_id', noteController.deleteNote);

//Archive note
router.put('/archive/:_id',noteController.archive)

//trashing
router.put('/trashedNotes/:_id', noteController.trashedNotes);




export default router;