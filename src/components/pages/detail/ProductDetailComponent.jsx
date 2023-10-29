'use client'

import { useEffect } from 'react'
import { useAppSelector } from "@/redux/store"
import { Box, Button, Flex, Grid, GridItem, Image, Text, useDisclosure } from "@chakra-ui/react"
import { useParams } from 'next/navigation'
import { StarIcon } from '@chakra-ui/icons'
import { ModalComponent } from '@/components/atoms/Modal'
import { BreadcrumbComponent } from '../../atoms/Breadcrumb'
import { useDispatch } from 'react-redux'
import { getAllData } from '@/redux/features/productsSlice'

export const ProductDetailComponent = () => {
    const params = useParams()
    const filteredProduct = useAppSelector(state => state.productReducer.filtered)
    const [product] = filteredProduct.filter(list => list.id === Number(params.params))
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllData(filteredProduct))
    }, [dispatch])
    console.log(product)
    return (
        <Box mt={6}>
            <BreadcrumbComponent dataLink={params.params} title={product?.title} />
            <Grid templateColumns={['repeat(1, 1fr)', '300px 1fr']} gap={5}>
                <GridItem>
                    <Box border='2px' borderColor='gray.200' borderRadius={10} overflow='hidden'>
                        <Image src={product?.image} w={300} />
                    </Box>
                </GridItem>
                <GridItem>
                    <Text as='h1' mt={3} dangerouslySetInnerHTML={{ __html: product?.title }} fontSize={24} fontWeight={600} />
                    <Flex alignItems='center'>
                        {
                            product?.rating?.rate.length === 0 ? <Text>No review</Text> :
                            <StarIcon w={6} h={6} color='yellow.300' />
                        }
                    </Flex>
                    <Text fontSize={30} fontWeight={600} mt={3}>${product?.price}</Text>
                    <Text dangerouslySetInnerHTML={{ __html: product?.description }} my={3} fontSize={18} />
                    <Flex>
                        <Text>Rate this product?</Text>
                        <Button onClick={onOpen}>Rate this</Button>
                    </Flex>
                </GridItem>
            </Grid>
            <ModalComponent onClose={onClose} isOpen={isOpen} id={Number(params.params)} />
        </Box>
    )
}