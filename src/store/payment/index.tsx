import { createSlice } from '@reduxjs/toolkit';
import { Payment } from './api_action';
import { IReceipt } from '../../models'

interface PaymentState {
    paymentData: IReceipt,
    error: Object | null | undefined

}

const initialState = { paymentData: {}, error: null } as PaymentState


const PaymentSlice = createSlice({
    name: 'paymentSlice',
    initialState,
    reducers: {},
    extraReducers: {
        [Payment.fulfilled.type]: (state, action) => {
            state.paymentData = action.payload
        },
        [Payment.rejected.type]: (state, action) => {
            state.error = action.data
        }
    }
})
export { Payment }

export const paymentReducer = PaymentSlice.reducer;