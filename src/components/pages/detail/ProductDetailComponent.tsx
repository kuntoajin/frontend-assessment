import { useEffect } from 'react'
import { selectedProductUpdated } from "@/redux/features/selectedProductSlice"
import { useAppSelector } from "@/redux/store"
import { AppDispatch } from "@/redux/store"
import { Box, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react"
import { useDispatch } from "react-redux"
import { useParams } from 'next/navigation'
import { StarIcon } from '@chakra-ui/icons'

export const ProductDetailComponent = () => {
    const params = useParams()
    const dispatch = useDispatch<AppDispatch>()
    const product = useAppSelector(state => state.selectedProductReducer)

    useEffect(() => {
        dispatch(selectedProductUpdated(Number(params.params)))
    }, [dispatch, params])

    return (
        <Box>
            <Grid templateColumns={['repeat(1, 1fr)', '300px 1fr']} gap={5}>
                <GridItem>
                    <Box border='2px' borderColor='gray.200' borderRadius={10} overflow='hidden'>
                        <Image src={product?.image} w={300} />
                    </Box>
                </GridItem>
                <GridItem>
                    <Text as='h1' dangerouslySetInnerHTML={{ __html: product?.title }} fontSize={25} fontWeight={600} />
                    <Text fontSize={20} fontWeight={600}>${product?.price}</Text>
                    {/* <Text dangerouslySetInnerHTML={{ __html: product?.description }} my={3} /> */}
                    <Flex alignItems='end'>
                        <StarIcon w={10} h={10} />
                        <Text fontSize={22} ml={3}>
                            {product?.rating?.rate}
                        </Text>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}