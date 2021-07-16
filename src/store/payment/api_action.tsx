import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../client";

export const Payment = createAsyncThunk(
    "payment",
    async (paymentData: any, thunkAPI) => {

        try {
            const data = await client("payment/new", paymentData, {});
            return data

        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }

    }
);
