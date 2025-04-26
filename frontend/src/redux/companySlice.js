import {createSlice} from "@reduxjs/toolkit";

const companySlice = createSlice({
  name: "company",
  initialState: {
    singalCompany: null,
  },
  reducers: {
    setSingalCompany: (state, action) => {
      state.singalCompany = action.payload;
    },
  },
});

export const {setSingalCompany} = companySlice.actions;
export default companySlice.reducer;
