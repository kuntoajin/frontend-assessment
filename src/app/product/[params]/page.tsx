'use client'

import { useEffect, useState } from 'react'
import { Box, Container } from "@chakra-ui/react"
import { useParams } from "next/navigation"
import axios from 'axios'

const ProductDetail = () => {
    const params = useParams()
    const [dataProduct, setDataProduct] = useState({
        title: '',
        price: 0,
        rating: 0,
        thumbnail: ''
    })

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/products/${params.params}`, { cancelToken: cancelToken.token })
                // const category = response?.data?.products?.filter(product => product.category === 'smartphones')
                // setDataProducts(response?.data?.products)
                console.log(response?.data)
            } catch (error) {
                if (axios.isCancel(error)) { }
                else {
                    throw error;
                }
            }
        }
        fetchData()
        return () => {
            cancelToken.cancel();
        }
    }, [])

    return (
        <Container maxW={['sm', 'md', 1200]}>
            <Box>
                {/* <Image /> */}
            </Box>
        </Container>
    )
}

export default ProductDetail