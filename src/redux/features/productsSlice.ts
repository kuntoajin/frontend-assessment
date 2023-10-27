import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type initialState = {
    detail: ProductsState
}

type ProductsState = {
    title: string
    description: string
    id: number
    thumbnail: string
    thumbnails: string[]
    rating: number
}

const initialState = {
    detail: {
        title: '',
        description: '',
        id: 0,
        thumbnail: '',
        thumbnails: [],
        rating: 0
    } as ProductsState,
} as initialState;

export const products = createSlice({
    name: 'products',
    initialState
})