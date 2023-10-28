import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import productReducer from './features/productsSlice'
import selectedProductReducer from './features/selectedProductSlice'
import sortProductReducer from './features/sortProductSlice'

export const store = configureStore({
    reducer: {
        productReducer,
        selectedProductReducer,
        sortProductReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector