import HomeSlider from "./components/HomeSlider";
import OnboardSection from "./components/OnboardSection";
import WaitingList from "./components/WaitingList";
import FAQs from "./components/FAQs";
import Qualities from "./components/Qualities";
import Drive from "./components/Drive";

const Home = () => {
  let screenWidth = window.innerWidth;

  return (
    <>
      <HomeSlider />
      <OnboardSection screenWidth={screenWidth} />
      <WaitingList />
      <FAQs />
      <Qualities />
      <Drive />
    </>
  );
};

export default Home;
