
import { createAsyncThunk } from  '@reduxjs/toolkit'
import axios from 'axios'


const fetchProducts = createAsyncThunk('products/fetch', async (category) => {
    const url = `https://fakestoreapi.com/products/category/${category}`
    const response = await axios(url)

    return response.data
})

export {fetchProducts}