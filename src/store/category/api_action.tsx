import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../client";

export const CategoryData = createAsyncThunk(
    "categoryData",
    async (paymentType, thunkAPI) => {
        try {
            const data = await client("payment/categories");
            console.log('sdsd:',data);

        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }

    }
);
