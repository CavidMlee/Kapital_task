import { configureStore } from '@reduxjs/toolkit';
import {categoryDataReducer} from './category'

export default configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: {
        categoryData: categoryDataReducer
    },
})