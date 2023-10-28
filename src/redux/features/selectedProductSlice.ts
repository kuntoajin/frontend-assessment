import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { initialState } from '../initialState'
import data from '../../components/data/mock.json'

const initialState = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: 0,
        count: 0
    },
    createdAt: "",
    updatedAt: ""
}

export const selectedProductSlice = createSlice({
    name: 'selectedProduct',
    initialState,
    reducers: {
        selectedProductUpdated: (state, actions: PayloadAction<number>) => {
            if(actions.payload) {
                const filter = data.filter((list) => list.id === actions.payload)
                const [filteredData] = filter
                return { ...filteredData }
            }
        }
    }
})

export const { selectedProductUpdated } = selectedProductSlice.actions
export default selectedProductSlice.reducer