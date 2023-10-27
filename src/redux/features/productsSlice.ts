import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../initialState'

export const productSlide = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProductAll: (state, actions: PayloadAction) => {
            console.log(state)
        }
    }
})

export const { getProductAll } = productSlide.actions
export default productSlide.reducer