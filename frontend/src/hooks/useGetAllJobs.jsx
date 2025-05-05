import { setAllJobs } from "@/redux/jobSlice";
import { apiRequest } from "@/utils/axios";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllJobs = async () => {
      try {
        const res = await apiRequest.get(`job/get`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllJobs();
  }, []);
};

export default useGetAllJobs;
