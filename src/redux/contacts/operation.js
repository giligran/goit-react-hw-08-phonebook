import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// GET @ /tasks
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// POST @ /tasks
export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (text, thunkAPI) => {
    try {
      const {data} = await axios.post('/contacts', text );
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// DELETE @ /contacts/:id
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async (ContactsId, thunkAPI) => {
    try {
      const {data} = await axios.delete(`/contacts/${ContactsId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
