import { useEffect } from 'react'
import { selectedProductUpdated } from "@/redux/features/selectedProductSlice"
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import { Box, Grid, GridItem } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { useParams } from 'next/navigation'

export const ProductDetailComponent = () => {
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const product = useAppSelector(state => state.selectedProductReducer)
    console.log(product)
    useEffect(() => {
        dispatch(selectedProductUpdated(Number(params.params)))
    }, [dispatch, params])

    return (
        <Box>
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}>
                <GridItem>image</GridItem>
                <GridItem>detail</GridItem>
                <GridItem>stock</GridItem>
            </Grid>
        </Box>
    )
}