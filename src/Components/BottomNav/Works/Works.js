import React from "react";
import Card from "../../Featured/Cards/Card/Card";
import Location from "../../Location/Location";
import { pics } from "../../data";
import './Works.css'


const Works = () => {
  return (
    <section className="card-distro">
      {pics.map((item, index) => {
        const { id, heading, subtext, imgD, imgT, imgM } = item;
        return (
          <Card
            deskLocation={imgD}
            tabLocation={imgT}
            phoneLocation={imgM}
            place={heading}
            details={subtext}
          />
        );
      })}
    </section>
  );
};

export default Works;
