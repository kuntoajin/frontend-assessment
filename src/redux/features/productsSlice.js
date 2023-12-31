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
            // let data = actions.payload.products.filter(list => list.id === Number(actions.payload.params.params))
            // const test = data.map((item) => ({
            //     ...item,
            //     rating: {
            //         rate: actions.payload.rateItem
            //     }       
            // }))
            let data = actions.payload.products
            const arrFilter = actions.payload.products.findIndex((element) => element.id === actions.payload.id)
            state.filtered[arrFilter].rating.rate.push(actions.payload.rateItem)
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