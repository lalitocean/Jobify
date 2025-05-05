
import { useEffect } from "react";

import { setCompanies } from "@/redux/companySlice";
import { useDispatch } from "react-redux";
import { apiRequest } from "@/utils/axios";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await apiRequest.get(`company/get`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCompanies();
  }, []);
};

export default useGetAllCompanies;
