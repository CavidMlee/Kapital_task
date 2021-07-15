import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../client";

export const CategoryData = createAsyncThunk(
    "categoryData",
    async (config, thunkAPI) => {
        try {
            const data = await client("payment/categories");
            return data

        }
        catch (err) {
            return thunkAPI.rejectWithValue(err.response)
        }

    }
);
