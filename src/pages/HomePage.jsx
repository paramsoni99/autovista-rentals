import HeroSection from "../sections/HeroSection";
import ServiceSection from "../sections/ServiceSection";
// import all sections imports here
import EventTypeSection from "./../sections/EventTypeSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <EventTypeSection />
    </div>
  );
};

export default HomePage;
