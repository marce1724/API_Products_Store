
import { createSlice } from '@reduxjs/toolkit'
import { fetchCategories } from '../thunks/fetchCategories';

const categoriesSlice = createSlice({
     name: 'categories',
     initialState : {
         category : [],
         error: null
     },
     extraReducers(builder) {
         builder.addCase(fetchCategories.fulfilled ,(state, action) => {
            state.category = action.payload
         });
         builder.addCase(fetchCategories.rejected ,(state, action) => {
            state.error = action.error
         });


     },
});

export const categoriesReducer = categoriesSlice.reducer