import React from "react";
import "./OfficeDetails.css";
import {Link} from "react-router-dom"
import './OfficeDetails.css'
import arrow from "../../../assets/icons/icon-arrow-black.svg";



const OfficeDetails = (props) => {
  return (
    <div className="add-pack">
      <div className="pack-parent">
        <p className="main-add">{props.office}</p>
        <div className="others">
          <p className="other-adds">Mail: {props.mail}</p>
          <p className="other-adds">Address: {props.address}</p>
          <p className="other-adds">Phone: {props.phone}</p>
        </div>
      </div>
      <Link>
        <div className="linker">
          View on Map
          <img src={arrow} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default OfficeDetails;
