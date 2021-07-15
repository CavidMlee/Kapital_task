import { createSlice } from '@reduxjs/toolkit'
import { IProvider } from '../../models';

interface ProviderListState {
    providerListData: IProvider[],
}
const initialState = { providerListData: [] } as ProviderListState

export const providerListDataSlice = createSlice({
    name: 'providerListData',
    initialState,
    reducers: {
        ProviderListDataAction: (state, action) => {
            state.providerListData = action.payload
        },
    },
})

export const { ProviderListDataAction } = providerListDataSlice.actions

export const providerListDataReducer = providerListDataSlice.reducer