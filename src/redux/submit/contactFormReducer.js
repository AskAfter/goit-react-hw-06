import { addContact } from './actions';

const initialState = {
  contacts: { items: [] },
  filters: { name: '' },
};

export const contactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type: {
      const isContactExist = state.contacts.items.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );

      if (isContactExist) {
        alert(`${action.payload.name} is already in contacts`);
        return state;
      }

      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [
            { id: crypto.randomUUID(), ...action.payload },
            ...state.contacts.items,
          ],
        },
      };
    }
    default:
      return state;
  }
};
