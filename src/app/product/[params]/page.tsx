'use client'

import { useEffect, useState } from 'react'
import { Box, Container } from "@chakra-ui/react"
import { useParams } from "next/navigation"
import axios from 'axios'
import { ProductDetailComponent } from '@/components/pages/detail/ProductDetailComponent'

const ProductDetail = () => {
    return (
        <Container maxW={['sm', 'md', 1200]}>
            <ProductDetailComponent />
        </Container>
    )
}

export default ProductDetail