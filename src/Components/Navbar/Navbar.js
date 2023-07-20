import React, {useState, useEffect} from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";


const Navbar = () => {

  const [navOpen, setNavOpen] = useState(false)

  useEffect(() => {
    const html = document.querySelector("html")
    if(html){
      html.style.overflow = navOpen? "hidden" : "auto"
    }
  }, [navOpen])


  const navOpenToggler = () => {
    setNavOpen(!navOpen)
  }

  return (
    <div>
      <nav>
        <div className="links-parent">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className={navOpen? "l-cover active" : "l-cover"}>
            <div className="links">
              <Link to="/portfolio">
                <span>Portfolio</span>
              </Link>
              <Link to="/about-us">
                <span>About Us</span>
              </Link>
              <Link to="/contact">
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>

      <i className={navOpen? "fas fa-times" :"fas fa-bars"}  onClick={navOpenToggler}></i>
      </nav>
    </div>
  );
};

export default Navbar;
