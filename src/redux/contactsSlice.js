import { createSlice, nanoid } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "contacts",
    initialState: {
            items: []  
    },
    reducers: {
        addContact:{
            reducer: (state, action) => {state.items.push(action.payload)}, 
            prepare: ({name, number}) => {return{
                payload:{
                    name,
                    number,
                    id: nanoid(),
                }
            }
        }
    },
    deleteContact(state, action) {
        const index = state.items.findIndex((items) => items.id === action.payload);
        state.items.splice(index, 1);
      },
},
});

export default slice.reducer;
export const {addContact, deleteContact} = slice.actions;
export const selectContacts = state => state.contacts.items;