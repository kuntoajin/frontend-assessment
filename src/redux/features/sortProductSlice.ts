import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const sortProductSlice = createSlice({
    name: 'sortProduct',
    initialState: [],
    reducers: {
        sortProductByNameDescending: (state) => {
            const data = JSON.parse(JSON.stringify(state))
            return state = data.sort((a,b) => b.title - a.title)
        },
        sortProductByRatingHigher: (state) => {
            console.log('sort price high')
        },
        sortProductByRatingLower: (state) => {
            console.log('sort price low')
        },
        sortProductByDateLatest: (state) => {
            console.log('sort date latest')
        },
        sortProductByDateOldest: (state) => {
            console.log('sort date oldest')
        }
    }
})

export const { 
    sortProductByNameDescending,
    sortProductByRatingHigher,
    sortProductByRatingLower,
    sortProductByDateLatest,
    sortProductByDateOldest
 } = sortProductSlice.actions
export default sortProductSlice.reducer