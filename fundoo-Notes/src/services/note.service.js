import Note from '../models/note.model';

//create new note
export const create = async (body) => {
        const Notebody = await Note.create(body);
          return Notebody;
};

//get all notes
export const getAllNotes = async () => {
    const data = await Note.find();
    return data;
  };

//get single note
export const getSingleNote = async (id) => {
    const data = await Note.findById(id);
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
export const deleteNote = async (id) => {
    await User.findByIdAndDelete(id);
    return '';
  };

  //archive

  export const archive = async (_id, body) => {
    const data = await Note.findByIdAndUpdate(
      {
        _id
      },
       {
        $set: { isArchived: true }
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
      }
    );
    return data;
  };

