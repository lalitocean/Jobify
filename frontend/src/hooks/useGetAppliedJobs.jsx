import { setAppliedJobs } from "@/redux/jobSlice";
import { apiRequest } from "@/utils/axios";


import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAppliedJobs = async () => {
      try {
        const res = await apiRequest.get(`application/applied`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAppliedJobs(res.data.applications));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAppliedJobs();
  }, []);
};

export default useGetAppliedJobs;
