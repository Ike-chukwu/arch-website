import React from "react";
import "./Featured.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import Cards from "./Cards/Cards";

const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
        <h2>Featured</h2>
        <Button className="importedBtn">See all</Button>
      </div>

      <div className="cards">
        <Cards />
      </div>

      <Link to="/portfolio">
        <div className="see">
          <p>See all</p>
          <i className="fas fa-chevron-right"></i>
        </div>
      </Link>
    </section>
  );
};

export default Featured;
