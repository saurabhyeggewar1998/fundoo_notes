import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';

// Create new Note
export const create = async (req, res, next) => {
    try {
      console.log(" before adding userid req body ---->", req.body)
      req.body.UserID = req.body.data;
      console.log(" checking id req body ---->", req.body.UserID)

      console.log(" after adding userid req body ---->", req.body)
      
      const data = await NoteService.create(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Note created successfully'

      });
    } catch (error) {
      next(error);
    }
  };

  

//retrieve all notes
export const getAllNotes = async (req, res, next) => {
  try {
      req.body.userId = req.body.data.id;
      const data = await NoteService.getAllNotes(req.body.UserId);
      res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All notes fetched successfully'
  });
  }catch (error) {
      next(error);
  }
};
//retrieve single note by id
export const getSingleNote = async (req, res, next) => {
    try {
      req.body.userId = req.body.data.id;
        const data = await NoteService.getSingleNote(req.params._id);
        res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Note fetched successfully'
      });
    } catch (error) {
        next(error);
    }
  };

  //update note
  export const updateNote = async (req, res, next) => {
    try {
      req.body.userId = req.body.data.id;
      const data = await NoteService.updateNote(req.params._id, req.body);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Note updated successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  export const deleteNote = async (req, res, next) => {
    try {
      req.body.userId = req.body.data.id;
      await NoteService.deleteNote(req.params._id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: [],
        message: 'Note deleted successfully'
      });
    } catch (error) {
      next(error);
    }
  };


  export const archive = async (req, res, next) => {
    try {
      req.body.userId = req.body.data.id;
      const data = await NoteService.archive(req.params._id);
      res.status(HttpStatus.ACCEPTED).json({
        code: HttpStatus.ACCEPTED,
        data: data,
        message: 'Note archived successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  
  export const trashedNotes = async (req, res, next) => {
    try {
      req.body.userId = req.body.data.id;
        const data = await NoteService.trashedNotes(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data : data,
            message: 'Note added to trash'
        })
    } catch (error) {
        next(error)
    }
}