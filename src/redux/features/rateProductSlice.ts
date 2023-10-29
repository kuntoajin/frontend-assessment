import { createSlice } from "@reduxjs/toolkit";

export const rateProductSlice = createSlice({
    name: 'rateProduct',
    initialState: {
        product: {
            rating: {
                rate: 0
            }
        },
        value: 0
    },
    reducers: {

    }
})

// export const { rateProduct } = rateProductSlice.actions
export default rateProductSlice.reducer 