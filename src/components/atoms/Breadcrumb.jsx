import { ChevronRightIcon } from "@chakra-ui/icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

export const BreadcrumbComponent = ({ dataLink, title }) => {
    return (
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />} mb={5}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href={`/product/${dataLink}`} textDecoration='unset'>{title}</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}