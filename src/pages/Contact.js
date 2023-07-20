import React from "react";
import Location from "../Components/Location/Location";
import Details from "../Components/Details/Details";
import cdHero from "../assets/contact/desktop/image-hero.jpg"
import cTablet from "../assets/contact/tablet/image-hero.jpg"
import cMobile from "../assets/contact/mobile/image-hero.jpg"
import './Contact.css'
import ContactDetails from "../Components/ContactDetails/ContactDetails";
import Map from "../Components/Map/Map";
import Conntect from "../Components/Conntect/Conntect";
import BottomNav from '../Components/BottomNav/BottomNav'

const Contact = () => {
  return (
    <div className="contact">
      <Location>Contact</Location>
      <Details
        mImage={cMobile}
        tImage={cTablet}
        dImage={cdHero}
        beforeBreaker={"Tell us about"}
        afterBreaker="your project"
        content=" We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      />
      <ContactDetails/>
      <Map/>
      <Conntect/>
      <BottomNav/>
    </div>
  );
};

export default Contact;
