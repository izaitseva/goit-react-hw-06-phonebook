import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contacts/contacts.slice'

export const store = configureStore({ reducer: { contacts: contactsReducer } });