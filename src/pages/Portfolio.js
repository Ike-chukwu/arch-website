import React from "react";
import Works from "../Components/BottomNav/Works/Works";
import Location from "../Components/Location/Location";
import BottomNav from "../Components/BottomNav/BottomNav";
import AnimatePage from "../Components/AnimatePage/AnimatePage";

const Portfolio = () => {
  return (
    <AnimatePage>
      <div className="port">
        <Location>Portfolio</Location>
        <Works />
        <BottomNav />
      </div>
    </AnimatePage>
  );
};

export default Portfolio;
