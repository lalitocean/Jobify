import { setSingalCompany } from "@/redux/companySlice";
import { apiRequest } from "@/utils/axios";


import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetSingalCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingalCompany = async () => {
      try {
        const res = await apiRequest.get(
          `company/get/${companyId}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          dispatch(setSingalCompany(res.data.company));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingalCompany();
  }, [companyId, dispatch]);
};

export default useGetSingalCompanyById;
