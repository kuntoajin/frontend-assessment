'use client'
import { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button, Flex, Grid, GridItem, Box, Select } from '@chakra-ui/react'
import axios from 'axios'
import Link from 'next/link'
import data from '../../data/mock.json'

export const ProductShowcaseComponent = () => {
    const [dataProducts, setDataProducts] = useState(data)

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        const fetchData = async () => {
            try {
                const response = await axios.get('https://mocki.io/v1/6f17b78a-9bd3-4f94-b0f3-2bc4ca788b9d', { cancelToken: cancelToken.token })
                // const category = response?.data?.products?.filter(product => product.category === 'smartphones')
                // setDataProducts(response?.data?.products)
                console.log(response)
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
    console.log(dataProducts)
    return (
        <Box>
            <Flex justifyContent='end' marginY={5}>
                <Select placeholder='Sort by' w='100px'>
                    <option value='option1'>Title ascending</option>
                    <option value='option1'>Title descending</option>
                    <option value='option2'>Date older</option>
                    <option value='option2'>Date Latest</option>
                    <option value='option3'>Rating smaller</option>
                    <option value='option3'>Rating higher</option>
                </Select>
            </Flex>
            <Grid templateColumns='repeat(4, 1fr)' gap={5}>
                {
                    dataProducts?.map((list, index) => (
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