import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import data from "../data";
import { Link } from "react-router-dom";

const positions = [0, 1, 2, 3];

const HeroSection = () => {
  const [building, setBuilding] = useState(data);
  const [buildingIndex, setIndex] = useState(0);

  useEffect(() => {
    const buildingLength = building.length - 1;
    if (buildingIndex < 0) {
      setIndex(buildingLength);
    }
    if (buildingIndex > buildingLength) {
      setIndex(0);
    }
  }, [buildingIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(buildingIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [buildingIndex]);

  return (
    <section className="hero">
      <div className="hero-pack">
        {data.map((item, index) => {
          let position = "nextSlide";

          if (buildingIndex == index) {
            position = "activeSlide";
          }
          if (
            index == buildingIndex - 1 ||
            (buildingIndex == 0 && index == building.length - 1)
          ) {
            position = "lastSlide";
          }

          const { id, image, heading, subtext } = item;
          return (
            <article key={id + "yeah"} className={position}>
              <img src={image} key={id} alt={heading} className="person-img" />
              <div className="text-content">
                <h4 className="heading">{heading}</h4>
                <p className="text">{subtext}</p>
              </div>
            </article>
          );
        })}
        <Link to="/portfolio">
          <div className="port-link">
            <span>See our Portfolio</span>
            <i className="fas fa-chevron-right"></i>
          </div>
        </Link>

        <div className="indicator">
          {positions.map((number, index) => {
            if (number == buildingIndex) {
              return <span className="active">{`0${number + 1}`}</span>;
            }
            return <span>{`0${number + 1}`}</span>;
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
