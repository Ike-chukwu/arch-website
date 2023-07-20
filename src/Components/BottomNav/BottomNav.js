import React from "react";
import "./BottomNav.css";
import Logo from "../../assets/logo-white.svg";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const BottomNav = () => {
  return (
    <section className="footer-parent">
      <div className="footer">
        <div className="logo">
        <Link>
          <img src={Logo} alt="" />
        </Link>
        </div>
        <div className="links">
        <Link to="/portfolio">
          <span>Porfolio</span>
        </Link>
        <Link to="/aboutus">
          <span>About Us</span>
        </Link>
        <Link to="/contact">
          <span>Contact</span>
        </Link>
        </div>
        <Button>
        <Link to="/portfolio" className="p-l">
        <span>See Our Portfolio</span>
        </Link>
        </Button>
      </div>
    </section>
  );
};

export default BottomNav;
