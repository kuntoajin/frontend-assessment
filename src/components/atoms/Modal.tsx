import { useState } from 'react'
import { StarIcon } from '@chakra-ui/icons'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import { useAppSelector } from "@/redux/store"
import { AppDispatch, } from "@/redux/store"
import { useDispatch } from 'react-redux'
import { rateProduct } from '@/redux/features/productsSlice'
import { useParams } from 'next/navigation'
import { selectedProductUpdated } from '@/redux/features/selectedProductSlice'

export const ModalComponent = ({ onClose, isOpen }: { onClose: () => void, isOpen: boolean }) => {
    const params = useParams()
    const products = useAppSelector(state => state.productReducer.filtered)

    const [rateItem, setRateItem] = useState(0)
    const rates = [1, 2, 3, 4, 5]

    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = () => {
        dispatch(rateProduct({products, params, rateItem}))
        // dispatch(selectedProductUpdated({products, id: Number(params.params)}))
        onClose()
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody mt={10} textAlign='center'>
                    {rates.map((rate, index) => {
                        return (
                            <Button key={rate} onClick={() => setRateItem(rate)} backgroundColor='transparent' _hover={{ backgroundColor: 'transparent' }}>
                                <StarIcon h={8} w={8} _hover={{ transform: 'scale(1.2)' }} color={rateItem-1 >= index ? 'yellow.200' :  'unset'} />
                            </Button>
                        )
                    })}
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleSubmit}>Rate</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )

}