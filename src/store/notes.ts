import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getTestNotes } from "./test";

interface NotesState {
  notes: Note[];
}

interface updateNoteById {
  id: UUID;
  note: Note;
}

const initialState: NotesState = {
  notes: getTestNotes(),
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // add note to notes
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes = [...state.notes, action.payload];
    },
    // update note by id
    updateNoteById: (state, action: PayloadAction<updateNoteById>) => {
      const noteIndex = state.notes.findIndex((note) => note.id === action.payload.id);
      if (noteIndex !== -1) {
        state.notes[noteIndex] = action.payload.note;
      }
      state.notes = [...state.notes];
    },
  },
});

export const { addNote, updateNoteById } = notesSlice.actions;

export default notesSlice.reducer;
