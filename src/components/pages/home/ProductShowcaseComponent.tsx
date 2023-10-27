'use client'

import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Flex, Grid, GridItem, Box, Select } from '@chakra-ui/react'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { selectedProduct } from '@/redux/features/selectedProductSlice'

export const ProductShowcaseComponent = () => {
    const product = useAppSelector(state => state.productReducer)
    const selected = useAppSelector(state => state.selectedProductReducer)
    const dispatch = useDispatch<AppDispatch>()

    const handleSelectedProduct = (params: number) => {
        dispatch(selectedProduct(params))
    }
    console.log(selectedProduct)
    return (
        <Box>
            <Flex justifyContent='end' marginY={5}>
                <Select placeholder='Sort by' w='100px'>
                    <option value='option1' onClick={() => handleSelectedProduct(1)}>Title ascending</option>
                    <option value='option1'>Title descending</option>
                    <option value='option2'>Date older</option>
                    <option value='option2'>Date Latest</option>
                    <option value='option3'>Rating smaller</option>
                    <option value='option3'>Rating higher</option>
                </Select>
            </Flex>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                {
                    product?.map((list, index) => (
                        <GridItem key={index}>
                            <Link href={`/product/${list.id}`}>
                                <Card maxW='sm'>
                                    <CardBody>
                                        <Image
                                            src={list.image}
                                            alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                            w={300}
                                            h={300}
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md' noOfLines={2}>{list.title}</Heading>
                                            <Text noOfLines={[2, 3]}>{list.description}</Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                ${list.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter>
                                        
                                    </CardFooter>
                                </Card>
                            </Link>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}