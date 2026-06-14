import { post_no_auth_api } from "@/redux/api_request";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (payload: any, {rejectWithValue}) => {
        try{
            const res = await post_no_auth_api(`${process.env.NEXT_PUBLIC_BASE_URL}api/auth-jwt/login`,payload)
            return res.data
        } catch (error){
            return rejectWithValue({
                message: "Something went wrong",
            });
        }
    }
)


export const registerUser = createAsyncThunk(
  "user/register",
  async (form: any, {rejectWithValue}) => {
    try {
      const res = await post_no_auth_api(`${process.env.NEXT_PUBLIC_FORECAST_URL}api/user/register`, form);
      return res.data;
    } catch (error) {
      return rejectWithValue({
        message: "Registration failed. Please try again.",
      });
    }
  }
);