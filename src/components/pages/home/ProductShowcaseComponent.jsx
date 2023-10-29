'use client'

import { useMemo, useState, useEffect } from 'react'
import { Card, CardBody, Stack, Heading, Text, Button, Flex, Grid, Box, Select, useColorMode, GridItem, Input } from '@chakra-ui/react'
import Link from 'next/link'
import { useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { selectedProductUpdated } from '@/redux/features/selectedProductSlice'
import { getAllData, searchProduct, sortProductByDateLatest, sortProductByDateOldest, sortProductByNameAscending, sortProductByNameDescending, sortProductByRatingHigher, sortProductByRatingLower } from '@/redux/features/productsSlice'
import { StarIcon } from '@chakra-ui/icons'
import { ProductRate } from '../../atoms/Rating'

export const ProductShowcaseComponent = () => {
    const [filter, setFilter] = useState("")

    const products = useAppSelector(state => state.productReducer.value)
    const filteredData = useAppSelector(state => state.productReducer.filtered)
    const dispatch = useDispatch()
    const { colorMode, toggleColorMode } = useColorMode()

    const sortBy = (data) => {
        switch (data) {
            case 'SORT_BY_ASCENDING':
                dispatch(sortProductByNameAscending(filteredData))
                break
            case 'SORT_BY_DESCENDING':
                dispatch(sortProductByNameDescending(filteredData))
                break
            case 'SORT_BY_OLDER':
                dispatch(sortProductByDateOldest(filteredData))
                break
            case 'SORT_BY_LATEST':
                dispatch(sortProductByDateLatest(filteredData))
                break
            case 'SORT_BY_HIGHER':
                dispatch(sortProductByRatingHigher(filteredData))
                break
            case 'SORT_BY_LOWER':
                dispatch(sortProductByRatingLower(filteredData))
        }
    }

    const searchProductFilteredByDesc = () => {
        return products.filter(product => product.description.toLowerCase().includes(filter) ||
            product.description.includes(filter))
    }

    const handleSearch = e => {
        setFilter(e)
        dispatch(searchProduct({ products, query: e }))
        console.log(products)
    }

    useEffect(() => {
        if (filteredData.length === 0) {
            dispatch(getAllData(products))
            console.log(filteredData)
        }
    }, [dispatch])
    console.log(filteredData)
    return (
        <Box mt={10}>
            <Input onChange={e => handleSearch(e.target.value)} placeholder='Search here...' />
            <Flex justifyContent='end' marginY={5}>
                <Button onClick={toggleColorMode} mr={3}>
                    Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
                <Select placeholder='Sort by' w='100px' onChange={e => sortBy(e.target.value)}>
                    <option value='SORT_BY_ASCENDING'>Title ascending</option>
                    <option value='SORT_BY_DESCENDING'>Title descending</option>
                    <option value='SORT_BY_OLDER'>Date older</option>
                    <option value='SORT_BY_LATEST'>Date Latest</option>
                    <option value='SORT_BY_LOWER'>Rating smaller</option>
                    <option value='SORT_BY_HIGHER'>Rating higher</option>
                </Select>
            </Flex>
            <Grid gap={4} templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)' }}>
                {
                    filteredData?.map((list) => (
                        <GridItem key={list.id} flex={1} w='full'>
                            <Link href={`/product/${list.id}`} style={{ display: 'block' }}>
                                <Card w={{ base: '160px', sm: '210px', '2xl': '210px' }} h='380px'>
                                    <CardBody>
                                        <Box
                                            backgroundImage={`url('${list.image}') !important;`}
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
                                            <Flex justifyContent='space-between'>
                                                <Text color='blue.600' fontSize={['lg', '2xl']}>
                                                    ${list.price}
                                                </Text>
                                                <Flex alignItems='center'>
                                                    {list?.rating?.rate?.length === 0 ? <Text fontSize={12}>No review</Text> :
                                                        <>
                                                            <StarIcon w={4} h={4} color='yellow.300' />
                                                            <ProductRate data={list?.rating?.rate} />
                                                        </>
                                                    }
                                                </Flex>
                                            </Flex>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            </Link>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}