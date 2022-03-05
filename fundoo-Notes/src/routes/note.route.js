import express from 'express';
import * as noteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newNoteValidator, newUserValidator } from '../validators/user.validator';

const router = express.Router();

// Create a new Note
router.post('',newNoteValidator,userAuth, noteController.create);

// Retrieve all Notes
router.get('',userAuth, noteController.getAllNotes);

// Retrieve a single Note with noteId
router.get('/:_id',userAuth, noteController.getSingleNote);

// Update a Note with noteId
router.put('/:_id',userAuth, noteController.updateNote);

// Delete a Note with noteId
router.delete('/:_id',userAuth, noteController.deleteNote);

//Archive note
router.put('/archive/:_id',userAuth,noteController.archive)

//trashing a note with noteid
router.put('/trashedNotes/:_id',userAuth, noteController.trashedNotes);




export default router;