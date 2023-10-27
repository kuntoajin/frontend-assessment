import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { initialState } from '../initialState'
import { DataProduct } from '..'

// const initialState: DataProduct = {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//         rate: 3.9,
//         count: 120
//     },
//     createdAt: "2021-12-04T10:25:16.546Z",
//     updatedAt: "2021-12-11T03:14:40.195Z"
// }

export const selectedProductSlice = createSlice({
    name: 'selectedProduct',
    initialState: 0,
    reducers: {
        selectedProductUpdated: (state, actions: PayloadAction<number>) => {
            state = actions.payload
        }
    }
})

export const { selectedProductUpdated } = selectedProductSlice.actions
export default selectedProductSlice.reducer