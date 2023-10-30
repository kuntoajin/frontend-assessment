'use client'

import { Container } from "@chakra-ui/react"
import { ProductDetailComponent } from '@/components/pages/detail/ProductDetailComponent'

const ProductDetail = () => {
    return (
        <Container maxW={['sm', 'md', 1200]}>
            <ProductDetailComponent />
        </Container>
    )
}

export default ProductDetail