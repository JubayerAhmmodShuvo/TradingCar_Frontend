import Delivery from "@/components/Delivery";
import HeroSection from "@/components/Main/HeroSection";
import ShowProduct from "@/components/ShowProduct";
import Summary from "@/components/Summary";
import UpComingServices from "@/components/UpComingServices";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ShowProduct />
      <UpComingServices />
      <Summary />
      <Delivery />
    </>
  );
};

export default HomePage;
