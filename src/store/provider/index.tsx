import { createSlice } from '@reduxjs/toolkit'
import { IProvider } from '../../models';

interface ProviderState {
    providerData: IProvider,
}
const initialState = { providerData: {} } as ProviderState

export const providerDataSlice = createSlice({
    name: 'providerData',
    initialState,
    reducers: {
        ProviderDataAction: (state, action) => {
            state.providerData = action.payload
        },
    },
})

export const { ProviderDataAction } = providerDataSlice.actions

export const providerDataReducer = providerDataSlice.reducer