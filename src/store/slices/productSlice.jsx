
import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '../thunks/fetchProducts'

const productsSlice = createSlice({
     name: 'products',
     initialState : {
         isLoading: false,
         product : [],
         error: null
     },
     extraReducers(builder) {
         builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
         });
         builder.addCase(fetchProducts.fulfilled ,(state, action) => {
            state.isLoading = false,
            state.product = action.payload
         });
         builder.addCase(fetchProducts.rejected ,(state, action) => {
            state.isLoading = false,
            state.error = action.error
         });
     },
});

export const productsReducer = productsSlice.reducer