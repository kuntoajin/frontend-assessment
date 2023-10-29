import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import data from '../../data/mock.json'

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
    initialState: {
        value: {}
    },
    reducers: {
        selectedProductUpdated: (state, actions) => {
            console.log(actions.payload)
            let [detail] = actions.payload.products.value.filter(product => product.id === actions.payload.id)
            state.value = detail
        }
    }
})

export const { selectedProductUpdated } = selectedProductSlice.actions
export default selectedProductSlice.reducer