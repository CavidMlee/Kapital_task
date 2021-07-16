import { createSlice } from '@reduxjs/toolkit';
import { CategoryData } from './api_action';
import { ICategory } from '../../models'

interface CategoryState {
    categoryData: ICategory[],
    error: Object | null | undefined

}

const initialState = { categoryData: [], error: null } as CategoryState

const cache: any = localStorage.getItem('AllData')

const CategoryDataSlice = createSlice({
    name: 'categorydata',
    initialState,
    reducers: {},
    extraReducers: {
        [CategoryData.fulfilled.type]: (state, action) => {
            state.categoryData = navigator.onLine ? action.payload : JSON.parse(cache)

        },
        [CategoryData.rejected.type]: (state, action) => {
            state.error = action.error.message

            state.categoryData = JSON.parse(cache)
        }
    }
})
export { CategoryData }

export const categoryDataReducer = CategoryDataSlice.reducer;