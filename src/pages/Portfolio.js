import React from "react";
import Works from "../Components/BottomNav/Works/Works";
import Location from "../Components/Location/Location";
import BottomNav from "../Components/BottomNav/BottomNav";

const Portfolio = () => {
  return (
    <div className="port">
      <Location>Portfolio</Location>
      <Works />
      <BottomNav/>
    </div>
  );
};

export default Portfolio;
