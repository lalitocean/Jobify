import {createSlice} from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singalCompany: null,
    companies: [],
    searchCompany: "",
  },
  reducers: {
    setSingalCompany: (state, action) => {
      state.singalCompany = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setsearchCompany: (state, action) => {
      state.searchCompany = action.payload;
    },
  },
});

export const {setSingalCompany, setCompanies, setsearchCompany} =
  companySlice.actions;
export default companySlice.reducer;
