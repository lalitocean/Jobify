import useGetAllJobs from "@/hooks/useGetAllJobs";
import HeroSection from "../HeroSection";
import LatestJobes from "../LatestJobes";

const Home = () => {

  

  useGetAllJobs();
  return (
    <>
      <HeroSection />
      <LatestJobes />
    </>
  );
};

export default Home;
