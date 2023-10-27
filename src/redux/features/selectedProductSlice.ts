import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const selectedProductSlice = createSlice({
    name: 'selectedProduct',
    initialState: 0,
    reducers: {
        selectedProduct: (state: number): number => {
            return state = 0
        }
    }
})

export const { selectedProduct } = selectedProductSlice.actions
export default selectedProductSlice.reducer