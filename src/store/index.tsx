import { configureStore } from '@reduxjs/toolkit';
import { categoryDataReducer } from './category';
import { providerListDataReducer } from './providerList';
import { providerDataReducer } from './provider'
import { ICategory, IProvider } from '../models'

export default configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: {
        categoryData: categoryDataReducer,
        providerListData: providerListDataReducer,
        providerData: providerDataReducer

    },
})

export interface RootState {
    categoryData: { categoryData: ICategory[], error: Object | string },
    providerListData: { providerListData: IProvider[] },
    providerData: { providerData: IProvider }
}