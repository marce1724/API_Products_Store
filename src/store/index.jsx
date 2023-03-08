
import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from './slices/productSlice'
import { categoriesReducer } from './slices/categorySlice'; 

export const store = configureStore ({
    reducer: {
         products : productsReducer,
         categories : categoriesReducer
    },
});


export * from './thunks/fetchProducts';
export * from './thunks/fetchCategories';