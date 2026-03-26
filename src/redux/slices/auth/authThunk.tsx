import { post_no_auth_api } from "@/redux/api_request";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (payload: any, {rejectWithValue}) => {
        try{
            const res = await post_no_auth_api(`${process.env.NEXT_PUBLIC_BASE_URL}api/user/login/`,payload)
            return res.data
        } catch (error){
            return rejectWithValue({
                message: "Something went wrong",
            });
        }
    }
)