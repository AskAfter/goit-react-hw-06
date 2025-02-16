import { configureStore } from '@reduxjs/toolkit';
import { contactFormReducer } from './contactsSlice';

export const store = configureStore({
  reducer: {
    initialValues: contactFormReducer,
  },
});
