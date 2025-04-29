import {ADMIN_API_END_POINT} from "@/utils/constant";
import {useEffect} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setAdminAllJobs} from "@/redux/jobSlice";

const useGetAllAdminJob = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAdminJobs = async () => {
      try {
        const res = await axios.get(`${ADMIN_API_END_POINT}/adminjob`, {
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
