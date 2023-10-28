import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../initialState'

export const sortProductSlice = createSlice({
    name: 'sortProduct',
    initialState,
    reducers: {
        sortProductByNameAscending: (state, actions) => {
            const data = JSON.parse(JSON.stringify(state))
            return state = data.sort((a,b) => a.title - b.title)
        },
        sortProductByNameDescending: (state) => {
            console.log('sort descending')
            return state.sort((a,b) => b.title - a.title)
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
    sortProductByNameAscending, 
    sortProductByNameDescending,
    sortProductByRatingHigher,
    sortProductByRatingLower,
    sortProductByDateLatest,
    sortProductByDateOldest
 } = sortProductSlice.actions
export default sortProductSlice.reducer