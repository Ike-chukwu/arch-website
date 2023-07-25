import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Location from "../Components/Location/Location";
import Welcome from "../Components/Welcome/Welcome";
import Ideas from "../Components/Ideas/Ideas";
import Featured from "../Components/Featured/Featured";
import BottomNav from "../Components/BottomNav/BottomNav";
import AnimatePage from "../Components/AnimatePage/AnimatePage";

const Homepage = () => {
  return (
    <AnimatePage>
      <Location>Home</Location>
      <HeroSection />
      <Welcome />
      <Ideas />
      <Featured />
      <BottomNav />
    </AnimatePage>
  );
};

export default Homepage;
