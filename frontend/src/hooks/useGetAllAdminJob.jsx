
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setAdminAllJobs } from "@/redux/jobSlice";
import { apiRequest } from "@/utils/axios";

const useGetAllAdminJob = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAdminJobs = async () => {
      try {
        const res = await apiRequest.get(`job/adminjob`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAdminAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAdminJobs();
  }, []);
};

export default useGetAllAdminJob;
