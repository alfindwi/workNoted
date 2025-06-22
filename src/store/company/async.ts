import { api } from "@/lib/api";
import type { ICompany } from "@/type/ICompany";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const getCompany = createAsyncThunk(
  "company/getCompany",
  async (_, thunkAPI) => {
    try {
      const res = await api.get(`/company`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const createCompany = createAsyncThunk(
  "company/createCompany",
  async (data: ICompany, thunkAPI) => {
    try {
      const res = await api.post(`/company`, data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      return res.data;
    } catch (error: any) {
      const message =
        error.response?.data?.error || error.message || "Terjadi kesalahan";
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCompanyById = createAsyncThunk(
  "company/getCompanyById",
  async (id: number, thunkAPI) => {
    try {
      const res = await api.get(`/company/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateCompany = createAsyncThunk(
  "company/updateCompany",
  async (data: { id: number; data: Partial<ICompany> }, thunkAPI) => {
    try {
      const res = await api.put(`/company/${data.id}`, data.data, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to update company");
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "company/deleteCompany",
  async (id: number, thunkAPI) => {
    try {
      const res = await api.delete(`/company/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
