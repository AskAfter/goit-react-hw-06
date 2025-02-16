import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: { items: [] },
  filters: { name: '' },
};

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.items = [
        { id: crypto.randomUUID(), ...action.payload },
        ...state.contacts.items,
      ];
    },
  },
});

export const { addContact } = slice.actions;
export const contactFormReducer = slice.reducer;
