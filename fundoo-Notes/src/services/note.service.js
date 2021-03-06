import Note from '../models/note.model';
import { client } from '../config/redis';

//create new note
export const create = async (body) => {
        const Notebody = await Note.create(body);
          return Notebody;
};

//get all notes
export const getAllNotes = async (userId) => {
  const data = await Note.find({userId});
  if(data.length === 0){
    throw new Error('notes are empty')
  }else{
    await client.set('getAllNotes' , JSON.stringify(data));
  return data;
  }
};


//get single note
export const getSingleNote = async (_id,userId) => {
    const data = await Note.findById({_id,userId});
   // await client.set('getSingleNote' , JSON.stringify(data));
    return data;
  };
  
//update note
export const updateNote = async (_id, body) => {
    const data = await Note.findByIdAndUpdate(
      {
        _id
      },
      body,
      {
        new: true
      }
    );
    return data;
  };

//delete note
export const deleteNote = async (userId) => {
    await Note.findByIdAndDelete(userId);
    return '';

  };

  //archive

  export const archive = async (_id) => {
    const data = await Note.findByIdAndUpdate(
      {
        _id
      },
       {
        $set: { isArchived: true }
      },
      {
        new: true
      }
    );
    return data;
  };

  //trashing

  export const trashedNotes = async (_id) => {
    const data = await Note.findByIdAndUpdate(
      {
        _id
      },
       {
        $set: { isDeleted: true }
      },
      {
        new: true
      }
    );
    return data;
  };

