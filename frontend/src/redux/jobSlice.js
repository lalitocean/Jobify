import {createSlice} from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singalJob: null,
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingalJob: (state, action) => {
      state.singalJob = action.payload;
    },
  },
});

export const {setAllJobs, setSingalJob} = jobSlice.actions;
export default jobSlice.reducer;
