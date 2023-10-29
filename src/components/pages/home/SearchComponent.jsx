'use client'

import { useEffect, useState } from 'react'
import { useAppSelector } from "@/redux/store"
import { Box, Input } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { searchProduct } from '@/redux/features/productsSlice'

export const SearchComponent = () => {
    const [query, setQuery] = useState('')
    const products = useAppSelector(state => state.productReducer.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(searchProduct({products, query}))
    }, [dispatch, query])
    

    return (
        <Box>
            <Input variant='outline' placeholder='Search here' onChange={e => dispatch(searchProduct({products, query: e.target.value}))} />
        </Box>
    )
}