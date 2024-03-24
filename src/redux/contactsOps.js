import axios from 'axios';
import {createAsyncThunk} from "@reduxjs/toolkit";
// import { ErrorMessage } from 'formik';


axios.defaults.baseURL = "https://65fbeeed14650eb2100b0c4d.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
    try {
        const response = await axios.get('/contacts');
          return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
    
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkApi) => {
try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data; 
} catch (error) {
    return thunkApi.rejectWithValue(error.message);
}
     
}
);