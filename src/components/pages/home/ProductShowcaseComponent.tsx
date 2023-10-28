'use client'

import { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Flex, Grid, Wrap, WrapItem, Box, Select } from '@chakra-ui/react'
import Link from 'next/link'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { selectedProductUpdated } from '@/redux/features/selectedProductSlice'
import { sortItemFunc } from '@/components/functions/sortItem'
import { sortProductByDateLatest, sortProductByDateOldest, sortProductByNameAscending, sortProductByNameDescending, sortProductByRatingHigher, sortProductByRatingLower } from '@/redux/features/sortProductSlice'

export const ProductShowcaseComponent = () => {
    const [sortItem, setSortItem] = useState<string>('')
    const product = useAppSelector(state => state.productReducer)
    const selected = useAppSelector(state => state.selectedProductReducer)
    const sort = useAppSelector(state => state.sortProductReducer)
    const dispatch = useDispatch<AppDispatch>()

    const sortBy = (data: string) => {
        switch(data) {
            case 'SORT_BY_ASCENDING': 
                dispatch(sortProductByNameAscending())
                break
            case 'SORT_BY_DESCENDING':
                dispatch(sortProductByNameDescending())
                break
            case 'SORT_BY_OLDER':
                dispatch(sortProductByDateOldest())
                break
            case 'SORT_BY_LATEST':
                dispatch(sortProductByDateLatest())
                break
            case 'SORT_BY_HIGHER':
                dispatch(sortProductByRatingHigher())
                break
            case 'SORT_BY_SMALLER':
                dispatch(sortProductByRatingLower())
        }
    }

    return (
        <Box>
            <Flex justifyContent='end' marginY={5}>
                <Select placeholder='Sort by' w='100px' onChange={e => sortBy(e.target.value)}>
                    <option value='SORT_BY_ASCENDING'>Title ascending</option>
                    <option value='SORT_BY_DESCENDING'>Title descending</option>
                    <option value='SORT_BY_OLDER'>Date older</option>
                    <option value='SORT_BY_LATEST'>Date Latest</option>
                    <option value='SORT_BY_SMALLER'>Rating smaller</option>
                    <option value='SORT_BY_HIGHER'>Rating higher</option>
                </Select>
            </Flex>
            <Wrap spacing='20px'>
                {
                    product?.map((list, index) => (
                        <WrapItem key={index} flex={1} w='full' onClick={() => dispatch(selectedProductUpdated(list.id))}>
                            <Link href={`/product/${list.id}`}  style={{display: 'block'}}>
                                <Card w='210px' h='380px'>
                                    <CardBody>
                                        <Box
                                            backgroundImage={`url('${list.image}') !important;`}
                                            // alt='Green double couch with wooden legs'
                                            borderRadius='lg'
                                            w='full'
                                            h={160}
                                            backgroundSize='contain'
                                            backgroundRepeat='no-repeat'
                                            backgroundPosition='center'
                                        />
                                        <Stack mt='6' spacing='3'>
                                            <Heading size='md' noOfLines={2}>{list.title}</Heading>
                                            <Text noOfLines={2}>{list.description}</Text>
                                            <Text color='blue.600' fontSize='2xl'>
                                                ${list.price}
                                            </Text>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Link>
                        </WrapItem>
                    ))
                }
            </Wrap>
        </Box>
    )
}