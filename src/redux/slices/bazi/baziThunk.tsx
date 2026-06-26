import { createAsyncThunk } from "@reduxjs/toolkit";
import { post_no_auth_api, get_no_auth_api, delete_no_auth_api } from "@/redux/api_request";

export const fetchBazi = createAsyncThunk(
    "bazi/fetchBazi",
    async (data: any, {rejectWithValue}) => {
        try {
            const res = await post_no_auth_api("https://bestyearever2023.jennelcheng.com/api/report/index",data)
            return res.data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const fetchMonthly = createAsyncThunk(
    "bazi/fetchMonthly",
    async (year: number, {rejectWithValue}) => {
        try {
            const res = await get_no_auth_api(`${process.env.NEXT_PUBLIC_QIMEN_URL_LOCAL}${year}`)
            return res.data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const fetchDaily = createAsyncThunk(
    "bazi/fetchDaily",
    async (year: number, {rejectWithValue}) => {
        try {
            const res = await get_no_auth_api(`${process.env.NEXT_PUBLIC_QIMEN_URL_LOCAL_DAILY}${year}`)
            return res.data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const fetchAllDiary = createAsyncThunk(
    "bazi/fetchAllDiary",
    async (user: number, {rejectWithValue}) => {
        try {
            const res = await get_no_auth_api(`${process.env.NEXT_PUBLIC_FORECAST_URL}api/bazi/index/${user}`)
            return res.data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const deleteDiary = createAsyncThunk(
    "bazi/deleteDiary",
    async (diary_id: number, {rejectWithValue}) => {
        try {
            const res = await delete_no_auth_api(`${process.env.NEXT_PUBLIC_FORECAST_URL}api/bazi/delete/${diary_id}`)
            return res.data
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)