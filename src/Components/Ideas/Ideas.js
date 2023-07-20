import React from "react";
import teamImg from "../../../src/image-small-team.jpg";
import teamImgTablet from "../../assets/home/tablet/image-small-team.jpg";
import teamImgPhone from "../../assets/home/mobile/image-small-team.jpg";
import Button from "../Button/Button";
import "./Ideas.css";
import { Link } from "react-router-dom";


function Ideas() {
  return (
    <section className="ideas">
      <img src={teamImg} className="desktop" alt="" />
      <img src={teamImgTablet} className="tablet" alt="" />
      <img src={teamImgPhone} className="phone" alt="" />
      <div className="content">
        <h2>
          Small team,
          <br /> big ideas
        </h2>
        <Link to="/about-us">
          <Button>About us </Button>
        </Link>
      </div>
    </section>
  );
}

export default Ideas;
