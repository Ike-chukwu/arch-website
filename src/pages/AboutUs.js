import React from "react";
import Details from "../Components/Details/Details";
import Location from "../Components/Location/Location";
import heroD from "../assets/about/desktop/image-hero.jpg";
import heroT from "../assets/about/tablet/image-hero.jpg";
import HeritageSection from "../Components/HeritageSection/HeritageSection";
import LeadersSection from "../Components/LeadersSection/LeadersSection";
import BottomNav from '../Components/BottomNav/BottomNav'
import heroM from "../assets/about/mobile/image-hero.jpg";
import './AboutUs.css'


const AboutUs = () => {
  return (
    <div className="about">
      <Location>About us</Location>
      <Details
        mImage={heroM}
        tImage={heroT}
        dImage={heroD}
        beforeBreaker={"Your team of"}
        afterBreaker="professionals"
        content=" Our small team of world-class professionals will work with you every
            step of the way. Strong relationships are at the core of everything
            we do. This extends to the relationship our projects have with their
            surroundings."
      />
      <HeritageSection/>
      <LeadersSection/>
      <BottomNav/>
    </div>
  );
};

export default AboutUs;
