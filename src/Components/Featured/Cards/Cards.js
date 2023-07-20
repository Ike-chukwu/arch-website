import React from "react";
import "./Cards.css";
import Card from "./Card/Card";
import deskImgDelSol from "../../../assets/portfolio/desktop/image-del-sol.jpg";
import deskImgTower from "../../../assets/portfolio/desktop/image-228b.jpg";
import deskImgPrototype from "../../../assets/portfolio/desktop/image-prototype.jpg";
import tabletImgDelSol from "../../../assets/portfolio/tablet/image-del-sol.jpg";
import tabletImgTower from "../../../assets/portfolio/tablet/image-228b.jpg";
import tabletImgPrototype from "../../../assets/portfolio/tablet/image-prototype.jpg";
import mobileImgDelSol from "../../../assets/portfolio/mobile/image-del-sol.jpg";
import mobileImgTower from "../../../assets/portfolio/mobile/image-228b.jpg";
import mobileImgPrototype from "../../../assets/portfolio/mobile/image-prototype.jpg";

const Cards = () => {
  return (
    <div className="cards">
      <Card
        deskLocation={deskImgDelSol}
        tabLocation={tabletImgDelSol}
        phoneLocation={mobileImgDelSol}
        position="1"
        place="Project Del Sol"
        details="View all projects"
      />
      <Card
        deskLocation={deskImgTower}
        tabLocation={tabletImgTower}
        phoneLocation={mobileImgTower}
        position="2"
        place="228B Tower"
        details="View all projects"
      />
      <Card
        deskLocation={deskImgPrototype}
        tabLocation={tabletImgPrototype}
        phoneLocation={mobileImgPrototype}
        position="3"
        place="Le Prototype"
        details="View all projects"
      />
    </div>
  );
};

export default Cards;
