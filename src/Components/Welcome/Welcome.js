import React from "react";
import "./Welcome.css";
import wel from "../../../src/image-welcome.jpg";

const Welcome = () => {
  return (
    <section className="welcome">
      {/* <h1 className="heading">Welcome</h1> */}
      <div className="welcome-content">
        <div className="left">
          <h2>
            Welcome to <br /> Arch Studio
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
        <div className="right">
          <img src={wel} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
