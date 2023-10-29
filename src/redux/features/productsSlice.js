import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../initialState'

export const productSlide = createSlice({
    name: 'productsSlide',
    initialState: {
        value: initialState,
        filtered: []
    },
    reducers: {
        getAllData: (state, actions) => {
            console.log(actions.payload)
            return {
                ...state,
                filtered: actions.payload
            }
        },
        sortProductByNameAscending: (state, actions) => {
            const sortByKey = key => (a, b) => a[key] > b[key] ? 1 : -1
            return {
                ...state,
                filtered: actions.payload.slice().sort(sortByKey('title'))
            }
        },
        sortProductByNameDescending: (state, actions) => {
            const sortByKey = key => (a, b) => b[key] > a[key] ? 1 : -1
            return {
                ...state,
                filtered: actions.payload.slice().sort(sortByKey('title'))
            }
        },
        sortProductByRatingLower: (state, actions) => {
            const sortByKey = key => (a, b) => {
                return a[key].rate > b[key].rate ? 1 : -1
            }
            return {
                ...state,
                filtered: actions.payload.slice().sort(sortByKey('rating'))
            }
        },
        sortProductByRatingHigher: (state, actions) => {
            const sortByKey = key => (a, b) => {
                return b[key].rate > a[key].rate ? 1 : -1
            }
            console.log(actions.payload)
            return {
                ...state,
                filtered: actions.payload.slice().sort(sortByKey('rating'))
            }
        },
        sortProductByDateLatest: (state, actions) => {
            const sortByKey = key => (a, b) => {
                return a[key] > b[key] ? 1 : -1
            }
            return {
                ...state,
                filtered: actions.payload.slice().sort(sortByKey('createAt'))
            }
        },
        sortProductByDateOldest: (state, actions) => {
            const sortByKey = key => (a, b) => {
                return b[key] > a[key] ? 1 : -1
            }
            return {
                ...state,
                filtered: actions.payload.slice().sort(sortByKey('createAt'))
            }
        },
        searchProduct: (state, actions) => {
            let data = actions.payload.products?.filter(product => 
                product.title.toLowerCase().includes(actions.payload.query) || 
                product.title.includes(actions.payload.query) ||
                product.description.toLowerCase().includes(actions.payload.query) || 
                product.description.includes(actions.payload.query))

            return {
                ...state,
                filtered: data
            }
        },
        rateProduct: (state, actions) => {
            // let data = actions.payload.products.filtered.filter(product => product.id === Number(actions.payload.params.params))
            // let data2 = data[0]
            // console.log(data2.rating.rate.push)
            state.filtered[Number(actions.payload.params.params)-1].rating.rate.push(actions.payload.rateItem)
            console.log(JSON.parse(JSON.stringify(state.filtered)))
        }
    }
})

export const {
    getAllData,
    searchProduct,
    sortProductByNameAscending,
    sortProductByNameDescending,
    sortProductByRatingHigher,
    sortProductByRatingLower,
    rateProduct,
    sortProductByDateLatest,
    sortProductByDateOldest
} = productSlide.actions
export default productSlide.reducer