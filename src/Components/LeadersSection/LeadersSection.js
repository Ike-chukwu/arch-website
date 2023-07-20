import React from "react";
import "./LeadersSection.css";
import linkedin from "../../assets/icons/icon-linkedin.svg";
import linkedinW from "../../assets/icons/icon-linkedin-white.svg";
import twitter from "../../assets/icons/icon-twitter.svg";
import twitterW from "../../assets/icons/icon-twitter-white.svg";
import Jake from "../../assets/about/desktop/avatar-jake.jpg";
import Jackson from "../../assets/about/desktop/avatar-jackson.jpg";
import Maria from "../../assets/about/desktop/avatar-maria.jpg";
import Smith from "../../assets/about/desktop/avatar-thompson.jpg";

const LeadersSection = () => {
  return (
    <section className="leaders">
      <div className="left">
        <h2>
          The <br /> Leaders
        </h2>
      </div>
      <div className="right">
        <div className="workers">
          <div className="worker">
            <div className="p-deets">
              <img src={Jake} className="person" alt="" />
              <div className="black-bg">
                <img src={linkedinW} alt="" />
                <img src={twitterW} alt="" />
              </div>
            </div>
            <div className="more-deets">
              <p className="name">Jake Richards</p>
              <p className="role">Chief Architect</p>
              <i className="socials">
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
              </i>
            </div>
          </div>
          <div className="worker">
            <div className="p-deets">
              <img src={Smith} className="person" alt="" />
              <div className="black-bg">
                <img src={linkedinW} alt="" />
                <img src={twitterW} alt="" />
              </div>
            </div>
            <div className="more-deets">
              <p className="name">Thompson Smith</p>
              <p className="role">Head of Finance</p>
              <i className="socials">
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
              </i>
            </div>
          </div>
          <div className="worker">
            <div className="p-deets">
              <img src={Jackson} className="person" alt="" />
              <div className="black-bg">
                <img src={linkedinW} alt="" />
                <img src={twitterW} alt="" />
              </div>
            </div>
            <div className="more-deets">
              <p className="name">Jackson Rourke</p>
              <p className="role">Lead Designer</p>
              <i className="socials">
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
              </i>
            </div>
          </div>
          <div className="worker">
            <div className="p-deets">
              <img src={Maria} className="person" alt="" />
              <div className="black-bg">
                <img src={linkedinW} alt="" />
                <img src={twitterW} alt="" />
              </div>
            </div>
            <div className="more-deets">
              <p className="name">Maria Simpson</p>
              <p className="role">Senior Architect</p>
              <i className="socials">
                <img src={linkedin} alt="" />
                <img src={twitter} alt="" />
              </i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadersSection;
