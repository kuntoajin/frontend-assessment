import { ProductShowcaseComponent } from '@/components/pages/home/ProductShowcaseComponent'
import { SearchComponent } from '@/components/pages/home/SearchComponent'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <Container maxW={['sm', 'md', 1200]}>
      <ProductShowcaseComponent />
    </Container>
  )
}
