import React from "react";
import "./Details.css";
import SmallHyphen from "./SmaalHyphen/SmallHyphen";

const Details = (props) => {
  return (
    <section className="details">
      <div className="left">
        <picture>
          <source srcSet={props.mImage} media="(max-width:750px)" />
          <source srcSet={props.tImage} media="(max-width:1200px)" />
          <img src={props.dImage} alt="" />
        </picture>
        
      </div>
      <div className="right">
        <SmallHyphen/>
        <div className="content">
          <h4>
            {props.beforeBreaker} <br /> {props.afterBreaker}
          </h4>
          <p>{props.content}</p>
        </div>
      </div>
    </section>
  );
};

export default Details;
