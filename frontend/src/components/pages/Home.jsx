import useGetAllJobs from "@/hooks/useGetAllJobs";
import HeroSection from "../HeroSection";
import LatestJobes from "../LatestJobes";
import {useSelector} from "react-redux";
import Companies from "./Companies";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

const Home = () => {
  useGetAllJobs();
  const {user} = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  });

  return (
    <>
      <HeroSection />
      <LatestJobes />
    </>
  );
};

export default Home;
