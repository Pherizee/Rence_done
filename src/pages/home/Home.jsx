import HomeSlider from "./components/HomeSlider";
import OnboardSection from "./components/OnboardSection";

const Home = () => {
  let screenWidth = window.innerWidth;

  return (
    <>
      <HomeSlider />
      <OnboardSection screenWidth={screenWidth} />
    </>
  );
};

export default Home;
