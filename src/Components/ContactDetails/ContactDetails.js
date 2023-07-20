import React from "react";
import "./ContactDetails.css";
import { Link } from "react-router-dom";
import arrow from "../../assets/icons/icon-arrow-black.svg";
import OfficeDetails from "./OfficeDetails/OfficeDetails";

const ContactDetails = () => {
  return (
    <section className="contact-add">
      <h2>
        Contact <br /> Details
      </h2>
      <OfficeDetails
        office="Main Office"
        mail="archone@mail.com"
        address="1892 Chenoweth Drive TN"
        phone="123-456-3451"
      />
      <OfficeDetails
        office="Office II"
        mail="archone@mail.com"
        address="3399 Wines Lane TX"
        phone="832-123-4321"
      />
    </section>
  );
};

export default ContactDetails;
