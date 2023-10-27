export type DataProduct = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    },
    createdAt: string,
    updatedAt?: string | undefined 
}[]