import {setSingalCompany} from "@/redux/companySlice";
import {COMPANY_API_END_POINT} from "@/utils/constant";
import axios from "axios";
import {useEffect} from "react";
import {useDispatch} from "react-redux";

const useGetSingalCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingalCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_END_POINT}/get/${companyId}`,
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
