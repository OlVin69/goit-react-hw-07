import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, deleteContact } from "./contactsOps";

const slice = createSlice({
    name: "contacts",
    initialState: {
            items: [],
            isLoading: false,
            error: null,  
    },

    extraReducers:(builder) => 
       builder
       .addCase(fetchContacts.pending, (state)=>{
        state.error = null;
        state.isLoading = true;
       })
       .addCase(fetchContacts.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.items = action.payload;
        
       }) 
       .addCase(fetchContacts.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.payload;
       })
       .addCase(deleteContact.pending, (state)=>{
        state.error = null;
        state.isLoading = true;
       })
       .addCase(deleteContact.fulfilled, (state, action)=>{
        state.isLoading = false;
        state.items = 
        
       }) 
       .addCase(deleteContact.rejected, (state, action)=>{
        state.isLoading = false;
        state.error = action.payload;
       })


});



export  const contactsReducer = slice.reducer;
export const {addContact, deleteContact} = slice.actions;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;