import type { ICompany } from "@/type/ICompany";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  createCompany,
  deleteCompany,
  getCompany,
  getCompanyById,
  updateCompany,
} from "./async";

interface CompanyState {
  companies: ICompany[];
  loading: boolean;
  error: string | null;
}

const initialState: CompanyState = {
  companies: [],
  loading: false,
  error: null,
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
        state.error = null;
      })
      .addCase(getCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getCompanyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCompanyById.fulfilled, (state, action) => {
        state.loading = false;
        state.companies = action.payload;
        state.error = null;
      })
      .addCase(getCompanyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(createCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createCompany.fulfilled,
        (state, action: PayloadAction<ICompany>) => {
          state.companies.push(action.payload);
          state.error = null;
        }
      )
      .addCase(createCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(updateCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCompany.fulfilled, (state, action) => {
        const index = state.companies.findIndex(
          (company) => company.id === action.payload.id
        );
        if (index !== -1) {
          state.companies[index] = action.payload;
        }
        state.loading = false;
      })
      .addCase(updateCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(deleteCompany.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.companies = state.companies.filter(
          (company) => company.id !== action.payload
        );
        state.loading = false;
      })
      .addCase(deleteCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default companySlice.reducer;
