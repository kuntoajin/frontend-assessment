import { Text } from "@chakra-ui/react";

const round = (value, decimals) => {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

export const ProductRate = ({data}) => {
    const initialValue = 0
    let getRate = data?.length !== 0 ? round(data?.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)/data.length, 1) : null
    
    return (
        <Text fontSize={14} ml={1}>{getRate}</Text>
    )
}