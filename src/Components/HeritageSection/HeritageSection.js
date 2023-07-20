import React from "react";
import "./HeritageSection.css";
import SmallHyphen from "../Details/SmaalHyphen/SmallHyphen";
import heriD from "../../assets/about/desktop/image-heritage.jpg";

const HeritageSection = () => {
  return (
    <section className="heritage">
      <div className="left">
        <SmallHyphen />
        <div className="texts">
          <h2>
            Our <br />
            Heritage
          </h2>
          <div className="p-pack">
            <p>
              We have a unique network and skillset to help bring your projects
              to life. Our small team of highly skilled individuals combined
              with our large network put us in a strong position to deliver
              exceptional results.
            </p>
            <p>
              Over the past 10 years, we have worked on all kinds of projects.
              From stations to high-rise buildings, we create spaces that
              inspire and delight.
            </p>
            <p>
              We work closely with our clients so that we understand the
              intricacies of each project. This allows us to work in harmony the
              surrounding area to create truly stunning projects that will stand
              the test of time.
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={heriD} alt="" />
      </div>
    </section>
  );
};

export default HeritageSection;
