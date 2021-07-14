import { createSlice } from '@reduxjs/toolkit';
import { CategoryData } from './api_action';
import { ICategory } from '../../models'

interface CategoryState {
    categoryData: ICategory[],
    error: Object | null | undefined

}

const initialState = { categoryData: [], error: null } as CategoryState


const CategoryDataSlice = createSlice({
    name: 'categorydata',
    initialState,
    reducers: {},
    extraReducers: {
        [CategoryData.fulfilled.type]: (state, action) => {
            state.categoryData = action.data
        },
        [CategoryData.rejected.type]: (state, action) => {
            state.error = action.data
        }
    }
})
export { CategoryData }

export const categoryDataReducer = CategoryDataSlice.reducer;