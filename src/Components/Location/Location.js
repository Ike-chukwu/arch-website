import React from "react";
import "./Location.css";

const Location = (props) => {
  return (
    <div className="loc-container">
      <div className="line"></div>
       <p className="title">{props.children}</p> 
    </div>
  );
};

export default Location;
