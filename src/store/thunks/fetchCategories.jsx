import { createAsyncThunk } from  '@reduxjs/toolkit'
import axios from 'axios'


const fetchCategories = createAsyncThunk('categories/fetch', async () => {
    const url = 'https://fakestoreapi.com/products/categories'
    const response = await axios(url)

    return response.data
})

export {fetchCategories}