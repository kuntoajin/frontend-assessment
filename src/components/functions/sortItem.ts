import { sortProductByNameAscending } from "@/redux/features/sortProductSlice"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

export const sortItemFunc = (sortBy: string) => {
    const dispatch = useDispatch<AppDispatch>()
    switch(sortBy) {
        case 'sort_by_ascending': console.log('test')
    }
}